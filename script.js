// ============================
// Part 2: JavaScript Functions
// ============================

// Function to generate a random color
function getRandomColor() {
  const colors = ["#ff5722", "#4caf50", "#2196f3", "#ffeb3b", "#9c27b0"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// Function to animate a box by changing its color and size
function animateBox(boxElement, times) {
  let count = 0;

  function step() {
    if (count >= times) return;
    boxElement.style.backgroundColor = getRandomColor();
    boxElement.style.transform = `scale(${1 + Math.random()})`;
    count++;
    setTimeout(step, 500);
  }

  step();
}

// ============================
// Part 3: Triggering CSS Animations with JS
// ============================

document.getElementById("startAnimationBtn").addEventListener("click", function() {
  const box = document.querySelector(".animated-box");
  animateBox(box, 5); // animate box 5 times
});

document.getElementById("flipCardBtn").addEventListener("click", function() {
  const card = document.querySelector(".card");
  card.classList.toggle("flip"); // trigger card flip animation
});

document.getElementById("startAnimationBtn").addEventListener("click", function() {
  const box = document.querySelector(".animated-box");
  box.classList.add("animate");

  // Stop after 5 seconds
  setTimeout(() => {
    box.classList.remove("animate");
  }, 5000);
});
