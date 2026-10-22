/***********************************************************************
 * 1. EDIT YOUR 7 OGR-SCINTILLA SONGS RIGHT HERE!
 * Put the song title in "title" and the folder/filename in "file"
 ***********************************************************************/
const ogrPlaylist = [
    { title: "Canadian Jolene Remix", file: "OGR-Scintilla - Jolene Canadian Remix.mp3" },
    { title: "Young Poutine", file: "OGR-Scintilla - Mr.mp3" },
    { title: "Not Like U.S.", file: "OGR-Scintilla - Not like U.S.mp3" },
    { title: "Flow Like Trudeau", file: "OGR-Scintilla - Flow Like Trudeau.mp3" },
    { title: "Canadian Boys", file: "OGR-Scintilla - Canadian Boys.mp3" },
    { title: "Party in Canada", file: "OGR-Scintilla - Party in Canada.mp3" },
    { title: "Slapshot", file: "OGR-Scintilla Slapshot (Bazooka).mp3" }
];

/***********************************************************************
 * 2. BILINGUAL TRANSLATION DICTIONARY
 ***********************************************************************/
let currentLang = 'en';

const i18n = {
    en: {
        soundOn: "Audio: ON",
        soundOff: "Audio: MUTE",
        deptName: "Hatrick-Dev",
        breadcrumbCurrent: "Arcade.gc.ca",
        searchPlaceholder: "Search Arcade.gc.ca",
        deptSubheader: "Hatrick-Dev",
        mainTitle: "arcade.gc.ca (Canadian arcade.gov)",
        mainIntro: "",
        mostRequestedHeading: "Games",
        selectPrompt: "Click any simulation card to launch below",
        badgeTransport: "Transport Canada",
        game1Title: "1. Trans-Canada Snowplower",
        game1Desc: "Steer a snowplow down Highway 401. Dodge potholes and cones while picking up Double-Doubles and Timbits.",
        formCode1: "",
        badgeWildlife: "Parks & Wildlife",
        game2Title: "2. Cobra Chicken Defense",
        game2Desc: "Aggressive Canadian geese are attacking your picnic. Toss donuts pacify them before they steal your Timbits.",
        formCode2: "",
        badgeAgri: "Strategic Reserve",
        game3Title: "3. Maple Syrup Tapper",
        game3Desc: "Distrbute maple syrup jugs to thirsty Lumberjacks, Mounties, and hockey players.",
        formCode3: "",
        game4Title: "4. Flappy Goose",
        game4Desc: "Fly over Parliament Hill and don't hit the pillars! Press Up Arrow or Space to go up.",
        formCode4: "",
        playNowText: "Launch Simulator",
        scoreHeader: "SCORE:",
        livesHeader: "STATUS:",
        insertLoonie: "INSERT LOONIE (START GAME)",
        playAgainBtn: "INSERT ANOTHER LOONIE (PLAY AGAIN)",
        actionBtn: "ACTION / SPACE",
        controlsHintPothole: "Keyboard: [←/→ or A/D] Steer Snowplow | [SPACE] Honk Plow Horn",
        controlsHintGoose: "Keyboard: [←/→ or A/D] Move Picnic Defender | [SPACE or ↑] Toss Fresh Bagel",
        controlsHintTapper: "Keyboard: [↑/↓ or W/S] Switch Snowy Counter | [SPACE or →] Slide Maple Syrup Jug",
        controlsHintFlappy: "Keyboard: [SPACE or ↑] Flap Wings to fly between Peace Towers",
        reportProblemBtn: "Feedback",
        dateModifiedLabel: "Date modified:",
        footerHeader: "Made by Hatrick-Dev",
        subFooter1: "Social media",
        closeBtn: "Acknowledge & Close"
    },
    fr: {
        soundOn: "Audio : ACTIVÉ",
        soundOff: "Audio : MUET",
        deptName: "Hatrick-Dev",
        breadcrumbCurrent: "Arcade.gc.ca",
        searchPlaceholder: "Rechercher dans Arcade.gc.ca",
        deptSubheader: "Hatrick-Dev",
        mainTitle: "arcade.gc.ca (Canadian arcade.gov)",
        mainIntro: "",
        mostRequestedHeading: "Jeux",
        selectPrompt: "Cliquez sur une carte de service pour lancer le jeu",
        badgeTransport: "Transports Canada",
        game1Title: "1. Trans-Canada Snowplower",
        game1Desc: "Conduisez un chasse-neige municipal. Évitez les nids-de-poule géants et les cônes orange tout en ramassant des Timbits et des cafés deux-deux.",
        formCode1: "",
        badgeWildlife: "Parcs et Faune",
        game2Title: "2. Défense contre les Poulets Cobras",
        game2Desc: "Des bernaches du Canada (« Poulets Cobras ») attaquent votre pique-nique! Lancez des bagels de Montréal pour les pacifier avant qu'elles n'envahissent votre nappe.",
        formCode2: "",
        badgeAgri: "Réserve stratégique",
        game3Title: "3. Tireur de Sirop d'Érable",
        game3Desc: "Remplissez des cruches de sirop d'érable aux chalumeaux et faites-les glisser sur des comptoirs enneigés vers les bûcherons et la GRC assoiffés!",
        formCode3: "",
        game4Title: "4. Flappy Goose",
        game4Desc: "Survolez la Colline du Parlement sans frapper les piliers! Appuyez sur Espace ou Haut pour monter.",
        formCode4: "",
        playNowText: "Lancer le simulateur",
        scoreHeader: "POINTAGE :",
        livesHeader: "STATUT :",
        insertLoonie: "INSÉRER UN HUARD (DÉMARRER)",
        playAgainBtn: "INSÉRER UN AUTRE HUARD (REJOUER)",
        actionBtn: "ACTION / ESPACE",
        controlsHintPothole: "Clavier : [←/→ ou A/D] Diriger la déneigeuse | [ESPACE] Klaxonner",
        controlsHintGoose: "Clavier : [←/→ ou A/D] Déplacer | [ESPACE ou ↑] Lancer un bagel",
        controlsHintTapper: "Clavier : [↑/↓ ou W/S] Changer de comptoir | [ESPACE ou →] Glisser une cruche",
        controlsHintFlappy: "Clavier : [ESPACE ou ↑] Battez des ailes pour voler",
        reportProblemBtn: "Commentaires",
        dateModifiedLabel: "Date de modification :",
        footerHeader: "Fait par Hatrick-Dev",
        subFooter1: "Médias sociaux",
        closeBtn: "Accuser réception et fermer"
    }
};

