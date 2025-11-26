# CKD Binary Classification Flask Server

This repository contains a small Flask server that trains a binary classifier on `kidney_disease.csv` (if present) and exposes a simple prediction API.

Files added:

- `SERVER/app.py` — Flask server with endpoints:
  - `GET /` - simple placeholder UI for manual testing
  - `POST /train` - trains a model from `kidney_disease.csv` (expected at project root) and saves it to `SERVER/model.pkl`
  - `POST /predict` - accepts JSON with `data` (object or list of objects) and returns predictions
  - `GET /health` - basic health check
- `requirements.txt` — Python dependencies

Quick start

1. Create and activate a Python virtual environment (recommended):

```powershell
python -m venv .venv; .\.venv\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the server:

```powershell
python SERVER\app.py
```

4. In a browser open `http://localhost:5000/` to use the small test UI, or call the endpoints directly (`/train`, `/predict`).

Notes

- The training code tries to find a label column (`class`, `target`, etc.) or falls back to the last column in the CSV.
- The server will attempt to train on startup if no saved model is found.
- The UI is a placeholder. You can replace it later with a real front-end.

Next steps

- Add a proper UI (React/Vue) that calls `/predict`.
- Harden input validation and schema checks.
- Add unit tests for the prediction logic.
