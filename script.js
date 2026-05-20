const sentences = {
  easy: [
    "You could be one of those people who learn faster when practice feels fun.",
    "Keep your eyes on the words and let your fingers move with calm focus.",
    "Every finished line adds a new sentence, so the test keeps moving.",
    "Accuracy first, speed second, and your score will grow with each round.",
    "Small daily typing games can make a big difference over time."
  ],
  medium: [
    "Fast typing is not only about rushing; it is about reading ahead and making fewer mistakes.",
    "A steady rhythm helps your hands stay relaxed while the timer keeps counting down.",
    "When the next sentence joins the board, keep typing without losing your place.",
    "Clean keystrokes build confidence, and confidence makes the whole test feel easier.",
    "The best typing score comes from speed, accuracy, and a calm mind working together."
  ],
  hard: [
    "Precision under pressure separates quick typists from careful ones, especially when punctuation appears.",
    "A polished typing test should feel responsive, colorful, focused, and easy for kids to understand.",
    "If you press the wrong key, the sound changes so you can notice the mistake immediately.",
    "Strong practice habits come from short challenges that feel clear, rewarding, and repeatable.",
    "The sentence stream keeps growing as long as you finish each line before the timer ends."
  ]
};

const pages = {
  tests: document.getElementById("testsPage"),
  lessons: document.getElementById("lessonsPage"),
  games: document.getElementById("gamesPage"),
  typing: document.getElementById("typingPage"),
  themes: document.getElementById("themesPage"),
  scores: document.getElementById("scoresPage"),
  settings: document.getElementById("settingsPage"),
  results: document.getElementById("resultsPage")
};

const themeData = {
  princess: { name: "Princess Castle", subtitle: "Royal castles, sparkle paths, and story magic", main: "#e66cb1", dark: "#8d3c78", soft: "#fff0f8", accent: "#ffd166", gradient: "linear-gradient(135deg, #ff9bd0, #8d66df)", avatars: ["Princess Penny", "Princess Mia", "Princess Olivia", "Princess Soni", "Princess Rose"] },
  dino: { name: "Dinosaur Adventure", subtitle: "Green valleys, ancient stones, and bold explorers", main: "#55aa55", dark: "#23633d", soft: "#effbed", accent: "#ffb347", gradient: "linear-gradient(135deg, #83d475, #2a8e5a)", avatars: ["Dino Max", "Dino Tara", "Explorer Kai", "Ranger Lila", "Fossil Finn"] },
  space: { name: "Space Quest", subtitle: "Stars, rockets, planets, and neon missions", main: "#5657d9", dark: "#252664", soft: "#eeeeff", accent: "#58d6ff", gradient: "linear-gradient(135deg, #20225b, #5c58f0)", avatars: ["Captain Nova", "Luna Ray", "Cosmo Kid", "Star Sia", "Orbit Omar"] },
  ocean: { name: "Ocean Bubbles", subtitle: "Blue waves, treasure maps, and bubble typing", main: "#2fa9c9", dark: "#146987", soft: "#e9fbff", accent: "#77e1ff", gradient: "linear-gradient(135deg, #55d6f2, #1f76b8)", avatars: ["Aqua Ami", "Coral Kai", "Pearl Pia", "Wave Wren", "Marina Mo"] },
  candy: { name: "Candy Pop", subtitle: "Sweet hills, bright paths, and cheerful practice", main: "#ef6a9d", dark: "#8b3157", soft: "#fff0f6", accent: "#ffd166", gradient: "linear-gradient(135deg, #ff73a8, #ffd166)", avatars: ["Candy Coco", "Lolly Leo", "Sugar Sam", "Mint Mina", "Berry Bea"] },
  robot: { name: "Robot Lab", subtitle: "Circuits, glowing panels, and tech missions", main: "#5f7ee8", dark: "#283b7a", soft: "#eef2ff", accent: "#7ee0cf", gradient: "linear-gradient(135deg, #7ee0cf, #5f7ee8)", avatars: ["Bolt Ben", "Circuit Cia", "Pixel Pax", "Gear Gia", "Nano Nia"] },
  jungle: { name: "Jungle Quest", subtitle: "Leafy paths, hidden ruins, and discovery trails", main: "#3fa66b", dark: "#1c5c3c", soft: "#effaf2", accent: "#f5c542", gradient: "linear-gradient(135deg, #9be273, #247a4b)", avatars: ["Scout Sami", "Trail Tia", "Leaf Leo", "River Rio", "Map Maya"] },
  superhero: { name: "Superhero City", subtitle: "Skyline missions, capes, and speed typing", main: "#f05a5a", dark: "#802d55", soft: "#fff1f1", accent: "#ffd84d", gradient: "linear-gradient(135deg, #f05a5a, #5657d9)", avatars: ["Power Priya", "Flash Finn", "Nova Noor", "Captain Cruz", "Spark Sol"] },
  sports: { name: "Sports Arena", subtitle: "Bright fields, goal lights, and quick drills", main: "#30a871", dark: "#195f48", soft: "#edfff6", accent: "#ffc83d", gradient: "linear-gradient(135deg, #30a871, #ffc83d)", avatars: ["Goal Gia", "Runner Ray", "Coach Cam", "Skater Sky", "Ace Ari"] },
  music: { name: "Music Stage", subtitle: "Concert lights, rhythm games, and sound waves", main: "#9b5de5", dark: "#4b287a", soft: "#f6efff", accent: "#00d4ff", gradient: "linear-gradient(135deg, #9b5de5, #00d4ff)", avatars: ["Melody Mei", "Rhythm Ravi", "Bass Bea", "Tempo Theo", "Lyric Luna"] }
};

const themeNames = Object.fromEntries(Object.entries(themeData).map(([key, value]) => [key, value.name]));

function svgUri(svg) {
  return `url('data:image/svg+xml,${encodeURIComponent(svg)}')`;
}

