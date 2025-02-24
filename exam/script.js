let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
displayRecipes();

function addRecipe() {
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const ingredients = document.getElementById("ingredients").value;
    const cuisine = document.getElementById("cuisine").value;

    if (!title || !ingredients || !image) {
        alert("Please enter a title, ingredients, and an image URL.");
        return;
    }

    const recipe = { id: Date.now(), title, image, ingredients, cuisine };
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    displayRecipes();
    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("ingredients").value = "";
}

function displayRecipes(filteredRecipes = recipes) {
    const container = document.getElementById("recipe-container");
    container.innerHTML = "";
    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe-card");
        recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <button onclick="editRecipe(${recipe.id})">Edit</button>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;
        container.appendChild(recipeDiv);
    });
}

function editRecipe(id) {
    const recipe = recipes.find(recipe => recipe.id === id);
    document.getElementById("title").value = recipe.title;
    document.getElementById("ingredients").value = recipe.ingredients;
    deleteRecipe(id);
}

function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    displayRecipes();
}