const gameMetadata = {
    pothole: {
        emoji: "🚜🕳️☕",
        enTitle: "Trans-Canada Snowplower",
        frTitle: "Patrouille Nids-de-poule : Édition Transcanadienne",
        enOverlayTitle: "TRANS-CANADA SNOWPLOWER",
        frOverlayTitle: "PATROUILLE NIDS-DE-POULE",
        enDesc: "Steer your snowplow with Right/Left Arrows or A/D. Dodge potholes & cones! Collect Timbits (+50) and Double-Doubles (+100).",
        frDesc: "Dirigez votre chasse-neige avec GAUCHE/DROITE (ou A/D). Évitez les nids-de-poule et les cônes! Ramassez les Timbits (+50) et cafés (+100)."
    },
    goose: {
        emoji: "🪿🥯🧺",
        enTitle: "Cobra Chicken Defense",
        frTitle: "Défense contre les Poulets Cobras",
        enOverlayTitle: "COBRA CHICKEN DEFENSE",
        frOverlayTitle: "DÉFENSE POULETS COBRAS",
        enDesc: "Angry Canada Geese are attacking your picnic. Move with Right/Left Arrows or A/D and press Space to toss fresh donuts to pacify them.",
        frDesc: "Les bernaches attaquent votre pique-nique! Déplacez-vous avec GAUCHE/DROITE et appuyez sur ESPACE (ou HAUT) pour lancer des bagels."
    },
    tapper: {
        emoji: "🍁🥞🤠",
        enTitle: "Maple Syrup Tapper",
        frTitle: "Tireur de Sirop d'Érable",
        enOverlayTitle: "MAPLE SYRUP TAPPER",
        frOverlayTitle: "TIREUR DE SIROP D'ÉRABLE",
        enDesc: "Use Up/Down Arrows or W/S to move between 3 counters. Press Space to fill & slide a jug of Maple Syrup to thirsty Canadians.",
        frDesc: "Utilisez HAUT/BAS (ou W/S) pour changer de comptoir enneigé. Appuyez sur ESPACE (ou DROITE) pour glisser une cruche de sirop d'érable!"
    },
    flappy: {
        emoji: "🪿🏛️☁️",
        enTitle: "Flappy Goose",
        frTitle: "Flappy Goose",
        enOverlayTitle: "FLAPPY GOOSE",
        frOverlayTitle: "FLAPPY GOOSE",
        enDesc: "Fly over Parliament Hill and don't hit the pillars! Press Up Arrow or Space to go up.",
        frDesc: "Survolez la Colline du Parlement sans frapper les piliers! Appuyez sur Espace ou Haut pour monter."
    }
};

/***********************************************************************
 * 3. SYNTHESIZED WEB AUDIO API RETRO SOUND ENGINE
 ***********************************************************************/
let soundEnabled = true;
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    updateSoundUI();
    if (soundEnabled) playSound('coin');
}

function updateSoundUI() {
    const icon = document.getElementById('soundIcon');
    const label = document.getElementById('soundLabel');
    if (soundEnabled) {
        icon.className = "fa-solid fa-volume-high text-[#AF3C43]";
        label.textContent = i18n[currentLang].soundOn;
    } else {
        icon.className = "fa-solid fa-volume-xmark text-gray-500";
        label.textContent = i18n[currentLang].soundOff;
    }
}

function playSound(type) {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;

        if (type === 'blip') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(520, now);
            osc.frequency.exponentialRampToValueAtTime(780, now + 0.06);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.06);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.06);
        } else if (type === 'coin') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(987.77, now);
            osc.frequency.setValueAtTime(1318.51, now + 0.08);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.008, now + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'pickup') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(587.33, now);
            osc.frequency.setValueAtTime(880, now + 0.06);
            osc.frequency.setValueAtTime(1174.66, now + 0.12);
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.22);
        } else if (type === 'honk') {
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();
            osc1.type = 'sawtooth';
            osc2.type = 'square';
            osc1.frequency.setValueAtTime(310, now);
            osc1.frequency.linearRampToValueAtTime(430, now + 0.08);
            osc1.frequency.linearRampToValueAtTime(270, now + 0.24);

            osc2.frequency.setValueAtTime(318, now);
            osc2.frequency.linearRampToValueAtTime(442, now + 0.08);
            osc2.frequency.linearRampToValueAtTime(275, now + 0.24);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);
            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 0.25);
            osc2.stop(now + 0.25);
        } else if (type === 'crash') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(45, now + 0.28);
            gain.gain.setValueAtTime(0.18, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.28);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.28);
        } else if (type === 'throw') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, now);
            osc.frequency.exponentialRampToValueAtTime(660, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'gameover') {
            const notes = [392.00, 349.23, 329.63, 261.63];
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(freq, now + idx * 0.14);
                gain.gain.setValueAtTime(0.1, now + idx * 0.14);
                gain.gain.exponentialRampToValueAtTime(0.008, now + (idx + 1) * 0.14);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + idx * 0.14);
                osc.stop(now + (idx + 1) * 0.14);
            });
        }
    } catch (e) {
        // Ignore audio restrictions before interaction
    }
}

/***********************************************************************
 * 4. OGR-SCINTILLA RADIO / PARODY PLAYLIST ENGINE
 ***********************************************************************/
