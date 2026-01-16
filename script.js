const btn = document.getElementById("confirmBtn");
const doc = document.getElementById("document");

// Web Audio 경고음
function playErrorTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 170;

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.6);
}

btn.addEventListener("click", () => {
  btn.textContent = "VERIFYING...";
  btn.disabled = true;

  playErrorTone();

  // 문서 흔들림
  setTimeout(() => {
    doc.classList.add("glitch");
  }, 400);

  // 🔴 에러 화면 덮기
  setTimeout(() => {
    const error = document.createElement("div");
    error.className = "error-screen";

    let text = "";
    for (let i = 0; i < 40; i++) {
      text +=
        "ERROR 403 :: UNAUTHORIZED ACCESS DETECTED<br>" +
        "SECURITY VIOLATION LOGGED<br>" +
        "CREDENTIAL STATUS : EXPIRED<br><br>";
    }

    error.innerHTML = text;
    document.body.appendChild(error);
  }, 1200);
});
