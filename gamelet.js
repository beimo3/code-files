const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
/*
handleKeyPress 
responds to certain keys by updating position
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 30;
  }
  if (e.code === "ArrowRight") {
    position = position + 30;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update the ball's position
}
function refresh() {
  ball.style.left = position + "px";
}
