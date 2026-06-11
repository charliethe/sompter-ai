# Sompter AI — Alpha Tester Guide

## Which DMG to Use

| Mac | Download |
|-----|----------|
| Apple Silicon (M1/M2/M3/M4) | `Sompter AI-0.1.0-alpha-arm64.dmg` |
| Intel | `Sompter AI-0.1.0-alpha.dmg` |

## How to Install

1. Open the `.dmg` file
2. Drag **Sompter AI** into your `Applications` folder
3. First time opening: **right-click** the app → **Open** (to bypass the "unverified developer" warning)
4. If Gatekeeper blocks it: go to **System Settings → Privacy & Security → scroll down → click "Open Anyway"**

## How to Verify Checksum

```sh
cd /path/to/downloaded/folder
shasum -a 256 -c SHA256SUMS.txt
# Output should say: Sompter AI-...dmg: OK
```

## Permissions Needed

| Permission | Why | How to Grant |
|------------|-----|-------------|
| **Screen Recording** | Needed for AI to see your screen | System Settings → Privacy & Security → Screen Recording → enable Sompter AI |
| **Accessibility** | Needed for AI to click/type on your Mac | System Settings → Privacy & Security → Accessibility → enable Sompter AI |

Both can be tested from the **⚙ Setup** panel after launching.

## First Launch

1. The **Onboarding** guide walks through permissions, services, and project setup
2. Select a project folder so Smart Fix knows where to work
3. Choose your AI provider (Ollama is the default free option)

## How to Use

- **Ask anything** in the chat bar — AI sees your screen
- **Smart Fix** (🔧 button) — AI reads your screen, builds a task, and runs it via OpenCode
- **Mac Control** — type "click the X button" and the AI will do it
- **Browser Control** — click the footer mode to cycle OS → Headless Browser → Visible Browser

## If Something Goes Wrong

**Export logs** (before reporting a bug):
⚙ Setup → **📤 Export Logs** — saves `sompter-logs.tar.gz` to your Desktop

**Reset everything**:
⚙ Setup → **🗑 Reset App Data** — clears all settings and data

**Safe Mode** (starts without tray icon or bundled services):
```sh
/Applications/Sompter\ AI.app/Contents/MacOS/Sompter\ AI --safe-mode
```

## How to Report Bugs

Include:
1. Which DMG you used (ARM64 or Intel)
2. macOS version
3. What you were doing when it broke
4. The exported logs file
5. Screenshot if possible

## Known Issues

- **Not notarized** — macOS will show a warning on first launch. Use right-click → Open to bypass
- **Ollama must be running** for the default AI provider. Install from [ollama.ai](https://ollama.ai) and run `ollama serve`
- **OpenCode must be running** for Smart Fix. Start it from the 🛠 Services panel
- **Playwright browsers download (~190MB)** on first use of Browser Control mode
- If the sidebar won't open, quit and relaunch from Applications

## Quick Reference

```sh
# Launch
open /Applications/Sompter\ AI.app

# Safe mode (no tray, no auto-services)
/Applications/Sompter\ AI.app/Contents/MacOS/Sompter\ AI --safe-mode

# Verify download
shasum -a 256 -c SHA256SUMS.txt
```
