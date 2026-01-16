const btn = document.getElementById("confirmBtn");

// 🔊 Web Audio 경고음
function playErrorTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 150;

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.8);
}

btn.addEventListener("click", () => {
  playErrorTone();

  // 🔴 1단계: 에러 로그 화면 (유지됨)
  const error = document.createElement("div");
  error.className = "error-screen";
  error.innerHTML = `
    ERROR 403 :: UNAUTHORIZED ACCESS DETECTED<br>
    SECURITY VIOLATION LOGGED<br>
    CREDENTIAL STATUS : EXPIRED<br><br>
    ERROR 403 :: UNAUTHORIZED ACCESS DETECTED<br>
    SECURITY VIOLATION LOGGED<br>
    CREDENTIAL STATUS : EXPIRED<br><br>
    ERROR 403 :: UNAUTHORIZED ACCESS DETECTED<br>
    SECURITY VIOLATION LOGGED<br>
    CREDENTIAL STATUS : EXPIRED
  `;
  document.body.appendChild(error);

  // 🔴 2단계: 이름을 위에 덮기
  setTimeout(() => {
    const name = document.createElement("div");
    name.className = "name-overlay";
    name.textContent = "MIKHAIL";
    document.body.appendChild(name);
  }, 700);

  // 💀 3단계: 이름 사라진 뒤 사이트 이탈
  setTimeout(() => {
    location.replace("about:blank");
  }, 2600);
});
