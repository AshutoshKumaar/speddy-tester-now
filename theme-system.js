// ============================================
// PROFESSIONAL PIXAR-STYLE THEME SYSTEM
// ============================================

const THEMES_DATA = {
  ocean: {
    id: 'ocean',
    name: 'Ocean Bubbles',
    subtitle: 'Neon Grotto - Underwater Magic',
    main: '#2fa9c9',
    dark: '#146987',
    soft: '#e9fbff',
    accent: '#77e1ff',
    gradient: 'linear-gradient(135deg, #2fa9c9, #146987)',
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1400&h=360&fit=crop',
    level: 2,
    mood: 'Calm & Peaceful',
    pace: 'Gentle',
    avatars: ['Splash Swimmer', 'Pearl Finder', 'Coral Guardian', 'Wave Rider', 'Bubble Buddy'],
    demo: ['Bubble key warmup', 'Coral sentence swim', 'Pearl streak badge']
  },
  adventure: {
    id: 'adventure',
    name: 'Fantasy Quest',
    subtitle: 'Epic Castle Adventure - Magic & Crystals',
    main: '#7c3aed',
    dark: '#5b21b6',
    soft: '#ede9fe',
    accent: '#a78bfa',
    gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
    heroImage: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1400&h=360&fit=crop',
    level: 4,
    mood: 'Epic Adventure',
    pace: 'Steady',
    avatars: ['Quest Master', 'Magic Keeper', 'Spell Caster', 'Rune Reader', 'Crystal Knight'],
    demo: ['Spell word quest', 'Magic sentence challenge', 'Crystal achievement badge']
  },
  cosmic: {
    id: 'cosmic',
    name: 'Cosmic Spark',
    subtitle: 'Starburst Run - Space & Neon',
    main: '#ec4899',
    dark: '#be185d',
    soft: '#fce7f3',
    accent: '#f472b6',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    heroImage: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&h=360&fit=crop',
    level: 4,
    mood: 'High-Energy',
    pace: 'Boost',
    avatars: ['Rocket Rider', 'Star Navigator', 'Planet Explorer', 'Comet Chaser', 'Nova Pilot'],
    demo: ['Rocket launch words', 'Orbit paragraph run', 'Star accuracy badge']
  },
  candy: {
    id: 'candy',
    name: 'Candy Pop Land',
    subtitle: 'Gummy Glen - Sweet & Colorful',
    main: '#f97316',
    dark: '#c2410c',
    soft: '#ffedd5',
    accent: '#fed7aa',
    gradient: 'linear-gradient(135deg, #f97316, #c2410c)',
    heroImage: 'https://images.unsplash.com/photo-1545546519-51a12b6f3833?w=1400&h=360&fit=crop',
    level: 2,
    mood: 'Playful & Sweet',
    pace: 'Gentle',
    avatars: ['Sweet Candy', 'Sugar Rush', 'Lolly Pop', 'Gummy Gal', 'Frosting Friend'],
    demo: ['Sweet short words', 'Lolly rhythm lesson', 'Candy combo badge']
  },
  princess: {
    id: 'princess',
    name: 'Princess Castle',
    subtitle: 'Royal Adventure - Magic & Sparkles',
    main: '#e66cb1',
    dark: '#8d3c78',
    soft: '#fff0f8',
    accent: '#ffd166',
    gradient: 'linear-gradient(135deg, #e66cb1, #8d3c78)',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=360&fit=crop',
    level: 5,
    mood: 'Royal & Magical',
    pace: 'Gentle',
    avatars: ['Princess Penny', 'Royal Ruby', 'Queen Crystal', 'Duchess Diana', 'Baroness Belle'],
    demo: ['Castle home-row warmup', 'Royal sentence sprint', 'Crown achievement badge']
  },
  dino: {
    id: 'dino',
    name: 'Dinosaur Valley',
    subtitle: 'Fossil Hunt - Adventure & Exploration',
    main: '#55aa55',
    dark: '#23633d',
    soft: '#effbed',
    accent: '#ffb347',
    gradient: 'linear-gradient(135deg, #55aa55, #23633d)',
    heroImage: 'https://images.unsplash.com/photo-1578695013519-904ed55bfd90?w=1400&h=360&fit=crop',
    level: 3,
    mood: 'Explorer Energy',
    pace: 'Steady',
    avatars: ['Rex Runner', 'Dino Dash', 'Steggy Sprint', 'Rapt Rider', 'Fossil Finder'],
    demo: ['Fossil word hunt', 'Valley punctuation trail', 'Explorer speed badge']
  },
  space: {
    id: 'space',
    name: 'Space Quest',
    subtitle: 'Rocket Galaxy - Stars & Planets',
    main: '#5657d9',
    dark: '#252664',
    soft: '#eeeeff',
    accent: '#58d6ff',
    gradient: 'linear-gradient(135deg, #5657d9, #252664)',
    heroImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1400&h=360&fit=crop',
    level: 4,
    mood: 'Fast Missions',
    pace: 'Boost',
    avatars: ['Astro Ace', 'Galaxy Gal', 'Nebula Navigator', 'Solar Sailor', 'Comet Rider'],
    demo: ['Rocket launch words', 'Orbit paragraph run', 'Star accuracy badge']
  },
  jungle: {
    id: 'jungle',
    name: 'Jungle Quest',
    subtitle: 'Hidden Ruins - Adventure Trail',
    main: '#3fa66b',
    dark: '#1c5c3c',
    soft: '#effaf2',
    accent: '#f5c542',
    gradient: 'linear-gradient(135deg, #3fa66b, #1c5c3c)',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=360&fit=crop',
    level: 3,
    mood: 'Adventure Lessons',
    pace: 'Steady',
    avatars: ['Jungle Jim', 'Explorer Eva', 'Safari Scout', 'Trail Tracker', 'Adventure Andy'],
    demo: ['Leaf word route', 'River sentence crossing', 'Map progress badge']
  },
  robot: {
    id: 'robot',
    name: 'Robot Lab',
    subtitle: 'Tech Lab - Circuits & Neon',
    main: '#5f7ee8',
    dark: '#283b7a',
    soft: '#eef2ff',
    accent: '#7ee0cf',
    gradient: 'linear-gradient(135deg, #5f7ee8, #283b7a)',
    heroImage: 'https://images.unsplash.com/photo-1677442d019cecf8d5cfc36deb91fa8da2e4901cc?w=1400&h=360&fit=crop',
    level: 4,
    mood: 'Crisp Focus',
    pace: 'Steady',
    avatars: ['Bot Beta', 'Cyber Chip', 'Tech Titan', 'Code Commander', 'Data Droid'],
    demo: ['Circuit key scan', 'Code phrase sprint', 'Lab accuracy badge']
  },
  superhero: {
    id: 'superhero',
    name: 'Superhero City',
    subtitle: 'Cityscape - Capes & Speed',
    main: '#f05a5a',
    dark: '#802d55',
    soft: '#fff1f1',
    accent: '#ffd84d',
    gradient: 'linear-gradient(135deg, #f05a5a, #802d55)',
    heroImage: 'https://images.unsplash.com/photo-1518611505868-48510c2e022b?w=1400&h=360&fit=crop',
    level: 5,
    mood: 'High-Energy Action',
    pace: 'Boost',
    avatars: ['Super Sam', 'Wonder Woman', 'Power Pete', 'Captain Cool', 'Mighty Mouse'],
    demo: ['Skyline key rescue', 'Hero paragraph dash', 'Power score badge']
  },
  sports: {
    id: 'sports',
    name: 'Sports Arena',
    subtitle: 'Field & Goals - Quick Drills',
    main: '#30a871',
    dark: '#195f48',
    soft: '#edfff6',
    accent: '#ffc83d',
    gradient: 'linear-gradient(135deg, #30a871, #195f48)',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&h=360&fit=crop',
    level: 3,
    mood: 'Drill Practice',
    pace: 'Steady',
    avatars: ['Athlete Alex', 'Champion Chris', 'Victory Vic', 'Goal Gary', 'Score Sally'],
    demo: ['Warmup word reps', 'Goal sentence challenge', 'Arena streak badge']
  },
  music: {
    id: 'music',
    name: 'Music Stage',
    subtitle: 'Concert Lights - Rhythm & Sound',
    main: '#9b5de5',
    dark: '#4b287a',
    soft: '#f6efff',
    accent: '#00d4ff',
    gradient: 'linear-gradient(135deg, #9b5de5, #4b287a)',
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&h=360&fit=crop',
    level: 4,
    mood: 'Rhythm Typing',
    pace: 'Boost',
    avatars: ['Melody Mike', 'Rhythm Rita', 'Beat Bobby', 'Sound Stella', 'Tempo Tony'],
    demo: ['Beat key pattern', 'Lyric line sprint', 'Tempo score badge']
  }
};

