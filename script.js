const btn = document.getElementById("confirmBtn");
const doc = document.getElementById("document");
const alarm = document.getElementById("alarm");

btn.addEventListener("click", () => {
  btn.textContent = "VERIFYING...";
  btn.disabled = true;

  // 진동 시도
  if (navigator.vibrate) {
    navigator.vibrate([150, 100, 150]);
  }

  // 소리
  alarm.volume = 0.4;
  alarm.play().catch(() => {});

  // 글리치
  setTimeout(() => {
    doc.classList.add("glitch");
  }, 600);

  // 블랙아웃
  setTimeout(() => {
    document.body.innerHTML = "";
    document.body.style.background = "black";

    if (navigator.vibrate) {
      navigator.vibrate(300);
    }
  }, 1600);

  // 복구 화면
  setTimeout(() => {
    document.body.innerHTML = `
      <div class="recovery">
        SYSTEM RECOVERY MODE<br /><br />
        ACCESS LOGGED<br />
        SESSION TERMINATED<br /><br />
        KMIA SECURITY PROTOCOL 7A
      </div>
    `;
  }, 3000);
});