let currentTrackIndex = 0;
let isMusicPlaying = false;
const musicPlayer = new Audio();
musicPlayer.volume = 0.8;

function initMusicPlayer() {
    const countBadge = document.getElementById('trackCountBadge');
    if (countBadge) countBadge.textContent = `${ogrPlaylist.length} Songs`;

    if (ogrPlaylist.length > 0) {
        loadTrack(0, false);
    }
    renderPlaylist();

    musicPlayer.addEventListener('timeupdate', () => {
        const seek = document.getElementById('musicSeekBar');
        const timeDisp = document.getElementById('musicTimeDisplay');
        if (!seek || !timeDisp) return;

        if (musicPlayer.duration) {
            seek.value = (musicPlayer.currentTime / musicPlayer.duration) * 100;
            timeDisp.textContent = `${formatTime(musicPlayer.currentTime)} / ${formatTime(musicPlayer.duration)}`;
        }
    });

    musicPlayer.addEventListener('ended', () => {
        nextTrack();
    });
}

function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;

    container.innerHTML = ogrPlaylist.map((track, idx) => {
        const isCurrent = idx === currentTrackIndex;
        const rowBg = isCurrent ? 'bg-red-50 border-l-4 border-[#AF3C43] font-bold text-[#AF3C43]' : 'hover:bg-gray-100 text-gray-800';
        const icon = (isCurrent && isMusicPlaying) ? 'fa-volume-high animate-pulse text-[#AF3C43]' : 'fa-music text-gray-400';

        return `
            <button onclick="selectTrack(${idx})" class="w-full text-left px-4 py-3 flex items-center justify-between text-xs sm:text-sm transition cursor-pointer ${rowBg}">
                <div class="flex items-center space-x-3 truncate pr-2">
                    <span class="font-mono text-xs text-gray-400 w-4">${idx + 1}.</span>
                    <span class="truncate">${track.title}</span>
                </div>
                <i class="fa-solid ${icon} text-xs flex-shrink-0"></i>
            </button>
        `;
    }).join('');
}

function loadTrack(index, autoPlay = false) {
    if (ogrPlaylist.length === 0) return;
    currentTrackIndex = index;
    musicPlayer.src = ogrPlaylist[currentTrackIndex].file;
    
    const titleEl = document.getElementById('nowPlayingTitle');
    if (titleEl) titleEl.textContent = ogrPlaylist[currentTrackIndex].title;

    const seek = document.getElementById('musicSeekBar');
    if (seek) seek.value = 0;

    if (autoPlay) {
        musicPlayer.play().then(() => {
            isMusicPlaying = true;
            updateMusicUI();
        }).catch(() => {
            isMusicPlaying = false;
            updateMusicUI();
        });
    } else {
        isMusicPlaying = false;
        updateMusicUI();
    }
    renderPlaylist();
}

function selectTrack(index) {
    if (index === currentTrackIndex) {
        togglePlayMusic();
    } else {
        loadTrack(index, true);
    }
}

function togglePlayMusic() {
    if (ogrPlaylist.length === 0) return;
    if (isMusicPlaying) {
        musicPlayer.pause();
        isMusicPlaying = false;
        updateMusicUI();
    } else {
        musicPlayer.play().then(() => {
            isMusicPlaying = true;
            updateMusicUI();
        }).catch(err => {
            console.error("Audio file not found or blocked:", err);
            const statusText = document.getElementById('musicStatusText');
            if (statusText) statusText.textContent = "FILE NOT FOUND";
        });
    }
    renderPlaylist();
}

function prevTrack() {
    const nextIdx = (currentTrackIndex - 1 + ogrPlaylist.length) % ogrPlaylist.length;
    loadTrack(nextIdx, true);
}

function nextTrack() {
    const nextIdx = (currentTrackIndex + 1) % ogrPlaylist.length;
    loadTrack(nextIdx, true);
}

function seekMusic(val) {
    if (musicPlayer.duration) {
        musicPlayer.currentTime = (val / 100) * musicPlayer.duration;
    }
}

function changeMusicVolume(val) {
    musicPlayer.volume = parseFloat(val);
}

function updateMusicUI() {
    const playIcon = document.getElementById('musicPlayIcon');
    const statusText = document.getElementById('musicStatusText');
    const spinIcon = document.getElementById('musicSpinIcon');

    if (!playIcon || !statusText || !spinIcon) return;

    if (isMusicPlaying) {
        playIcon.className = "fa-solid fa-pause text-sm";
        statusText.textContent = "NOW PLAYING";
        spinIcon.className = "fa-solid fa-compact-disc fa-spin text-green-400";
    } else {
        playIcon.className = "fa-solid fa-play text-sm";
        statusText.textContent = "PAUSED";
        spinIcon.className = "fa-solid fa-compact-disc text-yellow-400";
    }
}

/***********************************************************************
 * 5. MULTI-GAME HTML5 CANVAS ENGINE
 ***********************************************************************/
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let activeGameKey = 'pothole';
let isPlaying = false;
let score = 0;
let lives = 3;
let frameCount = 0;
let animationFrameId = null;

const keys = {
    left: false,
    right: false,
    up: false,
    down: false,
    action: false
};

window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        if (isPlaying) e.preventDefault();
    }
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        if (!keys.right && isPlaying && activeGameKey === 'tapper') handleSingleTapAction('action');
        keys.right = true;
    }
    if (e.code === 'ArrowUp' || e.code === 'KeyW') {
        if (!keys.up && isPlaying) handleSingleTapAction('up');
        keys.up = true;
    }
    if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        if (!keys.down && isPlaying) handleSingleTapAction('down');
        keys.down = true;
    }
    if (e.code === 'Space') {
        if (!keys.action && isPlaying) handleSingleTapAction('action');
        keys.action = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
    if (e.code === 'ArrowUp' || e.code === 'KeyW') keys.up = false;
    if (e.code === 'ArrowDown' || e.code === 'KeyS') keys.down = false;
    if (e.code === 'Space') keys.action = false;
});