function avatarSvg(theme, avatarIndex, name) {
  const data = themeData[theme];
  const skin = ["#ffd1a8", "#9c6848", "#f3d7c1", "#b77b56", "#f7bf8f"][avatarIndex % 5];
  const hair = ["#b64d69", "#2d201d", "#f2f2f2", "#24283b", "#6b3e26"][avatarIndex % 5];
  const accessory = data.accent;
  const outfit = data.main;
  const title = name.replace(/&/g, "and");
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 320">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${data.soft}"/>
        <stop offset="1" stop-color="${data.main}"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000" flood-opacity=".22"/>
      </filter>
    </defs>
    <rect width="260" height="320" rx="34" fill="url(#bg)"/>
    <circle cx="130" cy="100" r="66" fill="${hair}" filter="url(#shadow)"/>
    <circle cx="130" cy="118" r="54" fill="${skin}"/>
    <circle cx="108" cy="116" r="7" fill="#2c2f38"/>
    <circle cx="152" cy="116" r="7" fill="#2c2f38"/>
    <path d="M110 144 Q130 160 153 144" fill="none" stroke="#9b4b61" stroke-width="6" stroke-linecap="round"/>
    <path d="M70 108 Q95 42 153 55 Q198 70 188 139 Q174 86 128 83 Q95 83 70 108Z" fill="${hair}"/>
    <path d="M73 270 Q83 196 130 190 Q177 196 187 270Z" fill="${outfit}" filter="url(#shadow)"/>
    <path d="M92 205 Q130 242 168 205" fill="none" stroke="${accessory}" stroke-width="12" stroke-linecap="round"/>
    <circle cx="92" cy="128" r="8" fill="${accessory}"/>
    <circle cx="168" cy="128" r="8" fill="${accessory}"/>
    <path d="M92 58 L110 24 L130 56 L153 24 L169 58" fill="${accessory}" opacity=".95"/>
    <text x="130" y="304" text-anchor="middle" font-family="Verdana" font-size="18" font-weight="700" fill="#fff">${title}</text>
  </svg>`;
}

function mascotSvg(theme) {
  const data = themeData[theme];
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 240">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#000" flood-opacity=".24"/>
      </filter>
    </defs>
    <ellipse cx="110" cy="204" rx="68" ry="18" fill="#000" opacity=".12"/>
    <path d="M54 106 Q68 32 132 48 Q192 64 176 135 Q164 204 94 195 Q42 188 54 106Z" fill="${data.main}" filter="url(#shadow)"/>
    <circle cx="90" cy="108" r="10" fill="#fff"/>
    <circle cx="134" cy="108" r="10" fill="#fff"/>
    <circle cx="92" cy="110" r="5" fill="#26313a"/>
    <circle cx="136" cy="110" r="5" fill="#26313a"/>
    <path d="M92 148 Q113 166 139 148" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
    <path d="M56 92 L28 44 L84 68Z" fill="${data.dark}"/>
    <path d="M156 72 L198 35 L180 98Z" fill="${data.dark}"/>
    <path d="M70 54 Q111 18 158 54" fill="none" stroke="${data.accent}" stroke-width="14" stroke-linecap="round"/>
  </svg>`;
}

