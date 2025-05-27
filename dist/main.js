"use strict";
const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".nav-menu");
menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});
window.addEventListener("scroll", navbarFixedOnScroll);
function navbarFixedOnScroll() {
    const navbar = document.getElementById("navbar");
    const banner = document.querySelector(".main-header-hero");
    if (navbar && banner) {
        const elementSize = banner.offsetHeight;
        if (window.pageYOffset >= elementSize) {
            navbar.classList.add("fixed");
        }
        else {
            navbar.classList.remove("fixed");
        }
    }
}
const products = [
    {
        id: "1",
        name: "Cat Food",
        category: "cats",
        imageUrl: "./assets/products/cat-food.jpg",
        price: "15,000.00",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    },
    {
        id: "2",
        name: "Multivitamin For Cat",
        category: "cats",
        imageUrl: "./assets/products/multi-cat.jpg",
        price: "15,000.00",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    },
    {
        id: "3",
        name: "Dog Food",
        category: "dogs",
        imageUrl: "./assets/products/dog-food.jpg",
        price: "15,000.00",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    },
    {
        id: "4",
        name: "Pet Plate",
        category: "dogs",
        imageUrl: "./assets/products/pet-plate.jpg",
        price: "15,000.00",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    },
    {
        id: "5",
        name: "Dog Water",
        category: "dogs",
        imageUrl: "./assets/products/dog-water.jpg",
        price: "15,000.00",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    },
    {
        id: "6",
        name: "",
        category: "fish",
        imageUrl: "",
        price: "",
        description: "",
    },
    {
        id: "7",
        name: "Bird Water",
        category: "birds",
        imageUrl: "./assets/products/bird-water.jpg",
        price: "15,000.00",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.",
    },
];
// Rendereização dos produtos
function renderProducts(category) {
    const container = document.querySelector(".container-products-list");
    if (!container)
        return;
    let filtered = products.filter((p) => category === "random" || p.category === category);
    if (category === "random") {
        const isLargeScreen = window.innerWidth > 1440;
        const quantityProducts = isLargeScreen ? 3 : 2;
        filtered = filtered
            .sort(() => Math.random() - 0.5)
            .slice(0, quantityProducts);
    }
    container.innerHTML = filtered
        .map((product) => {
        if (!product.imageUrl) {
            return `<div class="product-card out-of-stock">
                  <p>Produto indisponível</p>
                </div>`;
        }
        return `<div class="product-card" data-id="${product.id}" 
      style="background-image: url('${product.imageUrl}')">
                <div class="product-overlay">
                  <div class="product-top">
                    <p class="price">${product.price ? `₦${product.price}` : ""}</p>
                    <img src="./assets/icons/fav-icon.svg" class="fav-icon" alt="Favoritar"/>
                  </div>
                  <div class="product-middle">
          <h3>${product.name || ""}</h3>
          <p class="description">${product.description || ""}</p>
        </div>
                  <div class="product-bottom">
                    <div class="quantity-btn">
                      <button class="minus">-</button>
                      <span class="number">1</span>
                      <button class="plus">+</button>
                    </div>
                    <button class="add-to-card">Add to Card</button>
                  </div>
                </div>
              </div>`;
    })
        .join("");
}
renderProducts("random");
// Button Filter
document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.id;
        renderProducts(category);
    });
});
/* Adiciona e remove efeito Active nos buttons filter Products */
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
//# sourceMappingURL=main.js.map