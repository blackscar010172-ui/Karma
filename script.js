const btn = document.getElementById("confirmBtn");

// 🔊 Web Audio 경고음
function playErrorTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 160;

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.4);
}

btn.addEventListener("click", () => {
  playErrorTone();

  const error = document.createElement("div");
  error.className = "error-screen";
  error.innerHTML = `
    ACCESS DENIED<br>
    UNAUTHORIZED CREDENTIAL<br>
    SECURITY VIOLATION LOGGED
  `;
  document.body.appendChild(error);

  // 1.8초 후 Spotify 링크로 이동
  setTimeout(() => {
    window.location.href = "https://open.spotify.com/track/7xGfFoTpQ2E7fRF5lN10tr";
  }, 1800);
});
