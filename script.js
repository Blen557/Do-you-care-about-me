const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const message = document.getElementById("message");

yesButton.addEventListener("click", () => {
  message.textContent = "I doubt that 😏";
});

noButton.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * window.innerWidth - noButton.offsetWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

noButton.addEventListener("click", () => {
  alert("Nice try! But you can't click this 😜");
});
