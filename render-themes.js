// ============================================
// RENDER THEME GALLERY DYNAMICALLY
// ============================================

function renderThemeGallery() {
  const themeGallery = document.getElementById('themeGallery');
  if (!themeGallery || !window.THEMES_DATA) return;

  themeGallery.innerHTML = '';

  Object.entries(window.THEMES_DATA).forEach(([themeId, theme]) => {
    const themeCard = document.createElement('button');
    themeCard.className = `theme-card ${themeId === (window.themeSystem?.currentTheme || 'princess') ? 'active' : ''}`;
    themeCard.type = 'button';
    themeCard.dataset.themeChoice = themeId;
    themeCard.style.setProperty('--card-main', theme.main);
    themeCard.style.setProperty('--card-accent', theme.accent);
    themeCard.style.backgroundImage = `linear-gradient(180deg, ${theme.gradient})`;

    themeCard.innerHTML = `
      <strong style="color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${theme.name}</strong>
      <small style="color: rgba(255,255,255,0.9);">${themeId === (window.themeSystem?.currentTheme || 'princess') ? 'Selected' : 'Preview'}</small>
      ${themeId === (window.themeSystem?.currentTheme || 'princess') ? `<span class="selected-theme-sign" style="position: absolute; top: 10px; right: 10px; background: ${theme.accent}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">Selected</span>` : ''}
      <span class="theme-level" style="color: ${theme.accent}; font-weight: 700; margin-top: 8px; display: block;">Level ${theme.level}/5</span>
    `;

    themeCard.addEventListener('click', () => {
      if (window.themeSystem) {
        window.themeSystem.applyTheme(themeId);
        renderThemeGallery();
      }
    });

    themeGallery.appendChild(themeCard);
  });
}

// Render on load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(renderThemeGallery, 500);
});

// Update on theme change
window.addEventListener('themeChanged', renderThemeGallery);