function sceneSvg(theme) {
  const data = themeData[theme];
  const isPrincess = theme === "princess";
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 360">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${data.soft}"/>
        <stop offset="1" stop-color="${data.main}"/>
      </linearGradient>
    </defs>
    <rect width="1400" height="360" fill="url(#sky)"/>
    <circle cx="1180" cy="72" r="40" fill="${data.accent}" opacity=".65"/>
    <path d="M0 258 C190 210 260 250 390 218 C520 184 650 222 780 190 C980 142 1120 222 1400 166 L1400 360 L0 360Z" fill="${data.dark}" opacity=".24"/>
    <path d="M0 300 C210 252 330 312 520 266 C760 208 900 292 1120 240 C1240 214 1320 232 1400 210 L1400 360 L0 360Z" fill="${data.dark}" opacity=".32"/>
    <g opacity=".9">
      <rect x="610" y="146" width="190" height="150" rx="12" fill="#f7e6d5"/>
      <rect x="655" y="196" width="48" height="100" rx="24" fill="${data.dark}"/>
      <rect x="730" y="196" width="34" height="56" rx="17" fill="${data.main}" opacity=".75"/>
      <path d="M590 146 L705 58 L820 146Z" fill="${data.accent}"/>
      <rect x="560" y="118" width="54" height="178" fill="#f4d7c7"/>
      <rect x="806" y="118" width="54" height="178" fill="#f4d7c7"/>
      <path d="M552 118 L587 58 L622 118Z" fill="${isPrincess ? "#e8a0c5" : data.accent}"/>
      <path d="M798 118 L833 58 L868 118Z" fill="${isPrincess ? "#e8a0c5" : data.accent}"/>
    </g>
    <circle cx="170" cy="252" r="72" fill="${data.dark}" opacity=".34"/>
    <circle cx="1230" cy="244" r="88" fill="${data.dark}" opacity=".28"/>
    <path d="M0 318 L1400 318 L1400 360 L0 360Z" fill="#fff" opacity=".22"/>
  </svg>`;
}

const navLinks = document.querySelectorAll("[data-page-link]");
const testCards = document.querySelectorAll(".test-card");
const lessonTabs = document.querySelectorAll(".lesson-tab");
const gameCards = document.querySelectorAll(".game-card");
const themeGallery = document.getElementById("themeGallery");
const avatarGallery = document.getElementById("avatarGallery");
const avatarPanelTitle = document.getElementById("avatarPanelTitle");
const selectedThemeName = document.getElementById("selectedThemeName");
const selectedAvatarName = document.getElementById("selectedAvatarName");
const theme3dCanvas = document.getElementById("theme3dCanvas");
const themeGalleryView = document.getElementById("themeGalleryView");
const themeDetailView = document.getElementById("themeDetailView");
const themeDetailStage = document.getElementById("themeDetailStage");
const themeDetailTitle = document.getElementById("themeDetailTitle");
const themeDetailName = document.getElementById("themeDetailName");
const themeDetailDescription = document.getElementById("themeDetailDescription");
const themeApplyState = document.getElementById("themeApplyState");
const themeDetailsTitle = document.getElementById("themeDetailsTitle");
const themeDetailsCopy = document.getElementById("themeDetailsCopy");
const themeDetailChips = document.getElementById("themeDetailChips");
const themeDemoPreview = document.getElementById("themeDemoPreview");
const themeDemoList = document.getElementById("themeDemoList");
const backToThemesBtn = document.getElementById("backToThemesBtn");
const selectThemeBtn = document.getElementById("selectThemeBtn");
const unselectThemeBtn = document.getElementById("unselectThemeBtn");
const soundOptions = document.getElementById("soundOptions");
const speedOptions = document.querySelectorAll(".speed-option");
const quoteDisplay = document.getElementById("quoteDisplay");
const typingInput = document.getElementById("typingInput");
const timerEl = document.getElementById("timer");
const testMinutes = document.getElementById("testMinutes");
const testTitle = document.getElementById("testTitle");
const videoTitle = document.getElementById("videoTitle");
const videoCaption = document.getElementById("videoCaption");
const videoScreen = document.getElementById("videoScreen");
const videoList = document.getElementById("videoList");
const lessonVideoArt = document.getElementById("lessonVideoArt");
const playLessonBtn = document.getElementById("playLessonBtn");
const missionTitle = document.getElementById("missionTitle");
const lessonMissionList = document.getElementById("lessonMissionList");
const themeWorldName = document.getElementById("themeWorldName");
const progressBar = document.getElementById("progressBar");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const scoreEl = document.getElementById("score");
const linesDoneEl = document.getElementById("linesDone");
const scoreList = document.getElementById("scoreList");
const allScoresList = document.getElementById("allScoresList");
const bestSpeed = document.getElementById("bestSpeed");
const bestAccuracy = document.getElementById("bestAccuracy");
const totalTests = document.getElementById("totalTests");
const dailyGoal = document.getElementById("dailyGoal");
const redoBtn = document.getElementById("redoBtn");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const pauseToast = document.getElementById("pauseToast");
const soundPreviewBtn = document.getElementById("soundPreviewBtn");
const takeAgainBtn = document.getElementById("takeAgainBtn");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const resultWpm = document.getElementById("resultWpm");
const resultAccuracy = document.getElementById("resultAccuracy");
const resultScore = document.getElementById("resultScore");

let currentMode = "easy";
let selectedDuration = 60;
let selectedTheme = localStorage.getItem("speedyTypeTheme") || "princess";
if (!themeNames[selectedTheme]) selectedTheme = "princess";
let selectedAvatar = localStorage.getItem("speedyTypeAvatar") || themeData[selectedTheme].avatars[0];
let previewTheme = selectedTheme;
let isThemeApplied = localStorage.getItem("speedyTypeThemeApplied") !== "false";
let selectedSound = localStorage.getItem("speedyTypeSound") || "soft";
let selectedSpeedFeel = localStorage.getItem("speedyTypeSpeedFeel") || "calm";
let currentSentence = "";
let sentenceIndex = -1;
let completedLines = [];
let currentIndex = 0;
let hasCurrentError = false;
let totalTyped = 0;
let totalCorrect = 0;
let totalErrors = 0;
let timerId = null;
let startedAt = null;
let timeLeft = selectedDuration;
let hasStarted = false;
let roundFinished = false;
let scores = JSON.parse(localStorage.getItem("speedyTypeScores") || "[]");
let audioContext = null;
let theme3d = null;

const themePresentation = {
  princess: { cardTitle: "The Princess Adventures", logo: "Princess Adventures", level: 5, mood: "Storybook focus", pace: "Gentle", demo: ["Castle home-row warmup", "Royal sentence sprint", "Crown accuracy badge"] },
  dino: { cardTitle: "Dinosaur Valley", logo: "Dinosaur Valley", level: 3, mood: "Explorer energy", pace: "Steady", demo: ["Fossil word hunt", "Valley punctuation trail", "Explorer speed badge"] },
  space: { cardTitle: "Rocket Galaxy", logo: "Rocket Galaxy", level: 4, mood: "Fast missions", pace: "Boost", demo: ["Rocket launch words", "Orbit paragraph run", "Star accuracy badge"] },
  ocean: { cardTitle: "Under the Sea", logo: "Under the Sea", level: 2, mood: "Calm practice", pace: "Gentle", demo: ["Bubble key warmup", "Coral sentence swim", "Pearl streak badge"] },
  candy: { cardTitle: "Candy Pop Land", logo: "Candy Pop Land", level: 2, mood: "Playful drills", pace: "Gentle", demo: ["Sweet short words", "Lolly rhythm lesson", "Candy combo badge"] },
  robot: { cardTitle: "Robot Lab", logo: "Robot Lab", level: 4, mood: "Crisp focus", pace: "Steady", demo: ["Circuit key scan", "Code phrase sprint", "Lab accuracy badge"] },
  jungle: { cardTitle: "Jungle Quest", logo: "Jungle Quest", level: 3, mood: "Adventure lessons", pace: "Steady", demo: ["Leaf word route", "River sentence crossing", "Map progress badge"] },
  superhero: { cardTitle: "Superhero City", logo: "Superhero City", level: 5, mood: "High-energy tests", pace: "Boost", demo: ["Skyline key rescue", "Hero paragraph dash", "Power score badge"] },
  sports: { cardTitle: "Sports Arena", logo: "Sports Arena", level: 3, mood: "Drill practice", pace: "Steady", demo: ["Warmup word reps", "Goal sentence challenge", "Arena streak badge"] },
  music: { cardTitle: "Music Stage", logo: "Music Stage", level: 4, mood: "Rhythm typing", pace: "Boost", demo: ["Beat key pattern", "Lyric line sprint", "Tempo score badge"] }
};

const soundVoices = {
  soft: { name: "Soft Cloud Keys", desc: "Gentle taps for calm practice", right: 420, wrong: 120, wave: "triangle", volume: 0.035, length: 0.045 },
  arcade: { name: "Arcade Pop", desc: "Bright game taps for quick rounds", right: 660, wrong: 150, wave: "square", volume: 0.045, length: 0.05 },
  mechanical: { name: "Mechanical Click", desc: "Crisp keyboard clicks for speed typing", right: 520, wrong: 180, wave: "square", volume: 0.038, length: 0.035 },
  bubble: { name: "Bubble Blip", desc: "Soft bubbly sounds for younger kids", right: 760, wrong: 220, wave: "sine", volume: 0.04, length: 0.06 },
  laser: { name: "Laser Tap", desc: "Clean sci-fi sounds for fast focus", right: 900, wrong: 260, wave: "sawtooth", volume: 0.03, length: 0.04 },
  piano: { name: "Tiny Piano", desc: "Musical tones for rhythm practice", right: 523, wrong: 196, wave: "sine", volume: 0.045, length: 0.09 },
  wood: { name: "Wooden Tap", desc: "Warm sounds for steady typing", right: 330, wrong: 110, wave: "triangle", volume: 0.05, length: 0.07 },
  off: { name: "Silent Mode", desc: "No sound while typing", right: 0, wrong: 0, wave: "sine", volume: 0, length: 0 }
};

const speedFeels = {
  calm: 1.15,
  normal: 1,
  boost: 0.72
};

const lessonStages = {
  beginner: {
    title: "Beginner Missions",
    videos: [
      ["Home Row Finger Dance", "Meet the home row keys with a short animated finger dance.", "easy"],
      ["Tiny Word Builder", "Learn how small words become confident typing steps.", "easy"],
      ["Space Bar Bounce", "Practice spaces, rhythm, and relaxed hands.", "easy"]
    ],
    missions: [
      ["Home Row Warmup", "Start with easy words and smooth finger placement.", "easy"],
      ["Tiny Word Sprint", "Type short global words with friendly pacing.", "easy"],
      ["Happy Sentence Steps", "Build your first clean sentences.", "easy"]
    ]
  },
  intermediate: {
    title: "Intermediate Missions",
    videos: [
      ["Capital Letter Magic", "See how Shift helps names, places, and sentence starts.", "medium"],
      ["Punctuation Power", "Turn commas, periods, and question marks into easy moves.", "medium"],
      ["World Word Sprint", "Practice travel, food, school, and story words from everywhere.", "medium"]
    ],
    missions: [
      ["Castle Home Row", "Use both hands and keep the rhythm steady.", "medium"],
      ["Punctuation Parade", "Type sentences with commas, periods, and questions.", "medium"],
      ["Global Story Lines", "Practice friendly sentences for kids across the world.", "medium"]
    ]
  },
  advanced: {
    title: "Advanced Missions",
    videos: [
      ["Speed Without Panic", "Learn how fast typing still starts with calm accuracy.", "hard"],
      ["Paragraph Quest", "Watch how to scan ahead before long lines appear.", "hard"],
      ["Mistake Recovery", "Learn how to recover quickly after a wrong key.", "hard"]
    ],
    missions: [
      ["Dragon Speed Builder", "Longer lines, faster rhythm, and careful focus.", "hard"],
      ["Paragraph Quest", "Type longer kid-friendly story paragraphs.", "hard"],
      ["Accuracy Champion", "Win by making fewer mistakes under pressure.", "hard"]
    ]
  },
  library: {
    title: "Video Library Missions",
    videos: [
      ["Keyboard Explorer", "Tour the keyboard like a map full of hidden paths.", "easy"],
      ["Typing Around the World", "Learn words inspired by school, games, food, and travel.", "medium"],
      ["Focus Like a Pro", "A short video about posture, breathing, and attention.", "hard"]
    ],
    missions: [
      ["Keyboard Explorer", "Practice every corner of the keyboard.", "easy"],
      ["Around the World Sprint", "Type colorful words from global topics.", "medium"],
      ["Pro Focus Challenge", "A focused one-minute typing challenge.", "hard"]
    ]
  }
};

function showPage(pageName) {
  Object.entries(pages).forEach(([name, page]) => {
    page.classList.toggle("active-page", name === pageName);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === pageName);
  });

  if (pageName === "themes") {
    showThemeGallery();
    renderThemeGallery();
  }

  if (pageName === "typing") {
    setTimeout(() => typingInput.focus(), 60);
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remaining}`;
}

