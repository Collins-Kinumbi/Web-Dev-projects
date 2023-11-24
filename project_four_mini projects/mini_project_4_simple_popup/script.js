const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const closeButton = document.querySelector(".popup-close");

button.addEventListener("click", function () {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function () {
  popup.style.display = "none";
});

popup.addEventListener("click", function (e) {
  // console.log(e);
  // console.log(e.target);
  if (e.target.className === "popup-wrapper") {
    popup.style.display = "none";
  }
});