function triggerInput(dir, isPressed) {
    if (isPressed && isPlaying) {
        if (dir === 'up' || dir === 'down' || dir === 'action') {
            handleSingleTapAction(dir);
        }
    }
    keys[dir] = isPressed;
}

canvas.addEventListener('pointerdown', (e) => {
    if (!isPlaying) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const clickY = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (activeGameKey === 'pothole') {
        if (clickX < canvas.width / 2) {
            potholeState.plowX = Math.max(150, potholeState.plowX - 48);
        } else {
            potholeState.plowX = Math.min(canvas.width - 190, potholeState.plowX + 48);
        }
    } else if (activeGameKey === 'goose') {
        gooseState.playerX = Math.max(50, Math.min(canvas.width - 50, clickX));
        spawnBagel();
    } else if (activeGameKey === 'tapper') {
        if (clickY < 185) tapperState.lane = 0;
        else if (clickY < 310) tapperState.lane = 1;
        else tapperState.lane = 2;
        slideSyrupJug();
    } else if (activeGameKey === 'flappy') {
        flappyState.vy = flappyState.jump;
        playSound('throw');
    }
});

function handleSingleTapAction(dir) {
    if (activeGameKey === 'pothole' && dir === 'action') {
        playSound('honk');
        potholeState.hornTimer = 18;
    } else if (activeGameKey === 'goose' && (dir === 'action' || dir === 'up')) {
        spawnBagel();
    } else if (activeGameKey === 'tapper') {
        if (dir === 'up') {
            tapperState.lane = (tapperState.lane + 2) % 3;
            playSound('blip');
        } else if (dir === 'down') {
            tapperState.lane = (tapperState.lane + 1) % 3;
            playSound('blip');
        } else if (dir === 'action') {
            slideSyrupJug();
        }
    } else if (activeGameKey === 'flappy' && (dir === 'action' || dir === 'up')) {
        flappyState.vy = flappyState.jump;
        playSound('throw');
    }
}

function switchGame(gameKey) {
    activeGameKey = gameKey;
    isPlaying = false;
    playSound('blip');

    ['pothole', 'goose', 'tapper', 'flappy'].forEach(k => {
        const card = document.getElementById(`card-${k}`);
        if (k === gameKey) card.classList.add('active-game');
        else card.classList.remove('active-game');
    });

    document.getElementById('finalScoreBanner').classList.add('hidden');
    document.getElementById('canvasOverlay').classList.remove('hidden');
    document.getElementById('startBtnText').textContent = i18n[currentLang].insertLoonie;

    lives = (activeGameKey === 'flappy') ? 1 : 3;
    updateHUD();

    syncCabinetTexts();
    drawStaticPreview();
}

function syncCabinetTexts() {
    const meta = gameMetadata[activeGameKey];
    document.getElementById('cabinetTitle').textContent = currentLang === 'en' ? meta.enTitle : meta.frTitle;
    document.getElementById('overlayEmoji').textContent = meta.emoji;
    document.getElementById('overlayTitle').textContent = currentLang === 'en' ? meta.enOverlayTitle : meta.frOverlayTitle;
    document.getElementById('overlayDesc').textContent = currentLang === 'en' ? meta.enDesc : meta.frDesc;

    const hintEl = document.getElementById('controlsHelpBar').querySelector('span');
    if (activeGameKey === 'pothole') hintEl.textContent = i18n[currentLang].controlsHintPothole;
    else if (activeGameKey === 'goose') hintEl.textContent = i18n[currentLang].controlsHintGoose;
    else if (activeGameKey === 'tapper') hintEl.textContent = i18n[currentLang].controlsHintTapper;
    else if (activeGameKey === 'flappy') hintEl.textContent = i18n[currentLang].controlsHintFlappy;
}

function updateHUD() {
    document.getElementById('liveScoreDisplay').textContent = score.toLocaleString();
    
    if (activeGameKey === 'flappy') {
        document.getElementById('liveStatusDisplay').textContent = '🍁'.repeat(Math.max(0, lives));
    } else {
        document.getElementById('liveStatusDisplay').textContent = '🍁'.repeat(Math.max(0, lives)) + '🖤'.repeat(Math.max(0, 3 - lives));
    }
}

function startCurrentGame() {
    playSound('coin');
    score = 0;
    lives = (activeGameKey === 'flappy') ? 1 : 3;
    frameCount = 0;
    isPlaying = true;
    updateHUD();

    document.getElementById('canvasOverlay').classList.add('hidden');

    if (activeGameKey === 'pothole') initPotholeGame();
    else if (activeGameKey === 'goose') initGooseGame();
    else if (activeGameKey === 'tapper') initTapperGame();
    else if (activeGameKey === 'flappy') initFlappyGame();

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameLoop();
}

function endGame() {
    isPlaying = false;
    playSound('gameover');

    const banner = document.getElementById('finalScoreBanner');
    banner.classList.remove('hidden');
    document.getElementById('finalScoreText').textContent =
        (currentLang === 'en' ? `FINAL SCORE: ${score.toLocaleString()} PTS` : `SCORE FINAL : ${score.toLocaleString()} PTS`);

    document.getElementById('startBtnText').textContent = i18n[currentLang].playAgainBtn;
    document.getElementById('canvasOverlay').classList.remove('hidden');
}

function gameLoop() {
    if (!isPlaying) return;
    frameCount++;

    if (activeGameKey === 'pothole') updateAndDrawPothole();
    else if (activeGameKey === 'goose') updateAndDrawGoose();
    else if (activeGameKey === 'tapper') updateAndDrawTapper();
    else if (activeGameKey === 'flappy') updateAndDrawFlappy();

    if (isPlaying) {
        animationFrameId = requestAnimationFrame(gameLoop);
    }
}

/***********************************************************************
 * GAME 1: POTHOLE PATROL
 ***********************************************************************/