function testLabel(seconds) {
  return `${seconds / 60} Minute Typing Test`;
}

function minuteLabel(seconds) {
  return `${seconds / 60} min`;
}

function selectSentence() {
  const list = sentences[currentMode];
  sentenceIndex = (sentenceIndex + 1) % list.length;
  currentSentence = list[sentenceIndex];
}

function makeLine(text, active) {
  const line = document.createElement("div");
  line.className = "line";

  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    if (!active) span.classList.add("correct");
    if (active) {
      span.dataset.index = index;
      if (index === currentIndex) span.classList.add("current");
    }
    line.appendChild(span);
  });

  return line;
}

function renderText() {
  quoteDisplay.innerHTML = "";
  completedLines.forEach((line) => quoteDisplay.appendChild(makeLine(line, false)));
  quoteDisplay.appendChild(makeLine(currentSentence, true));
  quoteDisplay.scrollTop = quoteDisplay.scrollHeight;
}

function resetTest(newSentence = true) {
  clearInterval(timerId);
  timerId = null;
  startedAt = null;
  hasStarted = false;
  roundFinished = false;
  completedLines = [];
  currentIndex = 0;
  hasCurrentError = false;
  totalTyped = 0;
  totalCorrect = 0;
  totalErrors = 0;
  timeLeft = selectedDuration;

  if (newSentence || !currentSentence) selectSentence();
  renderText();
  typingInput.value = "";
  typingInput.disabled = false;
  timerEl.textContent = formatTime(timeLeft);
  testTitle.textContent = testLabel(selectedDuration);
  testMinutes.textContent = minuteLabel(selectedDuration);
  progressBar.style.width = "0%";
  updateStats();
  pauseToast.classList.remove("hidden");
}

