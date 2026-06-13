# Sompter AI

Always-on Mac agent with vision-based screen awareness, web search, Apple Notes integration, and SQLite memory.

## Features

- **Watch Mode** — 24/7 background daemon observes your screen, reads Apple Notes, generates AI observations using gemma3:12b vision + moondream fast mode
- **Proactive Web Search** — Automatically searches the web for tracked sports teams, detected interests, and current events during idle periods
- **Interest Learning** — Daemon detects what you care about (coding, weather, news, sports) by analyzing observation history
- **Sports Tracking** — Track teams like "Los Angeles Dodgers" — daemon fetches scores, news, and standings automatically
- **Memory Layer** — SQLite database stores observations, daily summaries, and detected patterns
- **Memory UI** — In-app panel showing observation stats, recent observations, daily summaries, and detected interests
- **Daily Summaries** — Midnight compression of observations into summary notes
- **Chat** — Multi-provider AI chat (Ollama, Gemini, OpenAI) with streaming responses
- **Browser Control** — Playwright + pyautogui dual control for web automation
- **Daemon Health Panel** — Real-time status, PID, cycle count, start/stop/restart controls with 5s polling
- **macOS Services Panel** — Manage Backend, Ollama, OpenCode from the UI

## Quick Start

```bash
git clone <repo>
cd sompter-ai
npm install
cp .env.example .env   # Add API keys
npm run dev            # Starts backend (:8787), Electron, and OpenCode (:4096)
npm run status         # Health dashboard for all services
npm test               # Run 24 unit tests
```

## Requirements

- macOS 12.0+ (Apple Silicon or Intel)
- Ollama with `gemma3:12b` and `moondream` models
- npm / Node.js 18+
- Screen Recording permission (for screenshots)
- Accessibility permission (for OS control)

## Build DMG

```bash
npm run build:dmg
```

## Project Structure

```
sompter-ai/
├── app/                    # Electron frontend
│   ├── main.js            # Main process (IPC handlers, window, tray)
│   ├── renderer.js        # Preload bridge
│   ├── index.html         # UI (chat, watch panel, memory panel, settings)
│   ├── style.css          # Dark purple theme
│   └── entitlements.mac.plist  # Hardened runtime entitlements
├── backend/               # Python FastAPI server
│   └── server.py          # API endpoints, web search, settings
├── scripts/
│   ├── watch-daemon.py    # 24/7 background daemon
│   ├── daily-summary.py   # Midnight observation compression
│   └── manage-daemon.sh   # launchd management CLI
├── .sompter/              # Runtime data
│   ├── memory.db          # SQLite observations + summaries
│   ├── settings.json      # Config (provider, teams, interests)
│   └── daemon-status.json # Live daemon status
├── tests/
│   └── test_watch_daemon.py  # 24 pytest tests
├── release/               # DMG builds and release docs
└── dist/                  # electron-builder output
```

## Known Issues

- DMG is unsigned — right-click → Open to bypass Gatekeeper
- gemma3:12b capped at 512 context to fit Mac GPU memory
- Moondream is fast but less accurate than gemma3 for complex analysis
- See `release/v0.3.0-dev/KNOWN_ISSUES_v0.3.0-dev.md`
