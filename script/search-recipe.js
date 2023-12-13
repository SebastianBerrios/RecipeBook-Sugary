const h3 = document.getElementById("search-recipe");

h3.addEventListener("keyup", (event) => {
  const contentH3 = event.target.value;
  console.log(contentH3);
});