function startTimer() {
  hasStarted = true;
  startedAt = Date.now();
  pauseToast.classList.add("hidden");
  timerId = setInterval(() => {
    timeLeft -= 1;
    timerEl.textContent = formatTime(timeLeft);
    updateStats();

    if (timeLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

function currentInputStats() {
  return { typedLength: currentIndex, correct: currentIndex };
}

function stats() {
  const current = currentInputStats();
  const typed = totalTyped + current.typedLength;
  const correct = totalCorrect + current.correct;
  const elapsed = startedAt ? (Date.now() - startedAt) / 1000 : 0;
  const minutes = Math.max(elapsed / 60, 1 / 60);
  const wpm = Math.round((correct / 5) / minutes);
  const attempted = typed + totalErrors;
  const accuracy = attempted === 0 ? 100 : Math.round((correct / attempted) * 100);
  const score = Math.max(0, Math.round(wpm * 12 + accuracy * 5 + completedLines.length * 95 + correct));
  const progress = hasStarted ? Math.min(((selectedDuration - timeLeft) / selectedDuration) * 100, 100) : 0;

  return { wpm, accuracy, score, progress, typed, correct };
}

function updateStats() {
  const data = stats();
  if (wpmEl) wpmEl.textContent = data.wpm;
  if (accuracyEl) accuracyEl.textContent = `${data.accuracy}%`;
  if (scoreEl) scoreEl.textContent = data.score;
  if (linesDoneEl) linesDoneEl.textContent = completedLines.length;
  progressBar.style.width = `${data.progress}%`;
}

function updateHighlights() {
  const activeLine = quoteDisplay.querySelector(".line:last-child");
  const letters = activeLine ? activeLine.querySelectorAll("span") : [];

  letters.forEach((span, index) => {
    span.classList.toggle("current", index === currentIndex);
  });
}

function audioEngine() {
  const Engine = window.AudioContext || window.webkitAudioContext;
  if (!Engine || selectedSound === "off") return null;
  audioContext = audioContext || new Engine();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(type) {
  const context = audioEngine();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;
  const voice = soundVoices[selectedSound] || soundVoices.soft;
  const wrong = type === "wrong";
  const feel = speedFeels[selectedSpeedFeel] || 1;

  oscillator.type = wrong ? "sawtooth" : voice.wave;
  oscillator.frequency.value = wrong ? voice.wrong : voice.right;
  gain.gain.setValueAtTime(wrong ? voice.volume * 1.6 : voice.volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + (wrong ? voice.length * 2.1 : voice.length) * feel);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + (wrong ? voice.length * 2.1 : voice.length) * feel);
}

function appendNextSentence() {
  totalTyped += currentSentence.length;
  totalCorrect += currentSentence.length;
  completedLines.push(currentSentence);
  currentIndex = 0;
  hasCurrentError = false;

  selectSentence();
  renderText();
  typingInput.value = "";
  updateStats();
  typingInput.focus();
}

function handleTypingKey(event) {
  if (roundFinished || pages.typing.classList.contains("active-page") === false) return;
  if (event.ctrlKey || event.metaKey || event.altKey) return;

  const activeLine = quoteDisplay.querySelector(".line:last-child");
  const letters = activeLine ? activeLine.querySelectorAll("span") : [];
  const currentLetter = letters[currentIndex];

  if (event.key === "Backspace") {
    event.preventDefault();
    if (hasCurrentError && currentLetter) {
      currentLetter.classList.remove("incorrect");
      currentLetter.classList.add("current");
      hasCurrentError = false;
    } else if (currentIndex > 0) {
      currentIndex -= 1;
      letters[currentIndex].classList.remove("correct");
      updateHighlights();
    }
    playTone("right");
    return;
  }

  if (event.key.length !== 1 || !currentLetter) {
    return;
  }

  event.preventDefault();
  if (!hasStarted) startTimer();

  const typedKey = event.key.toLowerCase();
  const expectedKey = currentSentence[currentIndex].toLowerCase();

  if (typedKey === expectedKey) {
    currentLetter.classList.remove("current", "incorrect");
    currentLetter.classList.add("correct");
    hasCurrentError = false;
    currentIndex += 1;
    playTone("right");
    updateStats();

    if (currentIndex >= currentSentence.length && timeLeft > 0) {
      appendNextSentence();
    } else {
      updateHighlights();
    }
  } else {
    currentLetter.classList.remove("current");
    currentLetter.classList.add("incorrect");
    hasCurrentError = true;
    totalTyped += 1;
    totalErrors += 1;
    playTone("wrong");
    updateStats();
  }
}

function finishTest() {
  if (roundFinished || !hasStarted) return;
  roundFinished = true;
  clearInterval(timerId);
  timerId = null;
  typingInput.disabled = true;
  timerEl.textContent = "0:00";
  progressBar.style.width = "100%";

  const data = stats();
  const result = {
    duration: testLabel(selectedDuration),
    mode: currentMode,
    wpm: data.wpm,
    accuracy: data.accuracy,
    score: data.score,
    lines: completedLines.length,
    theme: isThemeApplied ? themeNames[selectedTheme] : "No Theme",
    date: new Date().toLocaleDateString([], { month: "short", day: "numeric" })
  };

  scores.unshift(result);
  scores = scores.sort((a, b) => b.score - a.score).slice(0, 30);
  localStorage.setItem("speedyTypeScores", JSON.stringify(scores));
  renderScores();
  renderResult(result);
  showPage("results");
}

function renderScores() {
  scoreList.innerHTML = "";
  allScoresList.innerHTML = "";
  dailyGoal.textContent = formatTime(Math.min(scores.length * 60, 900));
  totalTests.textContent = scores.length;

  if (!scores.length) {
    const empty = document.createElement("li");
    empty.className = "empty-score";
    empty.textContent = "Complete a timed test to save your score.";
    scoreList.appendChild(empty);
    const allEmpty = empty.cloneNode(true);
    allEmpty.textContent = "Your scores will appear here after a test.";
    allScoresList.appendChild(allEmpty);
    bestSpeed.textContent = "0 WPM";
    bestAccuracy.textContent = "0%";
    return;
  }

  const highestWpm = Math.max(...scores.map((score) => score.wpm));
  const highestAccuracy = Math.max(...scores.map((score) => score.accuracy));
  bestSpeed.textContent = `${highestWpm} WPM`;
  bestAccuracy.textContent = `${highestAccuracy}%`;

  scores.slice(0, 3).forEach((score, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="score-rank">#${index + 1}</span>
      <div>
        <div class="score-main">${score.wpm} WPM | ${score.accuracy}% Accuracy</div>
        <div class="score-meta">
          <span>${score.score} pts</span>
          <span>${score.duration}</span>
          <span>${score.mode}</span>
          <span>${score.date}</span>
        </div>
      </div>
    `;
    scoreList.appendChild(item);
  });

  scores.forEach((score, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="score-rank">#${index + 1}</span>
      <div>
        <div class="score-main">${score.wpm} WPM | ${score.accuracy}% Accuracy</div>
        <div class="score-meta">
          <span>${score.score} pts</span>
          <span>${score.duration}</span>
          <span>${score.mode}</span>
          <span>${score.theme || themeNames[selectedTheme]}</span>
          <span>${score.date}</span>
        </div>
      </div>
    `;
    allScoresList.appendChild(item);
  });
}

function renderResult(result) {
  resultTitle.textContent = "Typing Test Complete!";
  resultSummary.textContent = `You typed the ${result.duration} with ${result.wpm} WPM and ${result.accuracy}% accuracy.`;
  resultWpm.textContent = `${result.wpm} WPM`;
  resultAccuracy.textContent = `${result.accuracy}%`;
  resultScore.textContent = result.score;
}

function setDuration(duration) {
  selectedDuration = duration;
  testCards.forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.durationChoice) === duration);
  });
  resetTest(false);
}

