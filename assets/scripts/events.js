const button = document.querySelector("button");
const div = document.querySelector("div");
const divClicked = (event) => {
  console.log("clicked div");
  console.log(event);
};
const buttonClickHandler = (event) => {
  event.stopPropagation();

  console.log("clicked button");
  console.log(event);
  // console.log("Button was clicked!");
};
// const formSelecting = document.querySelector("form");
// formSelecting.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

button.addEventListener("click", buttonClickHandler);
div.addEventListener("click", divClicked);
// // setTimeout(() => {
// //   button.removeEventListener("click", buttonClickHandler);
// // }, 2000);
// window.addEventListener("scroll", buttonClickHandler);
const list = document.querySelector("ul");
list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
  button.click();
});
