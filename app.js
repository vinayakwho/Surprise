/**
 * HeartCraft Interactive Date Proposal
 * Runaway "No" button & Growing "Yes" button mechanics
 */

(function () {
  'use strict';

  // State
  let recipientName = 'Megha';
  let questionText = 'Excited for our first date..?';
  let dodgeCount = 0;
  let isSoundMuted = false;
  let isMusicPlaying = false;
  let isFullscreen = false;
  let lastDodgeTime = 0;

  // DOM Elements
  const creatorView = document.getElementById('creator-view');
  const previewView = document.getElementById('preview-view');
  const recipientInput = document.getElementById('recipient-name');
  const customQuestionInput = document.getElementById('custom-question');
  const presetChips = document.querySelectorAll('.chip');
  const seePreviewBtn = document.getElementById('see-preview-btn');
  const copyShareBtn = document.getElementById('copy-share-btn');
  const copyStatus = document.getElementById('copy-status');
  const backBtn = document.getElementById('back-btn');
  const displayNameHeader = document.getElementById('display-name-header');
  const displayNameBody = document.getElementById('display-name-body');
  const displayQuestionBody = document.getElementById('display-question-body');
  const phoneWrapper = document.getElementById('phone-wrapper');
  const arena = document.getElementById('interactive-arena');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const teaseMessage = document.getElementById('tease-message');
  const btnMusicToggle = document.getElementById('btn-music-toggle');
  const btnSoundToggle = document.getElementById('btn-sound-toggle');
  const btnExpandToggle = document.getElementById('btn-expand-toggle');
  const celebrationOverlay = document.getElementById('celebration-overlay');
  const celebrateName = document.getElementById('celebrate-name');
  const btnWhatsappShare = document.getElementById('btn-whatsapp-share');
  const btnPlayAgain = document.getElementById('btn-play-again');
  const toast = document.getElementById('toast');
  const confettiCanvas = document.getElementById('confetti-canvas');

  // Progressive tease messages matching the screenshot vibe
  const teaseMessages = [
    'Haha, nice try!',
    'Oops, too slow! 😜',
    'Look how big Yes is getting! 🥺',
    'Resistance is futile! 💕',
    'You really thought you could click No? 😂',
    'The universe clearly wants a Yes! ✨',
    'Yes is literally taking over now! 💖',
    'Are you sure? Just look at Yes! 🥰',
    'No is not an option today! 🌸',
    'Just click Yes already, cutie! 😘'
  ];

  /* ---------------------------------------------------------
   * Web Audio API Synthesizer (Zero External Dependencies)
   * --------------------------------------------------------- */
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Playful boing/whoosh sound when "No" runs away
  function playBoingSound() {
    if (isSoundMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Pitch slide up for cartoon boing
      const startFreq = 260 + Math.random() * 60;
      const endFreq = 620 + Math.random() * 80;
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.12);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // Sweet victory arpeggio chord when "Yes" is clicked
  function playVictorySound() {
    if (isSoundMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.08;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.46);
      });
    } catch (e) {}
  }

  // Background romantic lo-fi arpeggio music
  let musicInterval = null;
  const romanticMelody = [
    392.00, 440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00,
    349.23, 392.00, 440.00, 523.25, 587.33, 523.25, 440.00, 392.00
  ];
  let melodyStep = 0;

  function toggleMusic() {
    const ctx = getAudioContext();
    isMusicPlaying = !isMusicPlaying;

    const pauseIcon = btnMusicToggle.querySelector('.icon-pause');
    const playIcon = btnMusicToggle.querySelector('.icon-play');

    if (isMusicPlaying) {
      pauseIcon.style.display = 'block';
      playIcon.style.display = 'none';

      if (!musicInterval && ctx) {
        musicInterval = setInterval(() => {
          if (!isMusicPlaying || isSoundMuted) return;
          try {
            const freq = romanticMelody[melodyStep % romanticMelody.length];
            melodyStep++;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.36);
          } catch (err) {}
        }, 360);
      }
    } else {
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';
      if (musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
      }
    }
  }

  function toggleSound() {
    isSoundMuted = !isSoundMuted;
    const volOn = btnSoundToggle.querySelector('.icon-volume-on');
    const volOff = btnSoundToggle.querySelector('.icon-volume-off');

    if (isSoundMuted) {
      volOn.style.display = 'none';
      volOff.style.display = 'block';
    } else {
      volOn.style.display = 'block';
      volOff.style.display = 'none';
      getAudioContext();
    }
  }

  function toggleFullscreen() {
    isFullscreen = !isFullscreen;
    if (isFullscreen) {
      phoneWrapper.classList.add('fullscreen-mode');
    } else {
      phoneWrapper.classList.remove('fullscreen-mode');
    }
    // Re-check positioning of No button after layout change
    positionNoButtonInitial();
  }

  /* ---------------------------------------------------------
   * Interactive "No" Button Evasion & "Yes" Growth Mechanics
   * --------------------------------------------------------- */
  let currentMouseX = 0;
  let currentMouseY = 0;

  // Progressive playful labels for Yes & No buttons
  const yesProgress = [
    { text: 'Yes', emoji: '💖' },
    { text: 'Yes', emoji: '💖' },
    { text: 'Yes!', emoji: '🥰' },
    { text: 'YES!', emoji: '💘' },
    { text: 'YES PLEASE!', emoji: '✨' },
    { text: 'DEFINITELY YES!', emoji: '💍' },
    { text: '100% YES!', emoji: '🎉' }
  ];

  const noProgress = [
    { text: 'No', emoji: '🙈' },
    { text: 'No', emoji: '🙈' },
    { text: 'Wait No?', emoji: '👀' },
    { text: 'Too slow!', emoji: '😜' },
    { text: 'Still trying?', emoji: '🏃' },
    { text: 'Nice try!', emoji: '💨' },
    { text: 'Never!', emoji: '🙅' }
  ];

  function dodgeNoButton() {
    const now = Date.now();
    // Debounce rapid fire events within 60ms to allow smooth animations
    if (now - lastDodgeTime < 60) return;
    lastDodgeTime = now;

    // 1. Play sound & create playful poof animation at old position
    playBoingSound();
    createDodgePoof();

    // 2. Increment dodge count
    dodgeCount++;

    // 3. Make YES button bigger every time cursor moves to NO button
    // Smooth compounding scale: grows noticeably each time
    const newScale = 1 + Math.min(dodgeCount * 0.18, 2.8);
    btnYes.style.transform = `scale(${newScale})`;

    // Dynamic text changes as Yes grows
    const yesIdx = Math.min(dodgeCount, yesProgress.length - 1);
    const yesTextEl = btnYes.querySelector('.btn-yes-text');
    const yesEmojiEl = btnYes.querySelector('.btn-yes-emoji');
    if (yesTextEl) yesTextEl.textContent = yesProgress[yesIdx].text;
    if (yesEmojiEl) yesEmojiEl.textContent = yesProgress[yesIdx].emoji;

    // Dynamic text changes for No button
    const noIdx = Math.min(dodgeCount, noProgress.length - 1);
    const noTextEl = btnNo.querySelector('.btn-no-text');
    const noEmojiEl = btnNo.querySelector('.btn-no-emoji');
    if (noTextEl) noTextEl.textContent = noProgress[noIdx].text;
    if (noEmojiEl) noEmojiEl.textContent = noProgress[noIdx].emoji;

    // Add extra glowing shadow as Yes grows
    const shadowSpread = Math.min(28 + dodgeCount * 6, 70);
    const shadowOpacity = Math.min(0.42 + dodgeCount * 0.05, 0.8);
    btnYes.style.boxShadow = `0 10px ${shadowSpread}px rgba(230, 30, 110, ${shadowOpacity})`;

    // 4. Move NO button to a random safe position inside arena
    repositionNoButton();

    // 5. Update tease text
    updateTeaseMessage();
  }

  function repositionNoButton() {
    btnNo.classList.add('dodged');

    const arenaRect = arena.getBoundingClientRect();
    const yesRect = btnYes.getBoundingClientRect();
    const btnWidth = btnNo.offsetWidth || 95;
    const btnHeight = btnNo.offsetHeight || 48;

    const padding = 10;
    const maxX = Math.max(10, arenaRect.width - btnWidth - padding);
    const maxY = Math.max(10, arenaRect.height - btnHeight - padding);

    let chosenX = 10;
    let chosenY = 10;
    let attempts = 0;
    let bestScore = -1;

    // Try finding a coordinate that doesn't overlap Yes AND is far from current cursor
    while (attempts < 30) {
      attempts++;
      const randX = Math.floor(Math.random() * (maxX - padding)) + padding;
      const randY = Math.floor(Math.random() * (maxY - padding)) + padding;

      // Approximate candidate center in viewport coordinates
      const candCenterX = arenaRect.left + randX + btnWidth / 2;
      const candCenterY = arenaRect.top + randY + btnHeight / 2;

      const yesCenterX = yesRect.left + yesRect.width / 2;
      const yesCenterY = yesRect.top + yesRect.height / 2;

      const distFromYes = Math.hypot(candCenterX - yesCenterX, candCenterY - yesCenterY);
      const distFromCursor = Math.hypot(candCenterX - currentMouseX, candCenterY - currentMouseY);

      const minSafeDistYes = Math.max(yesRect.width, yesRect.height) * 0.65 + 25;
      const minSafeDistCursor = 90;

      // Both conditions satisfied: safe from Yes & safe from cursor
      if (distFromYes > minSafeDistYes && distFromCursor > minSafeDistCursor) {
        chosenX = randX;
        chosenY = randY;
        break;
      }

      // Track candidate with greatest combined distance
      const score = distFromYes * 0.7 + distFromCursor * 0.3;
      if (score > bestScore) {
        bestScore = score;
        chosenX = randX;
        chosenY = randY;
      }
    }

    // Apply playful random slight tilt (-14deg to +14deg)
    const tilt = (Math.random() * 28 - 14).toFixed(1);
    btnNo.style.left = `${chosenX}px`;
    btnNo.style.top = `${chosenY}px`;
    btnNo.style.transform = `rotate(${tilt}deg)`;
  }

  function positionNoButtonInitial() {
    btnNo.classList.remove('dodged');
    btnNo.style.left = '';
    btnNo.style.top = '';
    btnNo.style.transform = '';

    const yesTextEl = btnYes.querySelector('.btn-yes-text');
    const yesEmojiEl = btnYes.querySelector('.btn-yes-emoji');
    if (yesTextEl) yesTextEl.textContent = 'Yes';
    if (yesEmojiEl) yesEmojiEl.textContent = '💖';

    const noTextEl = btnNo.querySelector('.btn-no-text');
    const noEmojiEl = btnNo.querySelector('.btn-no-emoji');
    if (noTextEl) noTextEl.textContent = 'No';
    if (noEmojiEl) noEmojiEl.textContent = '🙈';
  }

  function createDodgePoof() {
    const poof = document.createElement('span');
    poof.className = 'dodge-poof';
    const emojis = ['💨', '✨', '💦', '🙈', '🌸'];
    poof.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const rect = btnNo.getBoundingClientRect();
    const arenaRect = arena.getBoundingClientRect();

    const left = rect.left - arenaRect.left + rect.width / 2 - 10;
    const top = rect.top - arenaRect.top + rect.height / 2 - 10;

    poof.style.left = `${left}px`;
    poof.style.top = `${top}px`;
    arena.appendChild(poof);

    setTimeout(() => {
      if (poof.parentNode) poof.parentNode.removeChild(poof);
    }, 550);
  }

  function updateTeaseMessage() {
    const idx = Math.min(dodgeCount - 1, teaseMessages.length - 1);
    teaseMessage.textContent = teaseMessages[idx];
    teaseMessage.classList.remove('pop');
    void teaseMessage.offsetWidth; // trigger reflow
    teaseMessage.classList.add('pop');
  }

  /* Proximity detection: when cursor gets close to "No", run away! */
  function setupProximityEvasion() {
    // 1. Mouse movement tracking near "No" button
    document.addEventListener('mousemove', (e) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;

      if (!previewView.classList.contains('active')) return;
      if (celebrationOverlay.classList.contains('active')) return;

      const rect = btnNo.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
      // Evasion trigger threshold radius: 85px
      const evasionRadius = 85;

      if (dist < evasionRadius) {
        dodgeNoButton();
      }
    });

    // 2. Direct hover/enter listeners
    btnNo.addEventListener('mouseenter', dodgeNoButton);
    btnNo.addEventListener('mouseover', dodgeNoButton);
    btnNo.addEventListener('pointerover', dodgeNoButton);

    // 3. Mobile touch events: if user tries to touch "No", it dodges before tap registers
    btnNo.addEventListener('touchstart', (e) => {
      e.preventDefault();
      dodgeNoButton();
    }, { passive: false });

    btnNo.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      dodgeNoButton();
    });

    // 4. In the impossible event No is clicked:
    btnNo.addEventListener('click', (e) => {
      e.preventDefault();
      dodgeNoButton();
    });
  }

  /* ---------------------------------------------------------
   * Victory & Celebration Handling
   * --------------------------------------------------------- */
  function handleYesClick() {
    playVictorySound();
    celebrateName.textContent = recipientName;
    celebrationOverlay.classList.add('active');
    celebrationOverlay.setAttribute('aria-hidden', 'false');

    startConfetti();
  }

  function resetExperience() {
    celebrationOverlay.classList.remove('active');
    celebrationOverlay.setAttribute('aria-hidden', 'true');
    stopConfetti();

    dodgeCount = 0;
    btnYes.style.transform = 'scale(1)';
    btnYes.style.boxShadow = '0 10px 28px rgba(230, 30, 110, 0.42)';
    teaseMessage.textContent = 'Haha, nice try!';
    teaseMessage.classList.remove('pop');

    positionNoButtonInitial();
  }

  /* ---------------------------------------------------------
   * Fullscreen Confetti Particle System (Canvas Based)
   * --------------------------------------------------------- */
  let confettiAnimId = null;
  let particles = [];

  function startConfetti() {
    const canvas = confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = [];
    const colors = ['#e61e6e', '#f43f5e', '#fb7185', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
    const totalParticles = 140;

    for (let i = 0; i < totalParticles; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() * 80 - 40),
        y: canvas.height / 2 + (Math.random() * 80 - 40),
        w: Math.random() * 10 + 6,
        h: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 18 - 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        isHeart: Math.random() > 0.65,
        opacity: 1
      });
    }

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // gravity
        p.vx *= 0.985; // drag
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.isHeart) {
          ctx.font = '16px serif';
          ctx.fillText('❤️', -8, 8);
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        ctx.restore();

        // wrap or respawn at top
        if (p.y > canvas.height + 20) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
          p.vy = Math.random() * 4 + 2;
        }
      });

      confettiAnimId = requestAnimationFrame(renderConfetti);
    }

    if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    renderConfetti();
  }

  function stopConfetti() {
    if (confettiAnimId) {
      cancelAnimationFrame(confettiAnimId);
      confettiAnimId = null;
    }
    const canvas = confettiCanvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  /* ---------------------------------------------------------
   * Shareable Link & WhatsApp Integration
   * --------------------------------------------------------- */
  function generateShareUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('name', recipientName);
    url.searchParams.set('q', questionText);
    return url.toString();
  }

  function copyShareLink() {
    const shareUrl = generateShareUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('Link copied! Send it to your crush 💌');
        copyStatus.textContent = 'Link copied to clipboard! ✅';
      }).catch(() => {
        fallbackCopy(shareUrl);
      });
    } else {
      fallbackCopy(shareUrl);
    }
  }

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('Link copied to clipboard! 💌');
    copyStatus.textContent = 'Link copied to clipboard! ✅';
  }

  function sendWhatsAppConfirmation() {
    const msg = encodeURIComponent(`Hey ${recipientName}! I just said YES to our date! 🥰💖\nCheck this out: ${generateShareUrl()}`);
    const waUrl = `https://api.whatsapp.com/send?text=${msg}`;
    window.open(waUrl, '_blank');
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  /* ---------------------------------------------------------
   * Background Floating Hearts Decoration
   * --------------------------------------------------------- */
  function spawnAmbientHearts() {
    const container = document.getElementById('ambient-bg');
    if (!container) return;

    const heartEmojis = ['💖', '💕', '💗', '💓', '✨', '🌸'];
    for (let i = 0; i < 16; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart-particle';
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = `${Math.random() * 98}%`;
      heart.style.animationDelay = `${Math.random() * 10}s`;
      heart.style.animationDuration = `${9 + Math.random() * 8}s`;
      heart.style.fontSize = `${16 + Math.random() * 18}px`;
      container.appendChild(heart);
    }
  }

  /* ---------------------------------------------------------
   * View Navigation
   * --------------------------------------------------------- */
  window.startPreview = function () {
    const nameVal = recipientInput.value.trim();
    if (nameVal) recipientName = nameVal;

    const customQ = customQuestionInput.value.trim();
    if (customQ) questionText = customQ;

    updatePreviewUI();
    creatorView.classList.remove('active');
    previewView.classList.add('active');

    // Reset dodge & position No
    resetExperience();

    // Start melody softly if user prefers
    if (!isMusicPlaying) {
      toggleMusic();
    }
  };

  function goBackToCreator() {
    previewView.classList.remove('active');
    creatorView.classList.add('active');
    resetExperience();
  }

  function updatePreviewUI() {
    displayNameHeader.textContent = recipientName;
    displayNameBody.textContent = recipientName;
    displayQuestionBody.textContent = questionText;
  }

  /* ---------------------------------------------------------
   * Initialization & Event Listeners
   * --------------------------------------------------------- */
  function init() {
    // 1. Ambient hearts
    spawnAmbientHearts();

    // 2. Parse URL parameters for direct recipient links
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('name')) {
      recipientName = urlParams.get('name').slice(0, 30);
      recipientInput.value = recipientName;
    }
    if (urlParams.has('q')) {
      questionText = urlParams.get('q').slice(0, 70);
      customQuestionInput.value = questionText;
    }

    // If query params are present, jump directly to the preview experience!
    if (urlParams.has('name')) {
      updatePreviewUI();
      creatorView.classList.remove('active');
      previewView.classList.add('active');
      setTimeout(resetExperience, 100);
    }

    // 3. Preset chips selection
    presetChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        presetChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const q = chip.getAttribute('data-q');
        customQuestionInput.value = q;
        questionText = q;
      });
    });

    // 4. Form inputs live sync
    recipientInput.addEventListener('input', (e) => {
      recipientName = e.target.value.trim() || 'Megha';
    });

    customQuestionInput.addEventListener('input', (e) => {
      questionText = e.target.value.trim() || 'Excited for our first date..?';
    });

    // 5. Button Actions
    copyShareBtn.addEventListener('click', copyShareLink);
    backBtn.addEventListener('click', goBackToCreator);
    btnYes.addEventListener('click', handleYesClick);
    btnPlayAgain.addEventListener('click', resetExperience);
    btnWhatsappShare.addEventListener('click', sendWhatsAppConfirmation);

    // 6. Media Bar Controls
    btnMusicToggle.addEventListener('click', toggleMusic);
    btnSoundToggle.addEventListener('click', toggleSound);
    btnExpandToggle.addEventListener('click', toggleFullscreen);

    // 7. Proximity & Dodge Setup
    setupProximityEvasion();

    // 8. Window resize confetti adjustments
    window.addEventListener('resize', () => {
      if (confettiCanvas && celebrationOverlay.classList.contains('active')) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