function setTheme(theme) {
  if (!themeData[theme]) return;
  isThemeApplied = true;
  selectedTheme = theme;
  previewTheme = theme;
  const data = themeData[theme];
  if (!data.avatars.includes(selectedAvatar)) selectedAvatar = data.avatars[0];
  const avatarIndex = data.avatars.indexOf(selectedAvatar);
  const sceneImage = svgUri(sceneSvg(theme));
  const avatarImage = svgUri(avatarSvg(theme, avatarIndex, selectedAvatar));
  const mascotImage = svgUri(mascotSvg(theme));
  document.body.classList.add("theme-is-changing");
  document.body.dataset.theme = selectedTheme;
  document.body.dataset.themeApplied = "true";
  document.documentElement.style.setProperty("--theme-main", data.main);
  document.documentElement.style.setProperty("--theme-dark", data.dark);
  document.documentElement.style.setProperty("--theme-soft", data.soft);
  document.documentElement.style.setProperty("--theme-accent", data.accent);
  document.documentElement.style.setProperty("--theme-scene-image", sceneImage);
  document.documentElement.style.setProperty("--avatar-image", avatarImage);
  document.documentElement.style.setProperty("--mascot-image", mascotImage);
  localStorage.setItem("speedyTypeTheme", selectedTheme);
  localStorage.setItem("speedyTypeAvatar", selectedAvatar);
  localStorage.setItem("speedyTypeThemeApplied", "true");
  themeWorldName.textContent = data.name;
  selectedThemeName.textContent = data.name;
  selectedAvatarName.textContent = `${selectedAvatar} (${avatarIndex + 1}/${data.avatars.length})`;
  document.body.dataset.avatar = String(avatarIndex + 1);
  updateThemeDetailStage();
  renderThemeGallery();
  renderAvatarGallery();
  initTheme3d();
  updateTheme3d();
  window.requestAnimationFrame(() => {
    window.setTimeout(() => document.body.classList.remove("theme-is-changing"), 180);
  });
}

function clearTheme() {
  isThemeApplied = false;
  document.body.classList.add("theme-is-changing");
  document.body.removeAttribute("data-theme");
  document.body.dataset.themeApplied = "false";
  document.body.dataset.avatar = "0";
  document.documentElement.style.setProperty("--theme-main", "#2798c9");
  document.documentElement.style.setProperty("--theme-dark", "#176e9c");
  document.documentElement.style.setProperty("--theme-soft", "#ffffff");
  document.documentElement.style.setProperty("--theme-accent", "#ffc83d");
  document.documentElement.style.setProperty("--theme-scene-image", "none");
  document.documentElement.style.setProperty("--avatar-image", "none");
  document.documentElement.style.setProperty("--mascot-image", "none");
  localStorage.setItem("speedyTypeThemeApplied", "false");
  themeWorldName.textContent = "No Theme Selected";
  selectedThemeName.textContent = "Theme Off";
  selectedAvatarName.textContent = "Clean white mode";
  updateThemeDetailStage();
  renderThemeGallery();
  renderAvatarGallery(previewTheme);
  window.requestAnimationFrame(() => {
    window.setTimeout(() => document.body.classList.remove("theme-is-changing"), 180);
  });
}

function setAvatar(name, theme = selectedTheme) {
  selectedAvatar = name;
  const avatarIndex = themeData[theme].avatars.indexOf(selectedAvatar);
  localStorage.setItem("speedyTypeAvatar", selectedAvatar);
  if (theme === selectedTheme && isThemeApplied) {
    selectedAvatarName.textContent = `${selectedAvatar} (${avatarIndex + 1}/${themeData[selectedTheme].avatars.length})`;
    document.body.dataset.avatar = String(avatarIndex + 1);
    document.documentElement.style.setProperty("--avatar-image", svgUri(avatarSvg(selectedTheme, avatarIndex, selectedAvatar)));
  }
  renderAvatarGallery(theme);
}

function levelDots(level) {
  return Array.from({ length: 5 }, (_, index) => `<i class="${index < level ? "filled" : ""}"></i>`).join("");
}

