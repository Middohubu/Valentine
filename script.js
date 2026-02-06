function correct() {
  window.location.href = "success.html";
}

function wrong() {
  const msg = document.getElementById("message");
  msg.textContent = "Hmm… try again 😏";
}