// ============================================
// THEME APPLICATION SYSTEM
// ============================================

class ThemeSystem {
  constructor() {
    this.currentTheme = localStorage.getItem('selectedTheme') || 'princess';
    this.themes = THEMES_DATA;
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupEventListeners();
  }

  applyTheme(themeId) {
    if (!this.themes[themeId]) return;
    
    const theme = this.themes[themeId];
    this.currentTheme = themeId;
    
    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty('--theme-main', theme.main);
    root.style.setProperty('--theme-dark', theme.dark);
    root.style.setProperty('--theme-soft', theme.soft);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-gradient', theme.gradient);
    root.style.setProperty('--theme-image', `url('${theme.heroImage}')`);
    
    // Update body
    document.body.dataset.theme = themeId;
    document.body.style.backgroundImage = `
      linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.88)),
      url('${theme.heroImage}')
    `;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    
    // Update header
    const header = document.querySelector('.app-header');
    if (header) {
      header.style.background = theme.gradient;
      header.style.boxShadow = `0 10px 28px ${theme.main}40`;
    }
    
    // Update all cards
    this.updateCardColors(theme);
    
    // Save preference
    localStorage.setItem('selectedTheme', themeId);
  }

  updateCardColors(theme) {
    // Hero panel
    const heroPanel = document.querySelector('.hero-panel');
    if (heroPanel) {
      heroPanel.style.background = `
        linear-gradient(90deg, rgba(255,255,255,0.92), rgba(255,255,255,0.12) 42%, rgba(255,255,255,0.88)),
        linear-gradient(135deg, ${theme.main}, ${theme.dark})
      `;
      heroPanel.style.borderColor = `${theme.main}80`;
      heroPanel.style.boxShadow = `0 20px 50px ${theme.main}40`;
    }
    
    // Test cards
    document.querySelectorAll('.test-card').forEach(card => {
      card.style.borderColor = `${theme.accent}`;
      card.style.background = `${theme.soft}cc`;
    });
    
    // Progress bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
      progressBar.style.background = theme.accent;
      progressBar.style.boxShadow = `0 0 20px ${theme.accent}`;
    }
    
    // Buttons
    document.querySelectorAll('.gold-button').forEach(btn => {
      btn.style.background = theme.accent;
      btn.style.boxShadow = `0 8px 20px ${theme.accent}80`;
    });
  }

  setupEventListeners() {
    // Theme gallery click handlers
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-theme-choice]')) {
        const themeId = e.target.closest('[data-theme-choice]').dataset.themeChoice;
        this.applyTheme(themeId);
      }
    });
  }

  getTheme(themeId) {
    return this.themes[themeId];
  }

  getAllThemes() {
    return Object.values(this.themes);
  }
}

// Initialize on load
window.themeSystem = null;
document.addEventListener('DOMContentLoaded', () => {
  window.themeSystem = new ThemeSystem();
  console.log('✅ Professional Theme System Loaded');
});

// Export for other scripts
window.THEMES_DATA = THEMES_DATA;
window.ThemeSystem = ThemeSystem;
