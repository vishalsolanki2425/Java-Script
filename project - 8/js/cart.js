let productForm = document.querySelector("#productForm");
let nameInput = document.querySelector("#nameInput");
let priceInput = document.querySelector("#priceInput");
let imageInput = document.querySelector("#imageInput");
let popup = document.querySelector("#popup");
let popupContent = document.querySelector("#popupContent");
let closePopup = document.querySelector("#closePopup");
let productFormSection = document.querySelector("#productFormSection");
let productButton = document.querySelector("#productButton");

productButton.addEventListener("click", () => {
    if (productFormSection.style.display === "none") {
        productFormSection.style.display = "block";
    } else {
        productFormSection.style.display = "none";
    }
});

function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productList = document.querySelector("#productList");

    productList.innerHTML = "";

    products.forEach((product, index) => {
        let productCard = `
            <div class="item-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>`;
        productList.innerHTML += productCard;
    });
}

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let product = {
        name: nameInput.value.trim(),
        price: parseFloat(priceInput.value),
        image: imageInput.value.trim(),
    };

    if (!product.name || isNaN(product.price) || !product.image) {
        alert("Please enter valid product details.");
        return;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));
    productForm.reset();
    loadProducts();
});

loadProducts();

function addToCart(index) {
    let products = JSON.parse(localStorage.getItem("products"));
    let cartItem = products[index];
    let cartData = JSON.parse(localStorage.getItem("cart")) || []
    cartData.push(cartItem)
    localStorage.setItem("cart", JSON.stringify(cartData));
}