const products = [
  {
    id: 1,
    title: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    category: "electronics",
    price: 4299,
    oldPrice: 5099,
    rating: "4.7",
    sold: "8.3K",
    badge: "17% off",
    gradient: "linear-gradient(145deg, #d8dde6, #7b8493)",
    rotation: "-8deg",
  },
  {
    id: 2,
    title: "Wireless Noise Cancelling Headphones with 40h Battery",
    category: "electronics",
    price: 189,
    oldPrice: 349,
    rating: "4.5",
    sold: "2.1K",
    badge: "Hot",
    gradient: "linear-gradient(145deg, #252b38, #6f7c95)",
    rotation: "10deg",
  },
  {
    id: 3,
    title: "Luxury Matte Lip Kit and Hydrating Gloss Bundle",
    category: "beauty",
    price: 59,
    oldPrice: 119,
    rating: "4.6",
    sold: "4.8K",
    badge: "50% off",
    gradient: "linear-gradient(145deg, #ff81a5, #9b4dff)",
    rotation: "13deg",
  },
  {
    id: 4,
    title: "Premium Sneaker Collection Lightweight Everyday Shoes",
    category: "fashion",
    price: 139,
    oldPrice: 299,
    rating: "4.4",
    sold: "1.7K",
    badge: "Deal",
    gradient: "linear-gradient(145deg, #ff944d, #ef3340)",
    rotation: "-11deg",
  },
  {
    id: 5,
    title: "Smart Air Fryer 6L Digital Display Family Size",
    category: "home",
    price: 249,
    oldPrice: 399,
    rating: "4.3",
    sold: "980",
    badge: "Save",
    gradient: "linear-gradient(145deg, #f7f9fb, #7b879b)",
    rotation: "8deg",
  },
  {
    id: 6,
    title: "Fresh Pantry Essentials Bundle Rice Pasta Sauces",
    category: "grocery",
    price: 74,
    oldPrice: 112,
    rating: "4.8",
    sold: "6.4K",
    badge: "Fresh",
    gradient: "linear-gradient(145deg, #ffd54a, #14c784)",
    rotation: "-6deg",
  },
];

const searchTerms = [
  "iphone 15 pro max",
  "air fryer",
  "sneakers",
  "makeup bundle",
  "grocery deals",
  "headphones",
  "home essentials",
];

const productGrid = document.querySelector("#product-grid");
const quickLinks = document.querySelectorAll(".quick-link");
const categoryCards = document.querySelectorAll(".category-card");
const searchInput = document.querySelector("#site-search");
const suggestions = document.querySelector("#suggestions");
const cartCount = document.querySelector(".cart-count");
const toast = document.querySelector("#toast");
const resetProducts = document.querySelector("#reset-products");
const countdown = document.querySelector("#countdown");
const navItems = document.querySelectorAll(".nav-item");

let activeCategory = "all";
let activeQuery = "";
let cartTotal = 0;
let toastTimer;
let secondsRemaining = 2 * 60 * 60;

function money(value) {
  return new Intl.NumberFormat("en-AE").format(value);
}

