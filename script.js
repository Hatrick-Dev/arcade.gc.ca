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
        game4Desc: "Navigate the capital's airspace! Flap your wings to fly between the Peace Towers without crashing.",
        formCode4: "",
        playNowText: "Launch Simulator",
        scoreHeader: "SCORE:",
        livesHeader: "STATUS:",
        insertLoonie: "INSERT LOONIE (START GAME)",
        playAgainBtn: "INSERT ANOTHER LOONIE (PLAY AGAIN)",
        actionBtn: "ACTION / SPACE",
        controlsHintPothole: "WASD or Arrow Keys to steer | Space to honk horn",
        controlsHintGoose: "Keyboard: [←/→ or A/D] Move Picnic Defender | [SPACE or ↑] Toss Fresh Bagel",
        controlsHintTapper: "Keyboard: [↑/↓ or W/S] Switch Snowy Counter | [SPACE or →] Slide Maple Syrup Jug",
        controlsHintFlappy: "WASD, Arrow Keys, Space, or Click to flap your wings",
        leaderboardTitle: "National Registry of High Scores",
        leaderboardSub: "Certified by the Auditor General of Canada",
        citizenIdLabel: "Your Citizen Handle:",
        registryFootnote: "Updated automatically as you play",
        resetRegistry: "Reset",
        didYouKnowTitle: "Statutory Gaming Guidelines",
        didYouKnowBody: "Under Section 12 of the Access to Cheat Codes Act, citizens experiencing winter road fatigue or goose intimidation may claim an immediate high-score stimulus credit.",
        claimSubsidyBtn: "Claim 500-Pt Cultural Pixel Subsidy",
        reportProblemBtn: "Feedback",
        dateModifiedLabel: "Date modified:",
        footerHeader: "Made by Hatrick-Dev",
        footerLink1: "Access to Cheat Codes Act",
        footerLink2: "Strategic Maple Syrup Reserve Audits",
        footerLink3: "Cobra Chicken Peace Treaty (1997)",
        footerLink4: "National Pothole Classification Standards",
        footerLink6: "Official Languages & 8-Bit Sound Effects Act",
        subFooter1: "Social media",
        subFooter2: "Access to Cheat Codes Act",
        subFooter3: "Terms & Conditions",
        subFooter4: "Crown Copyright",
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
        game4Desc: "Naviguez dans l'espace aérien de la capitale! Battez des ailes pour voler entre les Tours de la Paix sans vous écraser.",
        formCode4: "",
        playNowText: "Lancer le simulateur",
        scoreHeader: "POINTAGE :",
        livesHeader: "STATUT :",
        insertLoonie: "INSÉRER UN HUARD (DÉMARRER)",
        playAgainBtn: "INSÉRER UN AUTRE HUARD (REJOUER)",
        actionBtn: "ACTION / ESPACE",
        controlsHintPothole: "Clés WASD ou Flèches pour diriger | Espace pour klaxonner",
        controlsHintGoose: "Clavier : [←/→ ou A/D] Déplacer | [ESPACE ou ↑] Lancer un bagel",
        controlsHintTapper: "Clavier : [↑/↓ ou W/S] Changer de comptoir | [ESPACE ou →] Glisser une cruche",
        controlsHintFlappy: "WASD, Flèches, Espace, ou Cliquez pour battre des ailes",
        leaderboardTitle: "Registre national des meilleurs scores",
        leaderboardSub: "Certifié par le Bureau du vérificateur général",
        citizenIdLabel: "Identifiant citoyen :",
        registryFootnote: "Mis à jour en direct pendant que vous jouez",
        resetRegistry: "Réinitialiser",
        didYouKnowTitle: "Lignes directrices statutaires",
        didYouKnowBody: "En vertu de l'article 12 de la Loi sur l'accès aux codes de triche, les citoyens confrontés aux bernaches peuvent réclamer une subvention immédiate de 500 points.",
        claimSubsidyBtn: "Réclamer la subvention de 500 pts",
        reportProblemBtn: "Commentaires",
        dateModifiedLabel: "Date de modification :",
        footerHeader: "Fait par Hatrick-Dev",
        footerLink1: "Loi sur l'accès aux codes de triche",
        footerLink2: "Vérifications de la réserve stratégique de sirop d'érable",
        footerLink3: "Traité de paix des Poulets Cobras (1997)",
        footerLink4: "Normes nationales de classification des nids-de-poule",
        footerLink6: "Loi sur les langues officielles et effets sonores 8 bits",
        subFooter1: "Médias sociaux",
        subFooter2: "Loi sur l'accès aux codes de triche",
        subFooter3: "Avis",
        subFooter4: "Droit d'auteur de la Couronne",
        closeBtn: "Accuser réception et fermer"
    }
};

const gameMetadata = {
    pothole: {
        emoji: "🚜🕳️☕",
        enTitle: "Trans-Canada Snowplower",
        frTitle: "Patrouille Nids-de-poule : Édition Transcanadienne",
        enOverlayTitle: "TRANS-CANADA SNOWPLOWER",
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
        enDesc: "Navigate the capital's airspace! Flap your wings to fly between the Peace Towers without crashing.",
        frDesc: "Naviguez dans l'espace aérien de la capitale! Battez des ailes pour voler entre les Tours de la Paix sans vous écraser."
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    document.documentElement.lang = currentLang;
    document.getElementById('langToggleBtn').textContent = currentLang === 'en' ? 'Français' : 'English';
    document.getElementById('gcSearchInput').placeholder = i18n[currentLang].searchPlaceholder;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key];
        }
    });

    updateSoundUI();
    syncCabinetTexts();
    renderLeaderboard();
    playSound('blip');
}

