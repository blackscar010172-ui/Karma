const terminal = document.getElementById("terminal");
const beep = document.getElementById("beep");

// 👉 여기만 고치면 카드 정보 변경 가능
const cardInfo = [
  "KMIA WEST KARZENIC",
  "Internal Security Network",
  "",
  "Reading NFC credential...",
  "",
  "Name: Rozan Kivadin Skadren",
  "Sex: Male",
  "Date of Birth: 1887-12-17",
  "Issued: 1930",
  "Occupation: Royal Guard",
  "",
  "Authenticating..."
];

let lineIndex = 0;
let charIndex = 0;

function typeNextChar() {
  if (lineIndex >= cardInfo.length) {
    setTimeout(showExpired, 1200);
    return;
  }

  if (!terminal.children[lineIndex]) {
    const line = document.createElement("div");
    line.className = "line";
    terminal.appendChild(line);
  }

  const lineEl = terminal.children[lineIndex];
  const text = cardInfo[lineIndex];

  if (charIndex < text.length) {
    lineEl.textContent += text.charAt(charIndex);
    charIndex++;

    if (charIndex % 2 === 0) {
      beep.currentTime = 0;
      beep.play().catch(() => {});
    }

    setTimeout(typeNextChar, 32);
  } else {
    charIndex = 0;
    lineIndex++;
    setTimeout(typeNextChar, 260);
  }
}

function showExpired() {
  const fail = document.createElement("div");
  fail.className = "line fail";
  fail.textContent =
    "❌ AUTHORIZATION FAILED\n" +
    "REASON: CREDENTIAL EXPIRED\n" +
    "STATUS: VOID";

  terminal.appendChild(fail);

  beep.currentTime = 0;
  beep.play().catch(() => {});
}

// 시작
setTimeout(typeNextChar, 700);