function visibleProducts() {
  const normalizedQuery = activeQuery.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      product.title.toLowerCase().includes(normalizedQuery) ||
      product.category.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

function renderProducts() {
  const matches = visibleProducts();

  if (matches.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        No matching deals. Try a different search or category.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = matches
    .map(
      (product) => `
        <article class="product-card">
          <div
            class="product-visual"
            style="--product-gradient: ${product.gradient}; --product-rotation: ${product.rotation}"
          >
            <span class="badge">${product.badge}</span>
            <button class="wishlist" type="button" aria-label="Save ${product.title}" data-id="${product.id}">
              &hearts;
            </button>
          </div>
          <h3 class="product-title">${product.title}</h3>
          <div class="rating" aria-label="Rating ${product.rating} out of 5">
            <span>Star ${product.rating}</span>
            <span>(${product.sold})</span>
          </div>
          <div class="price-row">
            <span class="currency">AED</span>
            <span class="price">${money(product.price)}</span>
            <span class="old-price">${money(product.oldPrice)}</span>
          </div>
          <button class="add-button" type="button" data-id="${product.id}">Add to cart</button>
        </article>
      `
    )
    .join("");
}

function updateActiveCategory(category) {
  activeCategory = category;

  quickLinks.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  categoryCards.forEach((button) => {
    button.classList.toggle("selected", button.dataset.category === category);
  });

  renderProducts();
}

function renderSuggestions(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    suggestions.hidden = true;
    suggestions.innerHTML = "";
    return;
  }

  const matches = searchTerms
    .filter((term) => term.includes(normalizedQuery))
    .slice(0, 4);

  if (matches.length === 0) {
    suggestions.hidden = true;
    suggestions.innerHTML = "";
    return;
  }

  suggestions.innerHTML = matches
    .map(
      (term) => `
        <button class="suggestion-item" type="button" data-term="${term}">
          <span aria-hidden="true">Search</span>
          <strong>${term}</strong>
        </button>
      `
    )
    .join("");
  suggestions.hidden = false;
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;

  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

function updateCountdown() {
  secondsRemaining = Math.max(0, secondsRemaining - 1);
  const hours = String(Math.floor(secondsRemaining / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsRemaining % 3600) / 60)).padStart(2, "0");
  const seconds = String(secondsRemaining % 60).padStart(2, "0");
  countdown.textContent = `${hours}:${minutes}:${seconds}`;
}

quickLinks.forEach((button) => {
  button.addEventListener("click", () => updateActiveCategory(button.dataset.category));
});

categoryCards.forEach((button) => {
  button.addEventListener("click", () => updateActiveCategory(button.dataset.category));
});

searchInput.addEventListener("input", (event) => {
  activeQuery = event.target.value;
  renderSuggestions(activeQuery);
  renderProducts();
});

searchInput.addEventListener("focus", () => renderSuggestions(searchInput.value));

document.addEventListener("click", (event) => {
  const suggestion = event.target.closest(".suggestion-item");
  const addButton = event.target.closest(".add-button");
  const wishlist = event.target.closest(".wishlist");

  if (!event.target.closest(".search-form") && !event.target.closest(".suggestions")) {
    suggestions.hidden = true;
  }

  if (suggestion) {
    activeQuery = suggestion.dataset.term;
    searchInput.value = activeQuery;
    suggestions.hidden = true;
    renderProducts();
  }

  if (addButton) {
    const product = products.find((item) => item.id === Number(addButton.dataset.id));
    cartTotal += 1;
    cartCount.textContent = String(cartTotal);
    showToast(`${product.title.split(" ").slice(0, 3).join(" ")} added to cart`);
  }

  if (wishlist) {
    wishlist.classList.toggle("saved");
    showToast(wishlist.classList.contains("saved") ? "Saved to wishlist" : "Removed from wishlist");
  }
});

resetProducts.addEventListener("click", () => {
  activeQuery = "";
  searchInput.value = "";
  updateActiveCategory("all");
  suggestions.hidden = true;
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => navItem.classList.remove("active"));
    item.classList.add("active");
    showToast(`${item.textContent.trim()} selected`);
  });
});

document.querySelector(".primary-cta").addEventListener("click", () => {
  document.querySelector(".product-section").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".cart-button").addEventListener("click", () => {
  showToast(cartTotal === 0 ? "Your cart is empty" : `${cartTotal} item${cartTotal === 1 ? "" : "s"} in cart`);
});

document.querySelector(".deliver-to").addEventListener("click", () => {
  showToast("Delivering to Dubai. Location selector opened.");
});

document.querySelector(".scan-button").addEventListener("click", () => {
  showToast("Barcode scanner demo");
});

renderProducts();
window.setInterval(updateCountdown, 1000);
