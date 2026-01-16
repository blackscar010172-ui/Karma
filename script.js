const issued = new Date("1949-08-17");
const expiry = new Date("1952-08-17");

document.getElementById("issuedDate").textContent =
  issued.toDateString();

document.getElementById("expiryDate").textContent =
  expiry.toDateString();

function updateStatus() {
  const now = new Date();
  const statusEl = document.getElementById("status");

  if (now < expiry) {
    const diff = expiry - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    statusEl.textContent = `VALID (${days} days remaining)`;
    statusEl.style.color = "#2ecc71";
  } else {
    statusEl.textContent = "EXPIRED";
    statusEl.style.color = "#e74c3c";
  }
}

updateStatus();
