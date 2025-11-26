
# CKD Prediction (Repo Overview)

This repository holds experiments and tooling for predicting and analyzing Chronic Kidney Disease (CKD) using tabular and image data. It is organized as small, focused modules so you can run, develop, and compare different approaches independently.

Quick map

- `binary_classification_ckd/` — Tabular models and demos. Contains a `SERVER/` (Python demo server) and a `FRONTEND/` (demo UI) subfolder. See `binary_classification_ckd/README.md` for module details and `binary_classification_ckd/SERVER/README.md` and `binary_classification_ckd/FRONTEND/README.md` for component docs.
- `image_classification_ckd/` — Image-based experiments and notebooks for image classification approaches. See `image_classification_ckd/README.MD` (coming soon).
- `FRONTEND/` — Top-level frontend app (TypeScript + Vite) for project-wide demos or integration. See `FRONTEND/README.md` for setup and development instructions.

Purpose and guidance

- Use the `binary_classification_ckd` module for tabular ML prototyping (data preprocessing, model training, evaluation, and a minimal Flask-like demo server).
- Use `image_classification_ckd` for image experiments. The folder contains a short placeholder README and will receive notebooks and scripts.
- The `FRONTEND` contains the web UI that can call the server endpoints (when available) to display model results.