const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.btn');
const music = document.getElementById("bgMusic");

function moveNoBtn() {
sendTelegramMessage("Riya tried to click NO!");
  const padding = 60;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const yesRect = yesBtn.getBoundingClientRect();
  let newX, newY, tries = 0;

  do {
    newX = Math.random() * (window.innerWidth - btnWidth - padding);
    newY = Math.random() * (window.innerHeight - btnHeight - padding);
    tries++;
  } while (
    newX + btnWidth > yesRect.left - 20 &&
    newX < yesRect.right + 20 &&
    newY + btnHeight > yesRect.top - 20 &&
    newY < yesRect.bottom + 20 &&
    tries < 100
  );

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn);
noBtn.addEventListener('mousedown', moveNoBtn);

yesBtn.onclick = () => {
sendTelegramMessage("Riya clicked YES!");
  // Play music reliably on click
  music.muted = false;
  music.volume = 0.5;
  music.play().catch(e => console.log("Play error:", e));

  noBtn.style.display = 'none';
  document.querySelector('.container').innerHTML = `
    <h1>Yay!</h1>
    <p>You just made me the happiest person alive.</p>
    <p>Love you forever, Riya!</p>
  `;

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-pop';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = (Math.random() * 3) + 's';
    document.body.appendChild(heart);
  }
};
