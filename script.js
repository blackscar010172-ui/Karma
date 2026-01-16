const btn = document.getElementById("confirmBtn");
const doc = document.getElementById("document");

btn.addEventListener("click", () => {
  btn.textContent = "PROCESSING...";
  btn.disabled = true;

  // 진동 (될 수도 있고 안 될 수도 있음)
  if (navigator.vibrate) {
    navigator.vibrate([120, 80, 120]);
  }

  // 처리 지연 → 공포
  setTimeout(() => {
    doc.classList.add("glitch");
    document.body.style.background = "#000";
    btn.textContent = "ACCESS DENIED";

    // 추가 진동
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  }, 1200);
});
