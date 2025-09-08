// ==========================
// Part 1: Event Handling
// ==========================
const messageBtn = document.getElementById("messageBtn");
const messageArea = document.getElementById("messageArea");

messageBtn.addEventListener("click", () => {
  messageArea.textContent = "You clicked the button! 🚀";
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light / Dark Mode
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

increaseBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// ==========================
// Part 3: Form Validation
// ==========================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload
  let valid = true;

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation (at least 6 chars, must contain a number)
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  // If all good
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully ✅";
    signupForm.reset();
  }
});
