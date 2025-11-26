# Binary Classification (CKD) — Module Overview

This module contains the tabular CKD prediction experiments and a small demo application for serving model predictions locally. It is split into two main parts: a small server for model inference and a frontend app for interactive demos.

Module map

- `SERVER/` — Python demo server and inference utilities. See `SERVER/README.md` for conceptual details and quick-start instructions.
- `FRONTEND/` — React + TypeScript demo UI that calls the server to display predictions and AI insights. See `FRONTEND/README.md` inside the folder for full frontend documentation and commands.

Purpose and recommended workflow

1. Train or obtain a tabular CKD model (keep large artifacts out of the repo).
2. Place or configure the model path so the `SERVER` can load it for inference.
3. Run the `SERVER` locally and use the `FRONTEND` to send sample inputs and view results.

Quick links

- `binary_classification_ckd/SERVER/README.md` — server conceptual README and quick-start
- `binary_classification_ckd/FRONTEND/README.md` — frontend project README with structure, commands, and deployment notes

Security & data handling

- Do not commit patient data or PHI. Use external secure storage for datasets and list only data pointers or small samples in the repo.
- Add `.gitignore` entries for model files, checkpoints, and environment files.

If you want, I can:
- Add a `sample_input.json` and example `curl`/PowerShell command to call the server, or
- Commit these READMEs and create a small `DATA.md` template describing dataset placement.

