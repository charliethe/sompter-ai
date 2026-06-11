# Sompter v0.1.0-alpha

**First working alpha release.**

## Includes
- Electron Mac sidebar
- Screen-aware AI chat (Ollama/Gemini/OpenAI)
- Mac control mode (pyautogui)
- Browser control mode (Playwright)
- OpenCode Smart Fix integration
- Project profiles / quick switch
- Diagnostics export
- Reset App Data
- Safe Mode (--safe-mode)
- Known Issues panel
- Release DMG builds for Apple Silicon and Intel Macs

## Checksums
Verify with:
```sh
shasum -a 256 -c SHA256SUMS.txt
```

```
b8cb9bad7ff0efa8e83f0eea8b279c8451eb4fef318b9b63421dc297c6a33ff0  Sompter AI-0.1.0-alpha-arm64.dmg
47d8b40473d8b1f0ed4835da240fd5aadd27f623f12064a4f85cfcd3fd69d1ae  Sompter AI-0.1.0-alpha.dmg
```

## Known Limitations
- macOS may warn because app is not notarized yet
- Requires permissions for Screen Recording and Accessibility
- Ollama/OpenCode must be installed/configured for local workflows