/***********************************************************************
 * 2. SYNTHESIZED WEB AUDIO API RETRO SOUND ENGINE
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
 * 3. NATIONAL REGISTRY OF HIGH SCORES (LEADERBOARD ENGINE)
 ***********************************************************************/
const defaultLeaderboard = [
    { handle: "Gord_TR", province: "ON", game: "Pothole Patrol", score: 14200, isUser: false },
    { handle: "Celine_QC", province: "QC", game: "Maple Syrup Tapper", score: 12850, isUser: false },
    { handle: "Terry_BC", province: "BC", game: "Pothole Patrol", score: 11400, isUser: false },
    { handle: "Wayne_AB", province: "AB", game: "Cobra Chicken Defense", score: 9900, isUser: false },
    { handle: "Anne_PEI", province: "PE", game: "Maple Syrup Tapper", score: 8450, isUser: false },
    { handle: "Keanu_MB", province: "MB", game: "Cobra Chicken Defense", score: 7200, isUser: false }
];

let leaderboard = JSON.parse(JSON.stringify(defaultLeaderboard));
let highestUserSessionScore = 0;

function renderLeaderboard() {
    const container = document.getElementById('leaderboardList');
    if (!container) return; // Prevent freeze when leaderboard HTML is commented out

    leaderboard.sort((a, b) => b.score - a.score);

    container.innerHTML = leaderboard.slice(0, 8).map((entry, index) => {
        const rankBadge = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
        const rowBg = entry.isUser ? 'bg-yellow-50 border-l-4 border-[#AF3C43]' : 'bg-white';
        return `
            <div class="px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm ${rowBg}">
                <div class="flex items-center space-x-2.5">
                    <span class="font-mono font-bold w-6 text-gray-600">${rankBadge}</span>
                    <div>
                        <div class="font-bold text-gray-900 flex items-center gap-1.5">
                            <span>${escapeHtml(entry.handle)}</span>
                            <span class="text-[10px] font-mono bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded">${entry.province}</span>
                        </div>
                        <div class="text-[11px] text-gray-500">${entry.game}</div>
                    </div>
                </div>
                <div class="font-mono font-bold text-[#284162]">
                    ${entry.score.toLocaleString()} <span class="text-[10px] font-normal">pts</span>
                </div>
            </div>
        `;
    }).join('');
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
}

function recordScoreInRegistry(scoreVal) {
    if (scoreVal <= 0) return;
    if (scoreVal > highestUserSessionScore) {
        highestUserSessionScore = scoreVal;
    }

    // Safety check to prevent freeze when input handle element is commented out
    const handleElem = document.getElementById('citizenHandle');
    const handleInput = handleElem ? handleElem.value.trim() : 'Citizen_CAN';

    const gameNames = {
        pothole: "Pothole Patrol",
        goose: "Cobra Chicken Defense",
        tapper: "Maple Syrup Tapper",
        flappy: "Flappy Goose"
    };
    const gameLabel = gameNames[activeGameKey];

    const existingIndex = leaderboard.findIndex(e => e.isUser && e.game === gameLabel);
    if (existingIndex !== -1) {
        if (scoreVal > leaderboard[existingIndex].score) {
            leaderboard[existingIndex].score = scoreVal;
            leaderboard[existingIndex].handle = handleInput;
        }
    } else {
        leaderboard.push({
            handle: handleInput,
            province: currentLang === 'fr' ? 'QC' : 'CAN',
            game: gameLabel,
            score: scoreVal,
            isUser: true
        });
    }
    renderLeaderboard();
}

function resetLeaderboard() {
    leaderboard = JSON.parse(JSON.stringify(defaultLeaderboard));
    renderLeaderboard();
    playSound('blip');
}

function activateOrderInCouncilBoost() {
    playSound('pickup');
    score += 500;
    updateHUD();
    recordScoreInRegistry(score);
    showOfficialModal('subsidy');
}

/***********************************************************************
 * 4. MULTI-GAME HTML5 CANVAS ENGINE
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
    if (activeGameKey === 'goose') hintEl.textContent = i18n[currentLang].controlsHintGoose;
    if (activeGameKey === 'tapper') hintEl.textContent = i18n[currentLang].controlsHintTapper;
    if (activeGameKey === 'flappy') hintEl.textContent = i18n[currentLang].controlsHintFlappy;
}

function updateHUD() {
    document.getElementById('liveScoreDisplay').textContent = score.toLocaleString();
    document.getElementById('liveStatusDisplay').textContent = '🍁'.repeat(Math.max(0, lives)) + '🖤'.repeat(Math.max(0, 3 - lives));
}

function startCurrentGame() {
    playSound('coin');
    score = 0;
    lives = 3;
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
    recordScoreInRegistry(score);

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

    if (frameCount % 60 === 0 && score > 0) {
        recordScoreInRegistry(score);
    }

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
        ctx.