let potholeState = {
    plowX: 340,
    plowY: 345,
    speed: 4.5,
    roadOffset: 0,
    hornTimer: 0,
    entities: [],
    snowflakes: []
};

function initPotholeGame() {
    potholeState.plowX = 340;
    potholeState.speed = 4.5;
    potholeState.roadOffset = 0;
    potholeState.hornTimer = 0;
    potholeState.entities = [];
    potholeState.snowflakes = Array.from({ length: 35 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: 1 + Math.random() * 2.5
    }));
}

function updateAndDrawPothole() {
    const st = potholeState;
    st.speed = 4.5 + Math.min(5, score / 1500);
    st.roadOffset = (st.roadOffset + st.speed) % 60;

    if (keys.left) st.plowX -= 6.5;
    if (keys.right) st.plowX += 6.5;
    st.plowX = Math.max(145, Math.min(canvas.width - 185, st.plowX));

    if (frameCount % Math.max(22, Math.floor(46 - st.speed * 2)) === 0) {
        const laneX = 160 + Math.random() * (canvas.width - 340);
        const roll = Math.random();
        let type = 'pothole';
        if (roll < 0.40) type = 'pothole';
        else if (roll < 0.65) type = 'cone';
        else if (roll < 0.85) type = 'timbit';
        else type = 'coffee';

        st.entities.push({ x: laneX, y: -40, type });
    }

    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = (st.roadOffset % 60) - 60; y < canvas.height; y += 60) {
        drawPineTree(55, y);
        drawPineTree(canvas.width - 55, y + 25);
    }

    ctx.fillStyle = '#334155';
    ctx.fillRect(130, 0, canvas.width - 260, canvas.height);

    ctx.fillStyle = '#AF3C43';
    ctx.fillRect(122, 0, 8, canvas.height);
    ctx.fillRect(canvas.width - 130, 0, 8, canvas.height);

    ctx.fillStyle = '#facc15';
    for (let y = st.roadOffset - 60; y < canvas.height; y += 60) {
        ctx.fillRect(285, y, 6, 34);
        ctx.fillRect(430, y, 6, 34);
    }

    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.font = 'bold 20px Lato';
    ctx.textAlign = 'center';
    ctx.fillText('TRANS-CANADA HWY 1', canvas.width / 2, 220);

    for (let i = st.entities.length - 1; i >= 0; i--) {
        const ent = st.entities[i];
        ent.y += st.speed;

        if (ent.type === 'pothole') {
            ctx.fillStyle = '#090d16';
            ctx.beginPath();
            ctx.ellipse(ent.x + 22, ent.y + 16, 26, 15, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (ent.type === 'cone') {
            ctx.fillStyle = '#f97316';
            ctx.beginPath();
            ctx.moveTo(ent.x + 16, ent.y);
            ctx.lineTo(ent.x + 32, ent.y + 30);
            ctx.lineTo(ent.x, ent.y + 30);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(ent.x + 9, ent.y + 13, 14, 5);
        } else if (ent.type === 'timbit') {
            ctx.fillStyle = '#b45309';
            ctx.beginPath();
            ctx.arc(ent.x + 16, ent.y + 16, 13, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fde68a';
            ctx.beginPath();
            ctx.arc(ent.x + 13, ent.y + 12, 4, 0, Math.PI * 2);
            ctx.fill();
        } else if (ent.type === 'coffee') {
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(ent.x + 6, ent.y + 4, 20, 26);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(ent.x + 4, ent.y, 24, 5);
            ctx.fillStyle = '#fef08a';
            ctx.font = 'bold 10px sans-serif';
            ctx.fillText('🍁', ent.x + 16, ent.y + 21);
        }

        const hitX = ent.x + 18 > st.plowX - 6 && ent.x + 6 < st.plowX + 46;
        const hitY = ent.y + 24 > st.plowY && ent.y < st.plowY + 62;

        if (hitX && hitY) {
            if (ent.type === 'pothole' || ent.type === 'cone') {
                playSound('crash');
                lives--;
                updateHUD();
                st.entities.splice(i, 1);
                if (lives <= 0) {
                    endGame();
                    return;
                }
            } else {
                playSound('pickup');
                score += (ent.type === 'coffee' ? 100 : 50);
                updateHUD();
                st.entities.splice(i, 1);
            }
            continue;
        }

        if (ent.y > canvas.height + 40) {
            if (ent.type === 'pothole' || ent.type === 'cone') {
                score += 10;
                updateHUD();
            }
            st.entities.splice(i, 1);
        }
    }

    ctx.fillStyle = '#facc15';
    ctx.fillRect(st.plowX - 8, st.plowY - 6, 56, 12);
    ctx.fillStyle = '#ca8a04';
    ctx.fillRect(st.plowX - 8, st.plowY - 2, 56, 4);

    ctx.fillStyle = '#2563eb';
    ctx.fillRect(st.plowX, st.plowY + 6, 40, 56);
    ctx.fillStyle = '#93c5fd';
    ctx.fillRect(st.plowX + 5, st.plowY + 12, 30, 14);

    ctx.fillStyle = (Math.floor(frameCount / 8) % 2 === 0) ? '#f97316' : '#fef08a';
    ctx.beginPath();
    ctx.arc(st.plowX + 20, st.plowY + 34, 6, 0, Math.PI * 2);
    ctx.fill();

    if (st.hornTimer > 0) {
        st.hornTimer--;
        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('HONK! SORRY!', st.plowX + 20, st.plowY - 14);
    }

    ctx.fillStyle = '#ffffff';
    st.snowflakes.forEach(fl => {
        fl.y = (fl.y + fl.s) % canvas.height;
        ctx.fillRect(fl.x, fl.y, 3, 3);
    });
}

function drawPineTree(x, y) {
    ctx.fillStyle = '#14532d';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 18, y + 32);
    ctx.lineTo(x + 18, y + 32);
    ctx.closePath();
    ctx.fill();
}

/***********************************************************************
 * GAME 2: COBRA CHICKEN DEFENSE
 ***********************************************************************/
let gooseState = {
    playerX: 360,
    bagels: [],
    geese: [],
    feathers: [],
    honkAlerts: [],
    cooldown: 0
};

function initGooseGame() {
    gooseState.playerX = 360;
    gooseState.bagels = [];
    gooseState.geese = [];
    gooseState.feathers = [];
    gooseState.honkAlerts = [];
    gooseState.cooldown = 0;
}

function spawnBagel() {
    if (gooseState.cooldown > 0) return;
    gooseState.bagels.push({ x: gooseState.playerX, y: 375 });
    gooseState.cooldown = 12;
    playSound('throw');
}

function updateAndDrawGoose() {
    const st = gooseState;
    if (st.cooldown > 0) st.cooldown--;

    if (keys.left) st.playerX -= 6.5;
    if (keys.right) st.playerX += 6.5;
    st.playerX = Math.max(45, Math.min(canvas.width - 45, st.playerX));

    const spawnRate = Math.max(28, 65 - Math.floor(score / 250));
    if (frameCount % spawnRate === 0) {
        const startX = 60 + Math.random() * (canvas.width - 120);
        st.geese.push({
            x: startX,
            y: -30,
            vx: (Math.random() - 0.5) * 2.4,
            vy: 1.3 + Math.min(2.2, score / 1800),
            wingPhase: Math.random() * Math.PI * 2
        });
        if (Math.random() < 0.35) playSound('honk');
    }

    ctx.fillStyle = '#bae6fd';
    ctx.fillRect(0, 0, canvas.width, 290);
    ctx.fillStyle = '#15803d';
    ctx.fillRect(0, 290, canvas.width, 160);

    for (let x = 0; x < canvas.width; x += 36) {
        ctx.fillStyle = ((x / 36) % 2 === 0) ? '#dc2626' : '#ffffff';
        ctx.fillRect(x, 412, 36, 38);
    }

    for (let i = st.bagels.length - 1; i >= 0; i--) {
        const b = st.bagels[i];
        b.y -= 8.5;

        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 9, 0, Math.PI * 2);
        ctx.stroke();

        if (b.y < -20) st.bagels.splice(i, 1);
    }

    for (let i = st.geese.length - 1; i >= 0; i--) {
        const g = st.geese[i];
        g.x += g.vx;
        g.y += g.vy;
        g.wingPhase += 0.22;

        if (g.x < 40 || g.x > canvas.width - 40) g.vx *= -1;

        drawCanadaGoose(g.x, g.y, g.wingPhase);

        let pacified = false;
        for (let j = st.bagels.length - 1; j >= 0; j--) {
            const b = st.bagels[j];
            const dist = Math.hypot(g.x - b.x, g.y - b.y);
            if (dist < 32) {
                pacified = true;
                st.bagels.splice(j, 1);
                score += 100;
                updateHUD();
                playSound('pickup');
                st.honkAlerts.push({ x: g.x, y: g.y, text: "PACIFIED! +100", timer: 28 });
                break;
            }
        }

        if (pacified) {
            st.geese.splice(i, 1);
            continue;
        }

        if (g.y > 395) {
            playSound('honk');
            playSound('crash');
            lives--;
            updateHUD();
            st.honkAlerts.push({ x: g.x, y: 380, text: "HONK!! PICNIC BREACHED!", timer: 35 });
            st.geese.splice(i, 1);
            if (lives <= 0) {
                endGame();
                return;
            }
        }
    }

    for (let i = st.honkAlerts.length - 1; i >= 0; i--) {
        const al = st.honkAlerts[i];
        al.y -= 0.8;
        al.timer--;
        ctx.fillStyle = al.text.includes('PACIFIED') ? '#fef08a' : '#f87171';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(al.text, al.x, al.y);
        if (al.timer <= 0) st.honkAlerts.splice(i, 1);
    }

    ctx.fillStyle = '#92400e';
    ctx.fillRect(st.playerX - 24, 378, 48, 30);
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(st.playerX - 26, 374, 52, 7);
    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🥯', st.playerX, 398);
}