function updateThemeDetailStage(theme = previewTheme) {
  if (!themeDetailStage || !themeDetailTitle || !themeData[theme]) return;
  const data = themeData[theme];
  const presentation = themePresentation[theme] || {};
  themeDetailStage.style.backgroundImage = `
    linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    ${svgUri(sceneSvg(theme))}
  `;
  themeDetailStage.dataset.theme = theme;
  themeDetailTitle.textContent = presentation.logo || data.name;
  if (themeDetailName) themeDetailName.textContent = data.name;
  if (themeDetailDescription) themeDetailDescription.textContent = data.subtitle;
  if (themeApplyState) {
    themeApplyState.textContent = isThemeApplied && theme === selectedTheme ? "Applied to all pages" : "Preview only";
  }
  if (selectThemeBtn) {
    selectThemeBtn.textContent = isThemeApplied && theme === selectedTheme ? "Theme Selected" : "Select Theme";
    selectThemeBtn.disabled = isThemeApplied && theme === selectedTheme;
  }
  if (unselectThemeBtn) {
    unselectThemeBtn.disabled = !isThemeApplied;
  }
  renderThemeDetails(theme);
}

function renderThemeDetails(theme = previewTheme) {
  if (!themeData[theme]) return;
  const data = themeData[theme];
  const presentation = themePresentation[theme] || {};
  const demoItems = presentation.demo || ["Warmup lesson", "Timed typing test", "Progress badge"];

  if (themeDetailsTitle) {
    themeDetailsTitle.textContent = `${data.name} typing world`;
  }
  if (themeDetailsCopy) {
    themeDetailsCopy.textContent = `${data.subtitle}. This theme updates the header, cards, lesson boards, typing screen, score room, buttons, avatars, and progress states while keeping the main canvas clean white.`;
  }
  if (themeDetailChips) {
    themeDetailChips.innerHTML = `
      <span>${presentation.mood || "Focused practice"}</span>
      <span>${presentation.pace || "Steady"} pace</span>
      <span>${data.avatars.length} avatars</span>
      <span>Level ${presentation.level || 1}/5</span>
    `;
  }
  if (themeDemoPreview) {
    themeDemoPreview.style.setProperty("--demo-scene", svgUri(sceneSvg(theme)));
    themeDemoPreview.innerHTML = `
      <span style="background-image: ${svgUri(avatarSvg(theme, 0, data.avatars[0]))}"></span>
      <strong>${presentation.cardTitle || data.name}</strong>
      <p>${demoItems[0]} uses ${data.main} accents, ${data.accent} rewards, and a matching world preview.</p>
    `;
  }
  if (themeDemoList) {
    themeDemoList.innerHTML = demoItems.map((item, index) => `
      <div>
        <b>${index + 1}</b>
        <strong>${item}</strong>
        <span>${index === 0 ? "Lesson" : index === 1 ? "Typing test" : "Result reward"}</span>
      </div>
    `).join("");
  }
}

function showThemeGallery() {
  if (!themeGalleryView || !themeDetailView) return;
  themeGalleryView.classList.remove("hidden");
  themeDetailView.classList.add("hidden");
}

function openThemeDetail(theme) {
  if (!themeData[theme]) return;
  previewTheme = theme;
  if (!themeData[previewTheme].avatars.includes(selectedAvatar)) {
    selectedAvatar = themeData[previewTheme].avatars[0];
  }
  if (!themeGalleryView || !themeDetailView) return;
  themeGalleryView.classList.add("hidden");
  themeDetailView.classList.remove("hidden");
  updateThemeDetailStage(previewTheme);
  renderAvatarGallery(previewTheme);
}

function initTheme3d() {
  if (!theme3dCanvas || !window.THREE || theme3d) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
  camera.position.set(0, 1.6, 5);
  const renderer = new THREE.WebGLRenderer({ canvas: theme3dCanvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const world = new THREE.Group();
  scene.add(world);
  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const light = new THREE.DirectionalLight(0xffffff, 1.1);
  light.position.set(3, 5, 4);
  scene.add(light);

  const floor = new THREE.Mesh(
    new THREE.CylinderGeometry(2.25, 2.25, 0.18, 48),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55 })
  );
  floor.position.y = -0.9;
  world.add(floor);

  const hero = new THREE.Mesh(
    new THREE.SphereGeometry(0.58, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 })
  );
  hero.position.set(-0.82, 0.05, 0);
  world.add(hero);

  const tower = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.5, 1.85, 6),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 })
  );
  tower.position.set(0.68, 0.02, 0);
  world.add(tower);

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(0.58, 0.82, 6),
    new THREE.MeshStandardMaterial({ color: 0xffcc66, roughness: 0.45 })
  );
  roof.position.set(0.68, 1.36, 0);
  world.add(roof);

  theme3d = { scene, camera, renderer, world, floor, hero, tower, roof };

  function animate() {
    if (!theme3d) return;
    world.rotation.y += 0.008;
    hero.position.y = 0.06 + Math.sin(Date.now() / 450) * 0.08;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
  updateTheme3d();
  window.addEventListener("resize", resizeTheme3d);
  resizeTheme3d();
}

function resizeTheme3d() {
  if (!theme3d || !theme3dCanvas) return;
  const rect = theme3dCanvas.getBoundingClientRect();
  theme3d.renderer.setSize(rect.width, rect.height, false);
  theme3d.camera.aspect = rect.width / Math.max(rect.height, 1);
  theme3d.camera.updateProjectionMatrix();
}

function updateTheme3d() {
  if (!theme3d || !themeData[selectedTheme]) return;
  const data = themeData[selectedTheme];
  theme3d.floor.material.color.set(data.soft);
  theme3d.hero.material.color.set(data.main);
  theme3d.tower.material.color.set(data.dark);
  theme3d.roof.material.color.set(data.accent);
  theme3d.scene.background = null;
}

function renderThemeGallery() {
  themeGallery.innerHTML = "";
  Object.entries(themeData).forEach(([key, data]) => {
    const presentation = themePresentation[key] || {};
    const button = document.createElement("button");
    button.className = `theme-card${isThemeApplied && key === selectedTheme ? " active" : ""}${key === previewTheme ? " previewing" : ""}`;
    button.type = "button";
    button.dataset.themeChoice = key;
    button.style.setProperty("--card-main", data.main);
    button.style.setProperty("--card-accent", data.accent);
    button.style.backgroundImage = `
      linear-gradient(180deg, rgba(255, 255, 255, 0) 0 34%, rgba(32, 38, 44, 0.58) 34% 59%, rgba(255, 255, 255, 0) 59%),
      ${svgUri(sceneSvg(key))}
    `;
    button.innerHTML = `
      <strong>${presentation.cardTitle || data.name}</strong>
      <small>${isThemeApplied && key === selectedTheme ? "Selected" : "Preview"}</small>
      ${isThemeApplied && key === selectedTheme ? `<span class="selected-theme-sign">Selected</span>` : ""}
      <span class="theme-level">Level <b>${levelDots(presentation.level || 1)}</b></span>
    `;
    button.addEventListener("click", () => openThemeDetail(key));
    themeGallery.appendChild(button);
  });
}

