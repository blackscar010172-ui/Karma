const btn = document.getElementById("confirmBtn");

// 🔊 Web Audio 경고음
function playErrorTone() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 160;

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.5);
}

btn.addEventListener("click", () => {
  playErrorTone();

  // 🔴 1단계: 즉시 에러 화면
  const error = document.createElement("div");
  error.className = "error-screen";
  error.innerHTML = `
    ACCESS DENIED<br>
    SECURITY VIOLATION<br><br>
    IDENTIFICATION FAILURE
  `;
  document.body.appendChild(error);

  // 🔴 2단계: 이름 등장
  setTimeout(() => {
    error.innerHTML = `
      <div id="name" style="
        display:flex;
        align-items:center;
        justify-content:center;
        height:100%;
        font-size:32px;
        letter-spacing:4px;
      ">
        MIKHAIL
      </div>
    `;
  }, 500);

  // 👁 3단계: 깜박이며 사라짐
  setTimeout(() => {
    const name = document.getElementById("name");
    if (name) {
      name.classList.add("name-flicker");
    }
  }, 650);

  // 💀 4단계: 사이트 종료 느낌
  setTimeout(() => {
    document.body.innerHTML = "";
    document.body.style.background = "black";
  }, 1300);
});
