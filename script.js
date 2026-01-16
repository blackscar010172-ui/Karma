const output = document.getElementById("output");
const button = document.getElementById("viewRecord");

function typeText(text, delay = 40, callback) {
  let i = 0;
  const interval = setInterval(() => {
    output.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, delay);
}

function startScan() {
  typeText(
`KARZENIC MINISTRY OF INTERNAL AFFAIRS
SECURE IDENTIFICATION TERMINAL

SCANNING CARD...
PLEASE HOLD STEADY

`, 40,
    () => {
      setTimeout(showVerified, 800);
    }
  );
}

function showVerified() {
  typeText(
`IDENTITY VERIFIED
STATUS: AUTHORIZED

NAME: ROZAN KIVAICH SKARDAR
AFFILIATION: ROYAL GUARD
CLEARANCE LEVEL: A-1
JURISDICTION: WEST KARZENIC

BY ROYAL AUTHORITY

`, 35,
    () => {
      button.classList.remove("hidden");
    }
  );
}

button.addEventListener("click", () => {
  output.textContent = "";
  typeText(
`RESTRICTED RECORD — PARTIAL ACCESS

SERVICE STATUS: ACTIVE
COMMAND PRIVILEGE: CONFIRMED
INJURY RECORD: SEALED

Some records are classified.
`, 35);
  button.classList.add("hidden");
});

startScan();