function drawCanadaGoose(x, y, wingPhase) {
    const wingY = Math.sin(wingPhase) * 10;
    ctx.strokeStyle = '#57534e';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x - 26, y + wingY);
    ctx.quadraticCurveTo(x - 12, y - 8, x, y);
    ctx.quadraticCurveTo(x + 12, y - 8, x + 26, y + wingY);
    ctx.stroke();

    ctx.fillStyle = '#78716c';
    ctx.beginPath();
    ctx.ellipse(x, y, 14, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000000';
    ctx.fillRect(x - 4, y + 6, 8, 14);
    ctx.beginPath();
    ctx.arc(x, y + 20, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x - 5, y + 17, 10, 3);

    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x - 3, y + 20, 2, 2);
    ctx.fillRect(x + 1, y + 20, 2, 2);
}

/***********************************************************************
 * GAME 3: MAPLE SYRUP TAPPER
 ***********************************************************************/
const TAPPER_LANES_Y = [125, 245, 365];
let tapperState = {
    lane: 1,
    jugs: [],
    patrons: [],
    popups: [],
    cooldown: 0
};

function initTapperGame() {
    tapperState.lane = 1;
    tapperState.jugs = [];
    tapperState.patrons = [];
    tapperState.popups = [];
    tapperState.cooldown = 0;
}

function slideSyrupJug() {
    if (tapperState.cooldown > 0) return;
    tapperState.jugs.push({
        lane: tapperState.lane,
        x: 135
    });
    tapperState.cooldown = 14;
    playSound('throw');
}

