from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import joblib
import pandas as pd

# Path to the model file that you said exists in this workspace
APP_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_MODEL_PATH = os.path.join(APP_DIR, "trained_ckd_model.pkl")

app = Flask(__name__)
# Allow CORS for external UI
CORS(app)


def load_model(path=None):
	if path is None:
		path = DEFAULT_MODEL_PATH
	app.logger.info(f"Loading model from {path}")
	if not os.path.exists(path):
		return None
	try:
		obj = joblib.load(path)
		return obj
	except Exception as e:
		app.logger.error(f"Failed to load model from {path}: {e}")
		return None


# Try load at startup
MODEL_ARTIFACT = load_model()

all_routes = {
	"index": {"end_point": "/", "method": "GET"},
	"health": {"end_point": "/health", "method": "GET"},
	"features": {"end_point": "/features", "method": "GET"},
	"predict": {"end_point": "/predict", "method": "POST"},
}

@app.route("/", methods=["GET"])
def index():
	return jsonify({"message": "Welcome to the CKD Prediction API", "routes": all_routes})

@app.route("/health", methods=["GET"])
def health():
	return jsonify({"status": "ok", "model_loaded": MODEL_ARTIFACT is not None})


@app.route("/features", methods=["GET"])
def features():
	"""Return expected feature names if the saved model contains them.

	If the underlying artifact is a dict and contains 'feature_columns', that list is returned.
	Otherwise, returns a helpful message.
	"""
	if MODEL_ARTIFACT is None:
		return jsonify({"error": "No model loaded"}), 400

	# If model artifact is a dict with metadata
	if isinstance(MODEL_ARTIFACT, dict) and "feature_columns" in MODEL_ARTIFACT:
		return jsonify({"features": MODEL_ARTIFACT["feature_columns"]})

	# If it's a pipeline, we may not have explicit feature names
	return jsonify({"message": "Feature names not available in model artifact. Provide a sample JSON to /predict or save model with feature metadata."}), 200


@app.route("/predict", methods=["POST"])
def predict():
	"""Accept JSON with key 'data' containing a single object or a list of objects representing feature values.

	Example:
	  {"data": {"age": 45, "bp": 80, ...}}
	or
	  {"data": [{...}, {...}]}
	"""
	global MODEL_ARTIFACT
	if MODEL_ARTIFACT is None:
		return jsonify({"error": "Model not loaded. Please ensure trained_ckd_model.pkl is present in SERVER/"}), 400

	payload = request.get_json(silent=True)
	if not payload or "data" not in payload:
		return jsonify({"error": "JSON body must contain 'data' key with object or list of objects"}), 400

	data = payload["data"]
	single = False
	if isinstance(data, dict):
		data = [data]
		single = True

	try:
		df = pd.DataFrame(data)
	except Exception as e:
		return jsonify({"error": f"Failed to convert input to DataFrame: {e}"}), 400

	# If artifact contains feature_columns, ensure DataFrame has those columns (create missing with NaN)
	if isinstance(MODEL_ARTIFACT, dict) and "feature_columns" in MODEL_ARTIFACT:
		expected = MODEL_ARTIFACT["feature_columns"]
		for col in expected:
			if col not in df.columns:
				df[col] = pd.NA
		df = df[expected]

	# Determine prediction pipeline/object
	model_obj = None
	if isinstance(MODEL_ARTIFACT, dict) and "pipeline" in MODEL_ARTIFACT:
		model_obj = MODEL_ARTIFACT["pipeline"]
	else:
		model_obj = MODEL_ARTIFACT

	try:
		preds = model_obj.predict(df)
	except Exception as e:
		return jsonify({"error": f"Prediction failed: {e}"}), 500

	result = {"predictions": preds.tolist()}

	# Add probabilities if available
	try:
		if hasattr(model_obj, "predict_proba"):
			proba = model_obj.predict_proba(df).tolist()
			result["probabilities"] = proba
	except Exception:
		# ignore probability errors
		pass

	if single:
		# unwrap single-result lists
		result = {k: (v[0] if isinstance(v, list) and len(v) > 0 else v) for k, v in result.items()}

	return jsonify(result)


if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000, debug=True)
