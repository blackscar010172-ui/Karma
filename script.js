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

  // 기존 iframe/동적 요소 제거
  document.querySelectorAll('iframe').forEach(f => f.remove());

  const error = document.createElement("div");
  error.className = "error-screen";
  error.innerHTML = `
    ACCESS DENIED<br>
    UNAUTHORIZED CREDENTIAL<br>
    SECURITY VIOLATION LOGGED
  `;
  document.body.appendChild(error);

  // 1.8초 후 YouTube 영상 페이지로 이동
  setTimeout(() => {
    window.location.href = "https://youtu.be/g7wCr-IOpqY?si=6ftxZIc4iLxZlvPo";
  }, 1800);
});
