# Notarization Guide

Sompter AI is **unsigned** — macOS shows a Gatekeeper warning on first launch because there's no Apple Developer ID certificate.

## Prerequisites

1. **Apple Developer Program** ($99/year) — https://developer.apple.com/program
2. **Developer ID Application certificate** issued from the Apple Developer portal
3. **App-specific password** from https://appleid.apple.com (for notarytool)

## Steps

### 1. Export Certificate

After downloading your Developer ID cert, export it:

```bash
security find-identity -v -p basic
# Look for "Developer ID Application: Your Name (TEAMID)"
```

### 2. Build Signed

```bash
# electron-builder will automatically find the cert and sign
npm run build:dmg

# Verify signature
codesign -dv "dist/Sompter AI-0.3.0-dev-arm64.dmg"
spctl -a -t open --context context:primary-signature -v "dist/Sompter AI-0.3.0-dev-arm64.dmg"
```

### 3. Notarize

```bash
# ZIP the app (notarization requires a flat file)
ditto -c -k --keepParent "dist/mac-arm64/Sompter AI.app" /tmp/Sompter-AI.zip

# Submit for notarization
xcrun notarytool submit /tmp/Sompter-AI.zip \
  --apple-id "your@apple.com" \
  --team-id "YOUR_TEAM_ID" \
  --password "app-specific-password" \
  --wait

# Staple the ticket
xcrun stapler staple "dist/mac-arm64/Sompter AI.app"
```

### 4. Rebuild DMG

Rebuild the DMG from the stapled app, or just distribute the .app directly.

## Hardened Runtime

The project already includes `app/entitlements.mac.plist` with needed permissions:
- Camera, microphone, USB access
- Network client/server
- Library validation disabled (for Python/Node native modules)
- Unsigned executable memory (for Python interpreter)
- DYLD environment variables (for venv)
- Apple Events (for AppleScript automation)
- File access
