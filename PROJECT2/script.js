function togglePassword() {
  let pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

function checkPassword() {
  let pass = document.getElementById("password").value;

  let upper = document.getElementById("upper");
  let lower = document.getElementById("lower");
  let digit = document.getElementById("digit");
  let special = document.getElementById("special");

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (let i = 0; i < pass.length; i++) {
    let ch = pass.charCodeAt(i);

    if (ch >= 65 && ch <= 90) hasUpper = true;
    else if (ch >= 97 && ch <= 122) hasLower = true;
    else if (ch >= 48 && ch <= 57) hasDigit = true;
    else hasSpecial = true; 
  }

  upper.className = hasUpper ? "green" : "";
  upper.innerText = hasUpper
    ? "✅ Uppercase letter"
    : "❌ At least one uppercase letter";

  lower.className = hasLower ? "green" : "";
  lower.innerText = hasLower
    ? "✅ Lowercase letter"
    : "❌ At least one lowercase letter";

  digit.className = hasDigit ? "green" : "";
  digit.innerText = hasDigit
    ? "✅ Digit"
    : "❌ At least one digit";

  special.className = hasSpecial ? "green" : "";
  special.innerText = hasSpecial
    ? "✅ Special character"
    : "❌ At least one special character";
}

function checkMatch() {
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let msg = document.getElementById("matchMsg");

  if (confirm === "") {
    msg.innerText = "";
  } else if (pass === confirm) {
    msg.style.color = "green";
    msg.innerText = "Password matched";
  } else {
    msg.style.color = "red";
    msg.innerText = "Password not matched";
  }
}