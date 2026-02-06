const checkbox = document.getElementById('checkbox-btn');
const captchaBox = document.getElementById('step-checkbox');
const captchaModal = document.getElementById('captcha-modal');
const grid = document.getElementById('grid');
const verifyBtn = document.getElementById('verify-btn');
const headerTitle = document.getElementById('instruction-text');

let currentRound = 0;
let selectedTiles = new Set();

// Ensure these filenames match your local folder exactly
const FAKE_IMAGE = '164538803_291629262320699_4327235140465937645_n.jpg'; 
const VALENTINE_IMAGES = [
  'IMG_8648.jpg', 
  '18839458_1532322660131907_3453999161975024742_o.jpg', 
  'sanning.jpg'
];

checkbox.addEventListener('click', () => {
  if (currentRound !== 0) return;
  checkbox.classList.add('loading');
  setTimeout(() => {
    captchaBox.classList.add('hidden');
    captchaModal.classList.remove('hidden');
    startRound1();
  }, 1000);
});

function startRound1() {
  currentRound = 1;
  headerTitle.innerText = 'traffic lights';
  setupGrid(FAKE_IMAGE, true);
}

function startRound2() {
  currentRound = 2;
  captchaModal.classList.add('valentine-mode');
  headerTitle.innerText = 'your valentine';
  setupGrid(VALENTINE_IMAGES, false);
}

function setupGrid(source, sliced) {
  grid.innerHTML = '';
  selectedTiles.clear();
  verifyBtn.disabled = true;

  for (let i = 0; i < 9; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';

    if (sliced) {
      const col = i % 3;
      const row = Math.floor(i / 3);
      tile.style.backgroundImage = `url('${source}')`;
      tile.style.backgroundSize = '300% 300%';
      tile.style.backgroundPosition = `${col * 33.33}% ${row * 33.33}%`;
    } else {
      // Logic for personal photos
      const imgPath = Array.isArray(source) ? source[i % source.length] : source;
      tile.style.backgroundImage = `url('${imgPath}')`;
      tile.style.backgroundSize = 'cover';
      tile.style.backgroundPosition = 'center';
    }

    tile.addEventListener('click', () => {
      if (tile.classList.contains('selected')) {
        tile.classList.remove('selected');
        selectedTiles.delete(i);
      } else {
        tile.classList.add('selected');
        selectedTiles.add(i);
      }
      verifyBtn.disabled = selectedTiles.size === 0;
    });

    grid.appendChild(tile);
  }
}

verifyBtn.addEventListener('click', () => {
  if (currentRound === 1) {
    startRound2();
  } else {
    captchaModal.classList.add('hidden');
    document.getElementById('success-screen').classList.remove('hidden');
  }
});
