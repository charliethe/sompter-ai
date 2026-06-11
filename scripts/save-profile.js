const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', () => {
  const wins = BrowserWindow.getAllWindows();
  if (wins.length === 0) {
    console.error('No window found');
    app.quit();
    return;
  }
  const w = wins[0];
  const projectPath = '/Users/charliekrason/Documents/desk/untitled folder/sompter-ai';
  const js = `
    (function() {
      const profiles = JSON.parse(localStorage.getItem('sompter_profiles') || '[]');
      const existing = profiles.find(p => p.path === ${JSON.stringify(projectPath)});
      if (existing) {
        existing.lastUsed = new Date().toISOString();
        existing.active = true;
        localStorage.setItem('sompter_profiles', JSON.stringify(profiles));
        return 'Profile already exists: ' + existing.name;
      }
      const profile = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: 'sompter-ai',
        path: ${JSON.stringify(projectPath)},
        isDefault: profiles.length === 0,
        lastUsed: new Date().toISOString(),
        active: true
      };
      profiles.push(profile);
      localStorage.setItem('sompter_profiles', JSON.stringify(profiles));
      localStorage.setItem('sompter_opencode_path', ${JSON.stringify(projectPath)});
      return 'Saved profile: ' + profile.name;
    })()
  `;
  w.webContents.executeJavaScript(js).then(result => {
    console.log(result);
    app.quit();
  }).catch(err => {
    console.error('Error:', err.message);
    app.quit();
  });
});
