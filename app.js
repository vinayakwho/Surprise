/**
 * Surprise Website - Multi-Experience Platform
 * Experiences: First Date 💖, Birthday 🎂, Anniversary 🥂, Apology 🥺
 * Runaway "No" button & Growing "Yes" button mechanics
 */

(function () {
  'use strict';

  /* ---------------------------------------------------------
   * High-Resolution Mascot SVG Templates
   * --------------------------------------------------------- */
  const MASCOTS = {
    // 1. DATE: Cute smiling blushing kitten with heart sticker
    date: `
      <svg class="mascot-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#FFF2DF" />
        <polygon points="20,38 32,18 42,32" fill="#E89B59" />
        <polygon points="24,35 32,23 38,32" fill="#FFA5A5" />
        <polygon points="80,38 68,18 58,32" fill="#E89B59" />
        <polygon points="76,35 68,23 62,32" fill="#FFA5A5" />
        <ellipse cx="50" cy="54" rx="36" ry="30" fill="#FBB668" />
        <circle cx="28" cy="58" r="6.5" fill="#FF839B" opacity="0.65" />
        <circle cx="72" cy="58" r="6.5" fill="#FF839B" opacity="0.65" />
        <path d="M32 50 C32 46, 40 46, 40 50" stroke="#37261F" stroke-width="3.5" stroke-linecap="round" fill="none" />
        <path d="M60 50 C60 46, 68 46, 68 50" stroke="#37261F" stroke-width="3.5" stroke-linecap="round" fill="none" />
        <ellipse cx="50" cy="55" rx="3" ry="2.2" fill="#7A4222" />
        <path d="M47 58 Q50 61 53 58" stroke="#7A4222" stroke-width="2" stroke-linecap="round" fill="none" />
        <g class="mascot-heart-badge badge-wiggle">
          <circle cx="75" cy="27" r="11" fill="#FF4E88" />
          <path d="M75 32 C73 30, 69 27, 69 24.5 C69 22.5, 70.8 21, 72.8 21 C74 21, 74.7 21.6, 75 22.2 C75.3 21.6, 76 21, 77.2 21 C79.2 21, 81 22.5, 81 24.5 C81 27, 77 30, 75 32 Z" fill="#FFF" />
        </g>
      </svg>
    `,

    // 2. BIRTHDAY: Adorable bear wearing a colorful party hat with pom-pom & party blower
    birthday: `
      <svg class="mascot-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#FEF3C7" />
        <!-- Bear Ears -->
        <circle cx="26" cy="30" r="13" fill="#D97706" />
        <circle cx="26" cy="30" r="7.5" fill="#FDE68A" />
        <circle cx="74" cy="30" r="13" fill="#D97706" />
        <circle cx="74" cy="30" r="7.5" fill="#FDE68A" />
        <!-- Head -->
        <ellipse cx="50" cy="56" rx="35" ry="30" fill="#F59E0B" />
        <!-- Snout -->
        <ellipse cx="50" cy="62" rx="14" ry="11" fill="#FEF3C7" />
        <ellipse cx="50" cy="58" rx="4.5" ry="3.2" fill="#78350F" />
        <path d="M47 62 Q50 66 53 62" stroke="#78350F" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Cheeks -->
        <circle cx="27" cy="60" r="6" fill="#F43F5E" opacity="0.6" />
        <circle cx="73" cy="60" r="6" fill="#F43F5E" opacity="0.6" />
        <!-- Joyful closed eyes -->
        <path d="M33 50 Q39 44 43 50" stroke="#78350F" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M57 50 Q61 44 67 50" stroke="#78350F" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Party Hat -->
        <g class="badge-wiggle" style="transform-origin: 50px 24px;">
          <polygon points="50,6 36,36 64,36" fill="#EF4444" />
          <polygon points="50,6 40,36 47,36" fill="#3B82F6" />
          <polygon points="50,6 53,36 60,36" fill="#10B981" />
          <!-- Hat dots -->
          <circle cx="48" cy="22" r="2.5" fill="#FBBF24" />
          <circle cx="53" cy="28" r="2" fill="#FFF" />
          <!-- Pom-pom on top -->
          <circle cx="50" cy="5" r="5" fill="#FBBF24" />
        </g>
        <!-- Confetti Star sparkles -->
        <path d="M18 52 L20 48 L22 52 L26 54 L22 56 L20 60 L18 56 L14 54 Z" fill="#F43F5E" />
        <path d="M82 48 L84 45 L86 48 L89 49 L86 50 L84 53 L82 50 L79 49 Z" fill="#3B82F6" />
      </svg>
    `,

    // 3. ANNIVERSARY: Twin cuddling bunnies with intertwined golden hearts
    anniversary: `
      <svg class="mascot-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#FFF1F2" />
        <!-- Left Bunny Ears -->
        <ellipse cx="32" cy="20" rx="6" ry="16" fill="#FFFFFF" stroke="#FECDD3" stroke-width="2" />
        <ellipse cx="32" cy="21" rx="3.5" ry="11" fill="#FFCCD5" />
        <ellipse cx="44" cy="22" rx="5.5" ry="15" fill="#FFFFFF" stroke="#FECDD3" stroke-width="2" />
        <ellipse cx="44" cy="23" rx="3" ry="10" fill="#FFCCD5" />
        <!-- Right Bunny Ears -->
        <ellipse cx="56" cy="22" rx="5.5" ry="15" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5" />
        <ellipse cx="56" cy="23" rx="3" ry="10" fill="#FEF3C7" />
        <ellipse cx="68" cy="20" rx="6" ry="16" fill="#FDE68A" stroke="#F59E0B" stroke-width="1.5" />
        <ellipse cx="68" cy="21" rx="3.5" ry="11" fill="#FEF3C7" />
        <!-- Left Bunny Face (White) -->
        <circle cx="38" cy="56" r="22" fill="#FFFFFF" stroke="#FECDD3" stroke-width="1.5" />
        <circle cx="28" cy="60" r="4" fill="#FB7185" opacity="0.6" />
        <circle cx="34" cy="54" r="2.5" fill="#374151" />
        <path d="M38 58 Q40 60 42 58" stroke="#374151" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Right Bunny Face (Golden) -->
        <circle cx="62" cy="56" r="22" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5" />
        <circle cx="72" cy="60" r="4" fill="#F43F5E" opacity="0.6" />
        <circle cx="66" cy="54" r="2.5" fill="#78350F" />
        <path d="M58 58 Q60 60 62 58" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" fill="none" />
        <!-- Intertwined Golden Halo Hearts -->
        <g class="badge-wiggle" style="transform-origin: 50px 36px;">
          <circle cx="50" cy="38" r="12" fill="#F59E0B" opacity="0.2" />
          <path d="M47 38 C45 36, 42 34, 42 31 C42 29, 43.5 28, 45.5 28 C46.8 28, 47.7 28.6, 48 29.2 C48.3 28.6, 49.2 28, 50.5 28 C52.5 28, 54 29, 54 31 C54 34, 51 36, 47 38 Z" fill="#E11D48" />
          <path d="M53 43 C51 41, 48 39, 48 36 C48 34, 49.5 33, 51.5 33 C52.8 33, 53.7 33.6, 54 34.2 C54.3 33.6, 55.2 33, 56.5 33 C58.5 33, 60 34, 60 36 C60 39, 57 41, 53 43 Z" fill="#D97706" />
        </g>
      </svg>
    `,

    // 4. APOLOGY: Puppy with giant glossy teary eyes holding a pink flower
    apology: `
      <svg class="mascot-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#F5F3FF" />
        <!-- Floppy Puppy Ears -->
        <ellipse cx="22" cy="42" rx="10" ry="20" fill="#7C3AED" transform="rotate(-15 22 42)" />
        <ellipse cx="78" cy="42" rx="10" ry="20" fill="#7C3AED" transform="rotate(15 78 42)" />
        <!-- Head -->
        <ellipse cx="50" cy="52" rx="34" ry="28" fill="#C4B5FD" />
        <!-- Snout -->
        <ellipse cx="50" cy="62" rx="15" ry="11" fill="#EDE9FE" />
        <ellipse cx="50" cy="56" rx="4.5" ry="3" fill="#4C1D95" />
        <path d="M46 62 Q50 60 54 62" stroke="#4C1D95" stroke-width="2" stroke-linecap="round" fill="none" />
        <!-- Cheeks -->
        <circle cx="28" cy="60" r="5" fill="#F472B6" opacity="0.6" />
        <circle cx="72" cy="60" r="5" fill="#F472B6" opacity="0.6" />
        <!-- Big glossy puppy eyes with catchlights -->
        <circle cx="36" cy="48" r="7" fill="#2E1065" />
        <circle cx="34" cy="46" r="2.8" fill="#FFFFFF" />
        <circle cx="38" cy="50" r="1.2" fill="#FFFFFF" />
        <circle cx="64" cy="48" r="7" fill="#2E1065" />
        <circle cx="62" cy="46" r="2.8" fill="#FFFFFF" />
        <circle cx="66" cy="50" r="1.2" fill="#FFFFFF" />
        <!-- Apology Flower in paws -->
        <g class="badge-wiggle" style="transform-origin: 50px 78px;">
          <circle cx="50" cy="78" r="5" fill="#FBBF24" />
          <circle cx="45" cy="74" r="4" fill="#F472B6" />
          <circle cx="55" cy="74" r="4" fill="#F472B6" />
          <circle cx="45" cy="82" r="4" fill="#F472B6" />
          <circle cx="55" cy="82" r="4" fill="#F472B6" />
        </g>
      </svg>
    `
  };

  /* ---------------------------------------------------------
   * Full Experience Definitions
   * --------------------------------------------------------- */
  const EXPERIENCES = {
    date: {
      type: 'date',
      themeClass: 'theme-date',
      name: 'First Date',
      tag: '✨ First Date Special',
      headlinePrefix: 'Excited for our first date..?',
      presets: [
        { label: 'First Date ☕', q: 'Excited for our first date..?' },
        { label: 'Valentine 💘', q: 'Will you be my Valentine..?' },
        { label: 'Dinner 🍕', q: 'Are you free for dinner tonight..?' },
        { label: 'Go Out 🌸', q: 'Will you go out with me..?' }
      ],
      yesInitial: { text: 'Yes', emoji: '💖' },
      noInitial: { text: 'No', emoji: '🙈' },
      yesProgress: [
        { text: 'Yes', emoji: '💖' },
        { text: 'Yes!', emoji: '🥰' },
        { text: 'YES!', emoji: '💘' },
        { text: 'YES PLEASE!', emoji: '✨' },
        { text: 'DEFINITELY YES!', emoji: '💍' },
        { text: '100% YES!', emoji: '🎉' }
      ],
      noProgress: [
        { text: 'No', emoji: '🙈' },
        { text: 'Wait No?', emoji: '👀' },
        { text: 'Too slow!', emoji: '😜' },
        { text: 'Still trying?', emoji: '🏃' },
        { text: 'Nice try!', emoji: '💨' },
        { text: 'Never!', emoji: '🙅' }
      ],
      teaseMessages: [
        'Haha, nice try!',
        'Oops, too slow! 😜',
        'Look how big Yes is getting! 🥺',
        'Resistance is futile! 💕',
        'You really thought you could click No? 😂',
        'The universe clearly wants a Yes! ✨',
        'Yes is literally taking over now! 💖',
        'Just click Yes already, cutie! 😘'
      ],
      celebration: {
        badge: '🎉💖🥰',
        title: "YAYYY! It's a date! ❤️",
        subtitle: "I knew you couldn't resist, {name}!",
        quote: "Best decision ever. Get ready for an unforgettable time together! ✨🥂",
        waMsg: "Hey {name}! I just said YES to our date! 🥰💖"
      },
      ambientEmojis: ['💖', '💕', '💗', '💓', '✨', '🌸']
    },

    birthday: {
      type: 'birthday',
      themeClass: 'theme-birthday',
      name: 'Birthday',
      tag: '🎂 Birthday Special',
      headlinePrefix: 'Ready for your birthday surprise..?',
      presets: [
        { label: 'Birthday Surprise 🎁', q: 'Ready for your birthday surprise..?' },
        { label: 'Guess the Gift 🎈', q: 'Can you guess what I got you..?' },
        { label: 'Save Cake 🎂', q: 'Will you save me a slice of cake..?' },
        { label: 'Best Year Yet ✨', q: 'Ready to make this your best year ever..?' }
      ],
      yesInitial: { text: 'Yes! 🎁', emoji: '🎉' },
      noInitial: { text: 'Not yet', emoji: '🙈' },
      yesProgress: [
        { text: 'Yes! 🎁', emoji: '🎉' },
        { text: 'YES! 🎂', emoji: '🥳' },
        { text: 'PARTY TIME!', emoji: '🎈' },
        { text: 'BRING CAKE!', emoji: '🍰' },
        { text: 'BEST BIRTHDAY!', emoji: '🌟' },
        { text: "LET'S PARTY!", emoji: '🎊' }
      ],
      noProgress: [
        { text: 'Not yet', emoji: '🙈' },
        { text: 'No birthday?', emoji: '👀' },
        { text: 'Too slow!', emoji: '😜' },
        { text: "Can't skip!", emoji: '🏃' },
        { text: 'Nice try!', emoji: '🎂' },
        { text: 'Mandatory!', emoji: '🎈' }
      ],
      teaseMessages: [
        "Haha, you can't skip your birthday! 😜",
        'No birthday blues allowed today! 🎉',
        'Look how big the celebration is getting! 🎈',
        'Cake and gifts are waiting for you! 🎂',
        'Resistance is futile, birthday star! ✨',
        'You HAVE to celebrate! 🥰',
        'Just say Yes to the surprise! 🎁'
      ],
      celebration: {
        badge: '🎂🎉🥳',
        title: 'HAPPY BIRTHDAY! 🎂🎉',
        subtitle: 'Wishing the happiest day to {name}!',
        quote: 'May this year be filled with immense joy, laughter, and all your biggest dreams coming true! ✨🎈',
        waMsg: 'Hey {name}! HAPPY BIRTHDAY! 🎂🎉 I am so ready for the celebration! 🥳'
      },
      ambientEmojis: ['🎂', '🎉', '🎈', '🎁', '✨', '🥳']
    },

    anniversary: {
      type: 'anniversary',
      themeClass: 'theme-anniversary',
      name: 'Anniversary',
      tag: '🥂 Anniversary Special',
      headlinePrefix: 'Ready for another magical year together..?',
      presets: [
        { label: 'Another Year 🥂', q: 'Ready for another magical year together..?' },
        { label: 'Still In Love 💕', q: 'Do you still love me as much as day one..?' },
        { label: 'Cutest Couple 💍', q: 'Are we the cutest couple ever..?' },
        { label: 'Forever & Always 🌹', q: 'Will you love me forever and ever..?' }
      ],
      yesInitial: { text: 'Forever Yes!', emoji: '💍' },
      noInitial: { text: 'No', emoji: '🙈' },
      yesProgress: [
        { text: 'Forever Yes!', emoji: '💍' },
        { text: 'ALWAYS YES!', emoji: '🥂' },
        { text: 'YOU & ME! 💕', emoji: '✨' },
        { text: 'SO IN LOVE!', emoji: '💖' },
        { text: 'STUCK FOREVER!', emoji: '🥰' },
        { text: 'MY EVERYTHING!', emoji: '🌹' }
      ],
      noProgress: [
        { text: 'No', emoji: '🙈' },
        { text: 'Excuse me?', emoji: '👀' },
        { text: 'No returns!', emoji: '😜' },
        { text: 'Still stuck with me!', emoji: '🏃' },
        { text: 'Nice try!', emoji: '💨' },
        { text: 'No chance!', emoji: '🙅' }
      ],
      teaseMessages: [
        'No refunds or exchanges on this relationship! 😉',
        'Look at that ring getting bigger! 💍',
        "You're stuck with me forever and you know it! 🥂",
        'Together forever, resistance is impossible! 💕',
        'Look how big our love is getting! 🥺',
        'Say Yes to forever! 💖'
      ],
      celebration: {
        badge: '🥂💍❤️',
        title: 'HAPPY ANNIVERSARY! 🥂💍',
        subtitle: "Here's to us, {name}!",
        quote: 'Loving you is the easiest and most wonderful thing in the world. Forever and always! ❤️🥂✨',
        waMsg: 'Happy Anniversary {name}! 🥂💍 Forever and always with you! ❤️'
      },
      ambientEmojis: ['🥂', '💍', '❤️', '🌹', '✨', '💖']
    },

    apology: {
      type: 'apology',
      themeClass: 'theme-apology',
      name: 'Apology',
      tag: '🥺 Sweet Apology',
      headlinePrefix: 'Will you please forgive me..?',
      presets: [
        { label: 'Please Forgive 🥺', q: 'Will you please forgive me..?' },
        { label: 'Treats & Hugs 🌸', q: 'Can I make it up to you with treats & hugs..?' },
        { label: 'Still Mad? 🧁', q: 'Are you still mad at me..?' },
        { label: 'Truce? 🕊️', q: 'Can we call a truce and cuddle..?' }
      ],
      yesInitial: { text: 'I forgive you', emoji: '🥺💖' },
      noInitial: { text: 'Still mad', emoji: '😤' },
      yesProgress: [
        { text: 'I forgive you', emoji: '🥺💖' },
        { text: 'I forgive you!', emoji: '🌸' },
        { text: 'Okay hugs!', emoji: '🫂' },
        { text: "You're forgiven!", emoji: '🧁' },
        { text: 'I love you!', emoji: '🥰' },
        { text: 'All is good!', emoji: '✨' }
      ],
      noProgress: [
        { text: 'Still mad', emoji: '😤' },
        { text: 'Still pouting?', emoji: '👀' },
        { text: 'Look at puppy eyes!', emoji: '🥺' },
        { text: 'I brought snacks!', emoji: '🍪' },
        { text: "Please don't be mad!", emoji: '🌸' },
        { text: 'Forgive me!', emoji: '🙏' }
      ],
      teaseMessages: [
        "Please don't be mad! Look at these puppy eyes! 🥺",
        'I promise I will make it up to you! 🙏',
        'I brought virtual flowers & snacks! 🌸🍪',
        'Forgiveness is growing bigger and bigger! 💕',
        'I am so sorry, you know I love you! 🥺',
        'Hugs are mandatory to break the spell! 🫂'
      ],
      celebration: {
        badge: '🥺💖🌸',
        title: 'THANK YOU SO MUCH! 🥹❤️',
        subtitle: 'You have the kindest heart, {name}!',
        quote: 'I promise to cherish you and always bring a smile to your face. Huge hugs coming your way! 🌸🫂✨',
        waMsg: 'Thank you for forgiving me {name}! 🥹❤️ I love you so much, hugs coming up! 🌸'
      },
      ambientEmojis: ['🥺', '🌸', '💖', '🫂', '✨', '🧁']
    }
  };

  /* ---------------------------------------------------------
   * State Management
   * --------------------------------------------------------- */
  let currentExperience = EXPERIENCES.date;
  let recipientName = 'Megha';
  let questionText = 'Excited for our first date..?';
  let dodgeCount = 0;
  let isSoundMuted = false;
  let isMusicPlaying = false;
  let isFullscreen = false;
  let lastDodgeTime = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  // DOM Elements
  const bodyEl = document.body;
  const creatorView = document.getElementById('creator-view');
  const previewView = document.getElementById('preview-view');
  const categoryTabs = document.querySelectorAll('.cat-tab');
  const cardBadge = document.getElementById('card-badge');
  const recipientInput = document.getElementById('recipient-name');
  const customQuestionInput = document.getElementById('custom-question');
  const presetChipsContainer = document.getElementById('preset-chips');
  const explorePillBtns = document.querySelectorAll('.pill-btn');
  const copyShareBtn = document.getElementById('copy-share-btn');
  const copyStatus = document.getElementById('copy-status');
  const backBtn = document.getElementById('back-btn');
  const displayNameHeader = document.getElementById('display-name-header');
  const displayNameBody = document.getElementById('display-name-body');
  const displayQuestionBody = document.getElementById('display-question-body');
  const mascotSlot = document.getElementById('mascot-slot');
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
  const celebrationBadge = document.getElementById('celebration-badge');
  const celebrationTitle = document.getElementById('celebration-title');
  const celebrationSubtitle = document.getElementById('celebration-subtitle');
  const celebrationQuote = document.getElementById('celebration-quote');
  const btnWhatsappShare = document.getElementById('btn-whatsapp-share');
  const btnPlayAgain = document.getElementById('btn-play-again');
  const toast = document.getElementById('toast');
  const confettiCanvas = document.getElementById('confetti-canvas');

  /* ---------------------------------------------------------
   * Experience Switcher
   * --------------------------------------------------------- */
  function switchExperience(expKey, retainCustomQuestion = false) {
    if (!EXPERIENCES[expKey]) return;
    currentExperience = EXPERIENCES[expKey];

    // 1. Update active tab
    categoryTabs.forEach((tab) => {
      const isSelected = tab.getAttribute('data-exp') === expKey;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // 2. Switch theme class on body
    bodyEl.className = currentExperience.themeClass;

    // 3. Update badge & presets
    cardBadge.textContent = currentExperience.tag;

    // 4. Update preset question chips
    presetChipsContainer.innerHTML = '';
    currentExperience.presets.forEach((item, index) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `chip ${index === 0 ? 'active' : ''}`;
      chip.textContent = item.label;
      chip.setAttribute('data-q', item.q);

      chip.addEventListener('click', () => {
        presetChipsContainer.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        customQuestionInput.value = item.q;
        questionText = item.q;
      });

      presetChipsContainer.appendChild(chip);
    });

    // 5. Update question if not retaining user-typed text
    if (!retainCustomQuestion) {
      questionText = currentExperience.presets[0].q;
      customQuestionInput.value = questionText;
    }

    // 6. Inject mascot SVG
    mascotSlot.innerHTML = MASCOTS[expKey] || MASCOTS.date;

    // 7. Update initial button labels & emojis
    btnYes.querySelector('.btn-yes-text').textContent = currentExperience.yesInitial.text;
    btnYes.querySelector('.btn-yes-emoji').textContent = currentExperience.yesInitial.emoji;
    btnNo.querySelector('.btn-no-text').textContent = currentExperience.noInitial.text;
    btnNo.querySelector('.btn-no-emoji').textContent = currentExperience.noInitial.emoji;

    // 8. Update ambient background particles
    spawnAmbientParticles();

    // 9. Reset position & scale
    resetExperience();
  }

  /* ---------------------------------------------------------
   * Web Audio API Synthesizer (Tailored to Experience)
   * --------------------------------------------------------- */
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Playful dodge sound tailored per experience
  function playBoingSound() {
    if (isSoundMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (currentExperience.type === 'birthday') {
        // Party whistle / slide
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.14);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      } else if (currentExperience.type === 'anniversary') {
        // Bell chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      } else if (currentExperience.type === 'apology') {
        // Soft harp pluck
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(380, now);
        osc.frequency.exponentialRampToValueAtTime(540, now + 0.15);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      } else {
        // Date: Cartoon boing
        osc.type = 'sine';
        const startFreq = 260 + Math.random() * 50;
        const endFreq = 620 + Math.random() * 70;
        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.12);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }

  // Celebratory victory sound chord
  function playVictorySound() {
    if (isSoundMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      let notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // default C major
      if (currentExperience.type === 'birthday') {
        // Happy celebration trumpet
        notes = [523.25, 523.25, 587.33, 523.25, 698.46, 659.25];
      } else if (currentExperience.type === 'anniversary') {
        // Romantic rich waltz chord
        notes = [440.00, 554.37, 659.25, 880.00, 1108.73];
      } else if (currentExperience.type === 'apology') {
        // Sweet reassuring harp chord
        notes = [392.00, 493.88, 587.33, 783.99, 987.77];
      }

      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.08;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = currentExperience.type === 'anniversary' ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.48);
      });
    } catch (e) {}
  }

  // Realtime procedural background melody
  let musicInterval = null;
  const melodyThemes = {
    date: [392.0, 440.0, 523.25, 587.33, 659.25, 587.33, 523.25, 440.0],
    birthday: [523.25, 523.25, 587.33, 523.25, 698.46, 659.25, 523.25, 523.25],
    anniversary: [440.0, 493.88, 554.37, 659.25, 880.0, 659.25, 554.37, 493.88],
    apology: [349.23, 392.0, 440.0, 523.25, 587.33, 523.25, 440.0, 392.0]
  };
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
            const melody = melodyThemes[currentExperience.type] || melodyThemes.date;
            const freq = melody[melodyStep % melody.length];
            melodyStep++;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.05, now);
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
    phoneWrapper.classList.toggle('fullscreen-mode', isFullscreen);
    positionNoButtonInitial();
  }

  /* ---------------------------------------------------------
   * Interactive "No" Button Evasion & "Yes" Growth Mechanics
   * --------------------------------------------------------- */
  function dodgeNoButton() {
    const now = Date.now();
    if (now - lastDodgeTime < 60) return;
    lastDodgeTime = now;

    // 1. Play sound & poof
    playBoingSound();
    createDodgePoof();

    // 2. Increment dodge count
    dodgeCount++;

    // 3. Make YES button bigger
    const newScale = 1 + Math.min(dodgeCount * 0.18, 2.8);
    btnYes.style.transform = `scale(${newScale})`;

    // Dynamic text changes for YES button based on experience
    const yesList = currentExperience.yesProgress;
    const yesIdx = Math.min(dodgeCount, yesList.length - 1);
    const yesTextEl = btnYes.querySelector('.btn-yes-text');
    const yesEmojiEl = btnYes.querySelector('.btn-yes-emoji');
    if (yesTextEl) yesTextEl.textContent = yesList[yesIdx].text;
    if (yesEmojiEl) yesEmojiEl.textContent = yesList[yesIdx].emoji;

    // Dynamic text changes for NO button based on experience
    const noList = currentExperience.noProgress;
    const noIdx = Math.min(dodgeCount, noList.length - 1);
    const noTextEl = btnNo.querySelector('.btn-no-text');
    const noEmojiEl = btnNo.querySelector('.btn-no-emoji');
    if (noTextEl) noTextEl.textContent = noList[noIdx].text;
    if (noEmojiEl) noEmojiEl.textContent = noList[noIdx].emoji;

    // Glowing shadow
    const shadowSpread = Math.min(28 + dodgeCount * 6, 70);
    const shadowOpacity = Math.min(0.42 + dodgeCount * 0.05, 0.8);
    btnYes.style.boxShadow = `0 10px ${shadowSpread}px rgba(0, 0, 0, ${shadowOpacity})`;

    // 4. Move NO button to safe spot
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

    while (attempts < 30) {
      attempts++;
      const randX = Math.floor(Math.random() * (maxX - padding)) + padding;
      const randY = Math.floor(Math.random() * (maxY - padding)) + padding;

      const candCenterX = arenaRect.left + randX + btnWidth / 2;
      const candCenterY = arenaRect.top + randY + btnHeight / 2;

      const yesCenterX = yesRect.left + yesRect.width / 2;
      const yesCenterY = yesRect.top + yesRect.height / 2;

      const distFromYes = Math.hypot(candCenterX - yesCenterX, candCenterY - yesCenterY);
      const distFromCursor = Math.hypot(candCenterX - currentMouseX, candCenterY - currentMouseY);

      const minSafeDistYes = Math.max(yesRect.width, yesRect.height) * 0.65 + 25;
      const minSafeDistCursor = 90;

      if (distFromYes > minSafeDistYes && distFromCursor > minSafeDistCursor) {
        chosenX = randX;
        chosenY = randY;
        break;
      }

      const score = distFromYes * 0.7 + distFromCursor * 0.3;
      if (score > bestScore) {
        bestScore = score;
        chosenX = randX;
        chosenY = randY;
      }
    }

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
    if (yesTextEl) yesTextEl.textContent = currentExperience.yesInitial.text;
    if (yesEmojiEl) yesEmojiEl.textContent = currentExperience.yesInitial.emoji;

    const noTextEl = btnNo.querySelector('.btn-no-text');
    const noEmojiEl = btnNo.querySelector('.btn-no-emoji');
    if (noTextEl) noTextEl.textContent = currentExperience.noInitial.text;
    if (noEmojiEl) noEmojiEl.textContent = currentExperience.noInitial.emoji;
  }

  function createDodgePoof() {
    const poof = document.createElement('span');
    poof.className = 'dodge-poof';
    const emojis = currentExperience.ambientEmojis;
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
    const list = currentExperience.teaseMessages;
    const idx = Math.min(dodgeCount - 1, list.length - 1);
    teaseMessage.textContent = list[idx];
    teaseMessage.classList.remove('pop');
    void teaseMessage.offsetWidth;
    teaseMessage.classList.add('pop');
  }

  /* Proximity detection: when cursor gets close to "No", run away! */
  function setupProximityEvasion() {
    document.addEventListener('mousemove', (e) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;

      if (!previewView.classList.contains('active')) return;
      if (celebrationOverlay.classList.contains('active')) return;

      const rect = btnNo.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
      const evasionRadius = 85;

      if (dist < evasionRadius) {
        dodgeNoButton();
      }
    });

    btnNo.addEventListener('mouseenter', dodgeNoButton);
    btnNo.addEventListener('mouseover', dodgeNoButton);
    btnNo.addEventListener('pointerover', dodgeNoButton);

    btnNo.addEventListener('touchstart', (e) => {
      e.preventDefault();
      dodgeNoButton();
    }, { passive: false });

    btnNo.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      dodgeNoButton();
    });

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

    const cel = currentExperience.celebration;
    celebrateName.textContent = recipientName;
    celebrationBadge.textContent = cel.badge;
    celebrationTitle.textContent = cel.title;
    celebrationSubtitle.innerHTML = cel.subtitle.replace('{name}', `<span class="highlight-name">${recipientName}</span>`);
    celebrationQuote.textContent = cel.quote;

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
    btnYes.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.25)';
    teaseMessage.textContent = currentExperience.teaseMessages[0];
    teaseMessage.classList.remove('pop');

    positionNoButtonInitial();
  }

  /* ---------------------------------------------------------
   * Fullscreen Confetti Particle System
   * --------------------------------------------------------- */
  let confettiAnimId = null;
  let particles = [];

  function startConfetti() {
    const canvas = confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles = [];
    let colors = ['#e61e6e', '#f43f5e', '#fb7185', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
    if (currentExperience.type === 'birthday') {
      colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    } else if (currentExperience.type === 'anniversary') {
      colors = ['#d97706', '#f59e0b', '#f43f5e', '#fbbf24', '#ffffff', '#e11d48'];
    } else if (currentExperience.type === 'apology') {
      colors = ['#8b5cf6', '#ec4899', '#a78bfa', '#f472b6', '#c084fc', '#fde047'];
    }

    const totalParticles = 150;
    const particleEmojis = currentExperience.ambientEmojis;

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
        isEmoji: Math.random() > 0.65,
        emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        opacity: 1
      });
    }

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.vx *= 0.985;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.isEmoji) {
          ctx.font = '16px serif';
          ctx.fillText(p.emoji, -8, 8);
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        ctx.restore();

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
    url.searchParams.set('type', currentExperience.type);
    url.searchParams.set('name', recipientName);
    url.searchParams.set('q', questionText);
    return url.toString();
  }

  function copyShareLink() {
    const shareUrl = generateShareUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('Link copied! Send it to them 💌');
        copyStatus.textContent = 'Link copied to clipboard! ✅';
      }).catch(() => fallbackCopy(shareUrl));
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
    const waText = currentExperience.celebration.waMsg.replace('{name}', recipientName);
    const msg = encodeURIComponent(`${waText}\nCheck it out here: ${generateShareUrl()}`);
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
   * Background Ambient Floating Particles
   * --------------------------------------------------------- */
  function spawnAmbientParticles() {
    const container = document.getElementById('ambient-bg');
    if (!container) return;
    container.innerHTML = '';

    const emojis = currentExperience.ambientEmojis;
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'floating-heart-particle';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${Math.random() * 98}%`;
      el.style.animationDelay = `${Math.random() * 10}s`;
      el.style.animationDuration = `${9 + Math.random() * 8}s`;
      el.style.fontSize = `${16 + Math.random() * 18}px`;
      container.appendChild(el);
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

    resetExperience();

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
    // 1. Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    let initialType = 'date';

    if (urlParams.has('type') && EXPERIENCES[urlParams.get('type')]) {
      initialType = urlParams.get('type');
    }
    if (urlParams.has('name')) {
      recipientName = urlParams.get('name').slice(0, 30);
      recipientInput.value = recipientName;
    }
    if (urlParams.has('q')) {
      questionText = urlParams.get('q').slice(0, 80);
      customQuestionInput.value = questionText;
    }

    // 2. Initialize experience
    switchExperience(initialType, urlParams.has('q'));

    // If name parameter was provided, jump straight into preview
    if (urlParams.has('name')) {
      updatePreviewUI();
      creatorView.classList.remove('active');
      previewView.classList.add('active');
      setTimeout(resetExperience, 100);
    }

    // 3. Category Tab Switcher
    categoryTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const expType = tab.getAttribute('data-exp');
        switchExperience(expType, false);
      });
    });

    // 4. Explore Footer Pill Buttons
    explorePillBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expType = btn.getAttribute('data-exp');
        switchExperience(expType, false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // 5. Form inputs live sync
    recipientInput.addEventListener('input', (e) => {
      recipientName = e.target.value.trim() || 'Megha';
    });

    customQuestionInput.addEventListener('input', (e) => {
      questionText = e.target.value.trim() || currentExperience.headlinePrefix;
    });

    // 6. Button Actions
    copyShareBtn.addEventListener('click', copyShareLink);
    backBtn.addEventListener('click', goBackToCreator);
    btnYes.addEventListener('click', handleYesClick);
    btnPlayAgain.addEventListener('click', resetExperience);
    btnWhatsappShare.addEventListener('click', sendWhatsAppConfirmation);

    // 7. Media Bar Controls
    btnMusicToggle.addEventListener('click', toggleMusic);
    btnSoundToggle.addEventListener('click', toggleSound);
    btnExpandToggle.addEventListener('click', toggleFullscreen);

    // 8. Proximity & Dodge Setup
    setupProximityEvasion();

    // 9. Window resize adjustments
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
