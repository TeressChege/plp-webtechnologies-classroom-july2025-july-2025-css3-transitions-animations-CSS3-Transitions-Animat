/* ==================== Part 2: JavaScript Functions — Scope, Parameters & Return Values ==================== */

// Global variable for score
let score = 0;

// Function with parameters + return value
function add(a, b) {
  return a + b;
}

// Function to resize box
function resizeBox(newSize) {
  const box = document.getElementById("animateBox");
  box.style.transform = `scale(${newSize})`;
}

function growBox() {
  resizeBox(1.5);
}

function shrinkBox() {
  resizeBox(0.7);
}

// Function that returns a random color
function randomColor() {
  const colors = ["red", "blue", "green", "orange", "purple", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomizeBox() {
  const box = document.getElementById("animateBox");
  box.style.background = randomColor();
}

// Functions using global scope
function addPoints(points) {
  score = add(score, points); // reuse add()
  updateScore();
}

function resetScore() {
  score = 0;
  updateScore();
}

function updateScore() {
  document.getElementById("scoreDisplay").textContent = "Score: " + score;
}

/* ==================== Part 3: Combining CSS Animations with JavaScript ==================== */

// Animate box by toggling class
function toggleBox() {
  document.getElementById("jsBox").classList.toggle("animate");
}

// Card flip
const card = document.getElementById("card");
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Toggle spinner display
function toggleSpinner() {
  const spinner = document.getElementById("jsSpinner");
  spinner.style.display = spinner.style.display === "block" ? "none" : "block";
}

// Modal show/hide
function showModal() {
  document.getElementById("modal").classList.add("show");
  document.getElementById("overlay").classList.add("show");
}
function hideModal() {
  document.getElementById("modal").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}
