const checkbox = document.getElementById('checkbox-btn');
const captchaBox = document.getElementById('step-checkbox');
const captchaModal = document.getElementById('captcha-modal');
const grid = document.getElementById('grid');
const verifyBtn = document.getElementById('verify-btn');
const headerTitle = document.getElementById('instruction-text');

let currentRound = 0;
let selectedTiles = new Set();

const TRAFFIC_LIGHT_URL = 'n.jpg';
const VALENTINE_IMAGES = ['S.png','sanning.jpg','n.jpg'];

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
  setupGrid(TRAFFIC_LIGHT_URL, true);
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
      tile.style.backgroundImage = `url('${source[i % source.length]}')`;
      tile.style.backgroundSize = 'cover';
      tile.style.backgroundPosition = 'center';
    }

    tile.addEventListener('click', () => {
      tile.classList.toggle('selected');
      selectedTiles.size ? verifyBtn.disabled=false : verifyBtn.disabled=true;
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