function updateAndDrawTapper() {
    const st = tapperState;
    if (st.cooldown > 0) st.cooldown--;

    const spawnInterval = Math.max(38, 82 - Math.floor(score / 220));
    if (frameCount % spawnInterval === 0) {
        const lane = Math.floor(Math.random() * 3);
        const roles = [
            { icon: '🪓', label: 'Lumberjack', color: '#dc2626' },
            { icon: '🤠', label: 'Mountie', color: '#b91c1c' },
            { icon: '🏒', label: 'Goalie', color: '#1d4ed8' }
        ];
        const role = roles[Math.floor(Math.random() * roles.length)];
        st.patrons.push({
            lane,
            x: canvas.width - 55,
            speed: 1.1 + Math.min(1.6, score / 2000),
            role
        });
    }

    ctx.fillStyle = '#451a03';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    TAPPER_LANES_Y.forEach((y, idx) => {
        ctx.fillStyle = '#78350f';
        ctx.fillRect(20, y - 55, 52, 80);
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(72, y - 18, 16, 8);

        ctx.fillStyle = '#92400e';
        ctx.fillRect(110, y, canvas.width - 150, 22);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(110, y, canvas.width - 150, 6);

        ctx.fillStyle = (st.lane === idx) ? '#facc15' : '#a8a29e';
        ctx.font = 'bold 13px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`TAP #${idx + 1}`, 24, y - 35);
    });

    const activeY = TAPPER_LANES_Y[st.lane];
    ctx.fillStyle = '#AF3C43';
    ctx.fillRect(84, activeY - 38, 32, 38);
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🍁', 100, activeY - 12);

    for (let i = st.jugs.length - 1; i >= 0; i--) {
        const j = st.jugs[i];
        j.x += 7.5;
        const jy = TAPPER_LANES_Y[j.lane] - 22;

        ctx.fillStyle = '#d97706';
        ctx.fillRect(j.x, jy, 18, 22);
        ctx.fillStyle = '#fef3c7';
        ctx.fillRect(j.x + 4, jy + 5, 10, 8);

        if (j.x > canvas.width - 45) {
            playSound('crash');
            lives--;
            updateHUD();
            st.popups.push({ x: canvas.width - 90, y: jy, text: "SYRUP SPILLED!", timer: 30 });
            st.jugs.splice(i, 1);
            if (lives <= 0) {
                endGame();
                return;
            }
        }
    }

    for (let i = st.patrons.length - 1; i >= 0; i--) {
        const p = st.patrons[i];
        p.x -= p.speed;
        const py = TAPPER_LANES_Y[p.lane] - 34;

        ctx.fillStyle = p.role.color;
        ctx.fillRect(p.x - 16, py + 8, 32, 26);
        ctx.font = '24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(p.role.icon, p.x, py + 24);

        let served = false;
        for (let k = st.jugs.length - 1; k >= 0; k--) {
            const jug = st.jugs[k];
            if (jug.lane === p.lane && Math.abs(jug.x - p.x) < 26) {
                served = true;
                st.jugs.splice(k, 1);
                score += 150;
                updateHUD();
                playSound('pickup');
                st.popups.push({ x: p.x, y: py, text: "MERCI / THANKS! +150", timer: 25 });
                break;
            }
        }

        if (served) {
            st.patrons.splice(i, 1);
            continue;
        }

        if (p.x < 125) {
            playSound('crash');
            lives--;
            updateHUD();
            st.popups.push({ x: 165, y: py, text: "UNSERVED HOSER!", timer: 32 });
            st.patrons.splice(i, 1);
            if (lives <= 0) {
                endGame();
                return;
            }
        }
    }

    for (let i = st.popups.length - 1; i >= 0; i--) {
        const pop = st.popups[i];
        pop.y -= 0.7;
        pop.timer--;
        ctx.fillStyle = pop.text.includes('150') ? '#fde047' : '#fca5a5';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(pop.text, pop.x, pop.y);
        if (pop.timer <= 0) st.popups.splice(i, 1);
    }
}

/***********************************************************************
 * GAME 4: FLAPPY GOOSE
 ***********************************************************************/
let flappyState = {
    y: 200,
    vy: 0,
    gravity: 0.35,
    jump: -6.5,
    pipes: [],
    speed: 3.5,
    wingPhase: 0,
    bgOffset: 0
};

function initFlappyGame() {
    flappyState.y = 200;
    flappyState.vy = 0;
    flappyState.pipes = [];
    flappyState.wingPhase = 0;
    flappyState.bgOffset = 0;
}

function handleFlappyDeath() {
    playSound('crash');
    lives--;
    updateHUD();
    if (lives <= 0) {
        endGame();
    }
}

