document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-recipe");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const recipeCards = document.querySelectorAll(".recipe-card");

    recipeCards.forEach(function (card) {
      const recipeName = card.querySelector("h3").textContent.toLowerCase();
      const recipeNameStart = recipeName.startsWith(searchTerm);

      if (recipeNameStart) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
