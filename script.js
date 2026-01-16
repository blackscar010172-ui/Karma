const btn = document.getElementById("confirmBtn");

// Web Audio 경고음
function playErrorTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 170;

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.4);
}

btn.addEventListener("click", () => {
  // 🔴 즉시 에러음
  playErrorTone();

  // 🔴 즉시 에러 화면
  const error = document.createElement("div");
  error.className = "error-screen";
  error.innerHTML = `
    ACCESS DENIED<br>
    INVALID CREDENTIAL<br><br>
    SECURITY VIOLATION
  `;
  document.body.appendChild(error);

  // ⛔ 짧은 정적 후 종료
  setTimeout(() => {
    location.reload();
  }, 800);
});
