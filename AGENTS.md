# AGENTS.md

Purpose
-------
Short, actionable instructions for AI coding agents working on this repository (personal web portfolio).

Quick repo summary
------------------
- Small static web portfolio: single-page site with `index.html`, `script.js`, `style.css`.
- No build system or tests included.

How to run / test
------------------
- Open `index.html` in a browser (double-click or `Live Server` in VS Code).

Conventions & expectations for agents
-------------------------------------
- Keep changes minimal and focused; prefer small, reviewable commits.
- Preserve the project's simple structure; avoid adding heavy toolchains unless requested.
- When editing JavaScript, aim for vanilla JS compatibility and avoid transpilers.
- Respect existing styling and layout; ask before introducing large design changes.

Key files
---------
- `index.html` — main page and entry point.
- `script.js` — interactive behaviors.
- `style.css` — site styling.

When you modify files
---------------------
- Run quick manual check by opening `index.html` in a browser.
- If adding dependencies or scripts, include a short README note describing why.

Suggested next agent customizations
----------------------------------
- Add a short `.github/` workflow to run simple linting (optional).
- Create a small `AGENT` or `skill` file for formatting and commit message guidance.

Contact / feedback
------------------
If anything here is unclear or you'd like stronger guardrails (code style, pre-commit hooks, CI), tell me and I will add them.