function updateAndDrawFlappy() {
    const st = flappyState;

    st.vy += st.gravity;
    st.y += st.vy;
    st.wingPhase += 0.3;

    if (st.y > canvas.height - 15 || st.y < 0) {
        handleFlappyDeath();
        return;
    }

    if (frameCount % 110 === 0) {
        const gap = 150;
        const minHeight = 50;
        const maxTop = canvas.height - gap - minHeight;
        const topHeight = minHeight + Math.random() * (maxTop - minHeight);
        st.pipes.push({
            x: canvas.width,
            topHeight: topHeight,
            bottomY: topHeight + gap,
            passed: false
        });
    }

    ctx.fillStyle = '#e0f2fe';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Repeating Parliament Hill Silhouette
    st.bgOffset = (st.bgOffset + 0.5) % 400;
    ctx.fillStyle = '#cbd5e1'; 
    for (let i = -1; i < canvas.width / 400 + 1; i++) {
        const px = i * 400 - st.bgOffset;
        const baseY = canvas.height;

        ctx.beginPath();
        ctx.moveTo(px, baseY);
        ctx.lineTo(px, baseY - 80);
        ctx.lineTo(px + 10, baseY - 120);
        ctx.lineTo(px + 40, baseY - 120);
        ctx.lineTo(px + 50, baseY - 140);
        ctx.lineTo(px + 60, baseY - 120);
        ctx.lineTo(px + 130, baseY - 120);
        ctx.lineTo(px + 150, baseY - 80);
        
        ctx.lineTo(px + 150, baseY - 160);
        ctx.lineTo(px + 160, baseY - 160);
        ctx.lineTo(px + 160, baseY - 280); 
        ctx.lineTo(px + 155, baseY - 280); 
        ctx.lineTo(px + 175, baseY - 360);
        ctx.lineTo(px + 195, baseY - 280); 
        ctx.lineTo(px + 190, baseY - 280);
        ctx.lineTo(px + 190, baseY - 160);
        ctx.lineTo(px + 200, baseY - 160);
        
        ctx.lineTo(px + 200, baseY - 80);
        ctx.lineTo(px + 220, baseY - 120);
        ctx.lineTo(px + 290, baseY - 120);
        ctx.lineTo(px + 300, baseY - 140);
        ctx.lineTo(px + 310, baseY - 120);
        ctx.lineTo(px + 340, baseY - 120);
        ctx.lineTo(px + 350, baseY - 80);
        ctx.lineTo(px + 400, baseY - 80);
        ctx.lineTo(px + 400, baseY);
        ctx.fill();

        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(px + 175, baseY - 250, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#cbd5e1'; 
    }

    for (let i = st.pipes.length - 1; i >= 0; i--) {
        const p = st.pipes[i];
        p.x -= st.speed;

        if (!p.passed && p.x + 60 < 100) {
            p.passed = true;
            score += 10;
            updateHUD();
            playSound('pickup');
        }

        const gooseBox = { x: 80, y: st.y - 12, w: 36, h: 24 }; 
        const topPipeBox = { x: p.x, y: 0, w: 60, h: p.topHeight };
        const botPipeBox = { x: p.x, y: p.bottomY, w: 60, h: canvas.height - p.bottomY };

        if (
            (gooseBox.x < topPipeBox.x + topPipeBox.w && gooseBox.x + gooseBox.w > topPipeBox.x && gooseBox.y < topPipeBox.y + topPipeBox.h && gooseBox.y + gooseBox.h > topPipeBox.y) ||
            (gooseBox.x < botPipeBox.x + botPipeBox.w && gooseBox.x + gooseBox.w > botPipeBox.x && gooseBox.y < botPipeBox.y + botPipeBox.h && gooseBox.y + gooseBox.h > botPipeBox.y)
        ) {
            handleFlappyDeath();
            return;
        }

        drawPeaceTowerPipe(p.x, 0, 60, p.topHeight, true);
        drawPeaceTowerPipe(p.x, p.bottomY, 60, canvas.height - p.bottomY, false);

        if (p.x < -60) {
            st.pipes.splice(i, 1);
        }
    }

    drawCanadaGoose(100, st.y, st.wingPhase);
}

function drawPeaceTowerPipe(x, y, w, h, inverted) {
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(x, y, w, h);

    ctx.fillStyle = '#64748b';
    ctx.fillRect(x, y, w, 4);
    ctx.fillRect(x, y + h - 4, w, 4);
    ctx.fillRect(x + w / 2 - 2, y, 4, h); 

    ctx.fillStyle = '#14b8a6';
    if (inverted) {
        ctx.fillRect(x - 4, y + h - 20, w + 8, 20);
    } else {
        ctx.fillRect(x - 4, y, w + 8, 20);
        if (h > 60) {
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.arc(x + w / 2, y + 40, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(x + w / 2, y + 40, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

function drawStaticPreview() {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#AF3C43';
    ctx.fillRect(0, 0, canvas.width, 12);
    ctx.fillRect(0, canvas.height - 12, canvas.width, 12);
}

function resetToDashboard() {
    isPlaying = false;
    switchGame('pothole');
}

/***********************************************************************
 * 6. OFFICIAL GOVERNMENT HUMOR MODALS
 ***********************************************************************/
function showOfficialModal(topic) {
    playSound('blip');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const notices = {
        cheat: {
            enT: "Access to Cheat Codes Act (R.S.C., 1985, c. U-2)",
            frT: "Loi sur l'accès aux codes de triche (L.R.C. (1985), ch. U-2)",
            enB: "Every Canadian citizen or permanent resident has the statutory right to request ↑ ↑ ↓ ↓ ← → ← → B A from the Information Commissioner. Requests must be accompanied by a medium Double-Double.",
            frB: "Tout citoyen canadien a le droit statutaire de demander ↑ ↑ ↓ ↓ ← → ← → B A au Commissaire à l'information. Toute demande doit être accompagnée d'un café deux-deux moyen."
        },
        problem: {
            enT: "Feedback & Civic Incident Report",
            frT: "Commentaires et signalement d'incident",
            enB: "Thank you for your feedback! To report a bug or suggest an idea, message @hatrickhd on Instagram.",
            frB: "Merci pour vos commentaires!"
        },
        default: {
            enT: "Official Notice",
            frT: "Avis officiel",
            enB: "This is an unofficial parody portal created by Hatrick-Dev.",
            frB: "Ceci est un portail parodique non officiel créé par Hatrick-Dev."
        }
    };

    const item = notices[topic] || notices.default;
    modalTitle.textContent = currentLang === 'en' ? item.enT : item.frT;
    modalContent.innerHTML = `<p class="leading-relaxed">${currentLang === 'en' ? item.enB : item.frB}</p>`;
    document.getElementById('gcModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('gcModal').classList.add('hidden');
    playSound('blip');
}

function handleSearch(e) {
    e.preventDefault();
    const q = document.getElementById('gcSearchInput').value.toLowerCase();
    if (q.includes('flappy')) {
        switchGame('flappy');
    } else if (q.includes('goose') || q.includes('cobra') || q.includes('bernache')) {
        switchGame('goose');
    } else if (q.includes('syrup') || q.includes('maple') || q.includes('sirop') || q.includes('tapper')) {
        switchGame('tapper');
    } else if (q.includes('pothole') || q.includes('plow') || q.includes('nid')) {
        switchGame('pothole');
    } else {
        showOfficialModal('cheat');
    }
}

window.onload = function () {
    initMusicPlayer();
    syncCabinetTexts();
    drawStaticPreview();
};