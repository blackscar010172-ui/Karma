const issued = new Date("1949-08-17");
const expiry = new Date("1952-08-17"); // 만료

const issuedEl = document.getElementById("issuedDate");
const expiryEl = document.getElementById("expiryDate");
const statusEl = document.getElementById("statusText");
const warningEl = document.getElementById("warningText");
const docEl = document.getElementById("doc");

issuedEl.textContent = issued.toDateString();
expiryEl.textContent = expiry.toDateString();

function triggerFear() {
  statusEl.textContent = "EXPIRED";
  statusEl.classList.add("error");

  // 모바일 진동 (지원 기기)
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200, 100, 400]);
  }

  // 문서 흔들림
  setInterval(() => {
    docEl.classList.toggle("shake");
  }, 1200);
  const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click", () => {
  confirmBtn.textContent = "PROCESSING...";
  confirmBtn.disabled = true;

  setTimeout(() => {
    triggerFear(); // 기존 오류 연출
    confirmBtn.textContent = "ACCESS DENIED";
  }, 1200);
});

  // 경고 깜빡임
  setInterval(() => {
    warningEl.classList.toggle("blink");
  }, 600);
}

const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click", () => {
  triggerFear();
});