function renderAvatarGallery(theme = selectedTheme) {
  const data = themeData[theme];
  if (avatarPanelTitle) avatarPanelTitle.textContent = `${data.name} Characters`;
  avatarGallery.innerHTML = "";
  data.avatars.forEach((name, index) => {
    const button = document.createElement("button");
    button.className = `avatar-card${name === selectedAvatar ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="avatar-face" data-avatar="${index + 1}" style="background-image: ${svgUri(avatarSvg(theme, index, name))}"></span>
      <strong>${name}</strong>
    `;
    button.addEventListener("click", () => setAvatar(name, theme));
    avatarGallery.appendChild(button);
  });
}

function setSound(sound) {
  if (!soundVoices[sound]) sound = "soft";
  selectedSound = sound;
  localStorage.setItem("speedyTypeSound", selectedSound);
  soundOptions.querySelectorAll(".sound-option").forEach((option) => option.classList.toggle("active", option.dataset.sound === sound));
  soundToggleBtn.textContent = selectedSound === "off" ? "Sounds Off" : "Sounds On";
  renderSoundOptions();
}

function setSpeedFeel(feel) {
  selectedSpeedFeel = feel;
  localStorage.setItem("speedyTypeSpeedFeel", selectedSpeedFeel);
  speedOptions.forEach((option) => option.classList.toggle("active", option.dataset.speedFeel === feel));
}

function renderSoundOptions() {
  soundOptions.innerHTML = "";
  Object.entries(soundVoices).forEach(([key, voice]) => {
    const button = document.createElement("button");
    button.className = `sound-option${key === selectedSound ? " active" : ""}`;
    button.type = "button";
    button.dataset.sound = key;
    button.innerHTML = `
      <span class="sound-wave"><i></i><i></i><i></i></span>
      <strong>${voice.name}</strong>
      <span>${voice.desc}</span>
      <small>${key === "off" ? "Muted" : `${voice.right} Hz tap`}</small>
    `;
    button.addEventListener("click", () => {
      setSound(key);
      setTimeout(() => playTone("right"), 40);
      setTimeout(() => playTone("wrong"), 170);
    });
    soundOptions.appendChild(button);
  });
}

function selectLessonVideo(video) {
  videoTitle.textContent = video[0];
  videoCaption.textContent = video[1];
  lessonVideoArt.dataset.level = video[2];
  videoScreen.classList.remove("playing");
}

function renderLessonStage(stageName) {
  const stage = lessonStages[stageName];
  if (!stage) return;

  missionTitle.textContent = stage.title;
  videoList.innerHTML = "";
  lessonMissionList.innerHTML = "";

  stage.videos.forEach((video, index) => {
    const button = document.createElement("button");
    button.className = `video-lesson${index === 0 ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="mini-video" data-level="${video[2]}"></span>
      <strong>${video[0]}</strong>
      <small>${index + 2} min video</small>
    `;
    button.addEventListener("click", () => {
      videoList.querySelectorAll(".video-lesson").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      selectLessonVideo(video);
    });
    videoList.appendChild(button);
  });

  stage.missions.forEach((mission, index) => {
    const button = document.createElement("button");
    button.className = "lesson-row";
    button.type = "button";
    button.dataset.lessonMode = mission[2];
    button.innerHTML = `
      <span>${index + 1}</span>
      <strong>${mission[0]}</strong>
      <small>${mission[1]}</small>
      <b>Start Typing</b>
    `;
    button.addEventListener("click", () => {
      currentMode = mission[2];
      selectedDuration = 60;
      resetTest(true);
      showPage("typing");
    });
    lessonMissionList.appendChild(button);
  });

  selectLessonVideo(stage.videos[0]);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.pageLink);
  });
});

testCards.forEach((card) => {
  card.addEventListener("click", () => {
    setDuration(Number(card.dataset.durationChoice));
    showPage("typing");
  });
});

lessonTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    lessonTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderLessonStage(tab.dataset.lessonStage);
  });
});

playLessonBtn.addEventListener("click", () => {
  videoScreen.classList.toggle("playing");
});

if (backToThemesBtn) {
  backToThemesBtn.addEventListener("click", showThemeGallery);
}

if (selectThemeBtn) {
  selectThemeBtn.addEventListener("click", () => setTheme(previewTheme));
}

if (unselectThemeBtn) {
  unselectThemeBtn.addEventListener("click", clearTheme);
}

gameCards.forEach((card) => {
  card.addEventListener("click", () => {
    currentMode = card.dataset.gameMode;
    setTheme(card.dataset.gameTheme);
    selectedDuration = 60;
    resetTest(true);
    showPage("typing");
  });
});

document.addEventListener("keydown", handleTypingKey);
quoteDisplay.addEventListener("click", () => typingInput.focus());

redoBtn.addEventListener("click", () => resetTest(false));
soundToggleBtn.addEventListener("click", () => {
  setSound(selectedSound === "off" ? "soft" : "off");
});
soundPreviewBtn.addEventListener("click", () => {
  playTone("right");
  setTimeout(() => playTone("wrong"), 120);
});
speedOptions.forEach((option) => {
  option.addEventListener("click", () => setSpeedFeel(option.dataset.speedFeel));
});
takeAgainBtn.addEventListener("click", () => {
  resetTest(false);
  showPage("typing");
});

if (isThemeApplied) {
  setTheme(selectedTheme);
} else {
  clearTheme();
}
setSound(selectedSound);
setSpeedFeel(selectedSpeedFeel);
renderLessonStage("beginner");
selectSentence();
renderScores();
resetTest(false);
