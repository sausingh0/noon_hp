const products = [
  {
    title: "Watermelon chunks fresh cut 250g",
    category: "snacks",
    price: "8.95",
    old: "12.50",
    off: "28%",
    rate: "4.6",
    g: "linear-gradient(180deg, #ffffff, #25a76b 58%, #ef4b5d)",
    w: "42px",
    h: "50px",
  },
  {
    title: "Greek yoghurt strawberry pack",
    category: "snacks",
    price: "5.50",
    old: "8.00",
    off: "31%",
    rate: "4.7",
    g: "linear-gradient(180deg, #fff, #f55d86)",
    w: "44px",
    h: "45px",
  },
  {
    title: "Chocolate wafer bites family bag",
    category: "snacks",
    price: "12.25",
    old: "18.00",
    off: "32%",
    rate: "4.5",
    g: "linear-gradient(180deg, #704520, #f2c15b)",
    w: "50px",
    h: "43px",
    r: "12px",
  },
  {
    title: "Sparkling water lemon cans",
    category: "drinks",
    price: "14.00",
    old: "22.00",
    off: "36%",
    rate: "4.8",
    g: "linear-gradient(180deg, #f8ffff, #55c2e6)",
    w: "28px",
    h: "58px",
  },
  {
    title: "Shampoo repair care bottle",
    category: "beauty",
    price: "19.95",
    old: "31.00",
    off: "35%",
    rate: "4.4",
    g: "linear-gradient(180deg, #171d2b, #f0546a)",
    w: "31px",
    h: "61px",
  },
  {
    title: "Laundry capsules clean scent",
    category: "home",
    price: "29.50",
    old: "48.00",
    off: "39%",
    rate: "4.6",
    g: "linear-gradient(180deg, #ffffff, #3176d5)",
    w: "46px",
    h: "51px",
    r: "13px",
  },
  {
    title: "Roasted salted cashews pouch",
    category: "snacks",
    price: "16.75",
    old: "23.00",
    off: "27%",
    rate: "4.3",
    g: "linear-gradient(180deg, #fff1b8, #d98434)",
    w: "45px",
    h: "50px",
    r: "15px 15px 11px 11px",
  },
  {
    title: "Cold brew coffee bottle",
    category: "drinks",
    price: "9.95",
    old: "13.00",
    off: "23%",
    rate: "4.5",
    g: "linear-gradient(180deg, #f6efe5, #2c1d16)",
    w: "29px",
    h: "61px",
  },
  {
    title: "Toothpaste whitening twin pack",
    category: "beauty",
    price: "11.50",
    old: "19.00",
    off: "39%",
    rate: "4.6",
    g: "linear-gradient(180deg, #ffffff, #1e8adb)",
    w: "54px",
    h: "30px",
    r: "8px",
  },
  {
    title: "Kitchen tissue jumbo rolls",
    category: "home",
    price: "21.75",
    old: "35.00",
    off: "38%",
    rate: "4.7",
    g: "linear-gradient(180deg, #ffffff, #99d2ff)",
    w: "50px",
    h: "48px",
    r: "18px",
  },
  {
    title: "Energy drink assorted cans",
    category: "drinks",
    price: "18.00",
    old: "26.00",
    off: "31%",
    rate: "4.4",
    g: "linear-gradient(180deg, #111827, #6ee7b7)",
    w: "30px",
    h: "59px",
  },
  {
    title: "Ice cream mini cups vanilla",
    category: "snacks",
    price: "13.95",
    old: "20.00",
    off: "30%",
    rate: "4.8",
    g: "linear-gradient(180deg, #fff8d8, #c46bff)",
    w: "47px",
    h: "43px",
    r: "9px 9px 16px 16px",
  },
];

const categories = [
  ["Fresh fruits", "#e7f9ef"],
  ["Dairy", "#fff2cb"],
  ["Bakery", "#ffe2d5"],
  ["Snacks", "#e7efff"],
  ["Drinks", "#ddf7ff"],
  ["Beauty", "#ffe5ee"],
  ["Cleaning", "#e6fbf3"],
  ["Pets", "#f3e7ff"],
  ["Baby care", "#fff3e1"],
  ["Pharmacy", "#e8f1ff"],
];

const essentials = [
  ["Milk", "#fff4cf"],
  ["Eggs", "#eef8ff"],
  ["Bread", "#ffe6d2"],
  ["Water", "#e3f8ff"],
  ["Coffee", "#f5e6d7"],
  ["Rice", "#f4f2df"],
  ["Detergent", "#e7f0ff"],
  ["Shampoo", "#ffe5ed"],
  ["Tissues", "#eef4ff"],
  ["Juice", "#e5fff1"],
];

const recommended = document.querySelector("#recommended-products");
const deals = document.querySelector("#deal-products");
const more = document.querySelector("#more-products");
const stack = document.querySelector("#stack-products");
const categoryGrid = document.querySelector("#category-grid");
const essentialsGrid = document.querySelector("#essentials-grid");
const searchInput = document.querySelector("#search-input");
const tabs = document.querySelectorAll(".tab");
const cartCount = document.querySelector("#cart-count");
const toast = document.querySelector("#toast");

let activeFilter = "all";
let cartTotal = 0;
let toastTimer;

function productMarkup(product) {
  return `
    <article class="product-card" data-category="${product.category}" data-title="${product.title.toLowerCase()}">
      <div
        class="product-image"
        style="--g:${product.g}; --w:${product.w}; --h:${product.h}; --r:${product.r || "10px"}; --rot:${product.rot || "-3deg"}"
      >
        <span class="discount">${product.off}</span>
        <button type="button" class="wish" aria-label="Save ${product.title}">+</button>
      </div>
      <div class="product-title">${product.title}</div>
      <div class="meta"><span>${product.rate}</span><span>fast</span></div>
      <div class="price-line">
        <small>AED</small>
        <strong>${product.price}</strong>
        <span class="old">${product.old}</span>
      </div>
      <button type="button" class="add" aria-label="Add ${product.title} to cart">+</button>
    </article>
  `;
}

function categoryMarkup([label, color]) {
  return `
    <button type="button" class="category-tile" data-category-name="${label.toLowerCase()}">
      <span class="cat-icon" style="--bg:${color}"></span>
      <span>${label}</span>
    </button>
  `;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const inTab = activeFilter === "all" || product.category === activeFilter;
    const inSearch = query.length === 0 || product.title.toLowerCase().includes(query);
    return inTab && inSearch;
  });

  const source = filtered.length ? filtered : products.slice(0, 4);
  recommended.innerHTML = source.slice(0, 8).map(productMarkup).join("");
  deals.innerHTML = source.slice(3).concat(source.slice(0, 3)).slice(0, 8).map(productMarkup).join("");
  more.innerHTML = source.slice().reverse().slice(0, 8).map(productMarkup).join("");
  stack.innerHTML = source.slice(0, 6).map(productMarkup).join("");
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 1300);
}

categoryGrid.innerHTML = categories.map(categoryMarkup).join("");
essentialsGrid.innerHTML = essentials.map(categoryMarkup).join("");
renderProducts();

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeFilter = tab.dataset.filter;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

document.addEventListener("click", (event) => {
  const add = event.target.closest(".add");
  const wish = event.target.closest(".wish");
  const nav = event.target.closest(".nav-button");
  const service = event.target.closest(".service-card");
  const category = event.target.closest(".category-tile");

  if (add) {
    cartTotal += 1;
    cartCount.textContent = String(cartTotal);
    showToast("Added to cart");
  }

  if (wish) {
    wish.classList.toggle("saved");
    showToast(wish.classList.contains("saved") ? "Saved" : "Removed");
  }

  if (nav) {
    document.querySelectorAll(".nav-button").forEach((button) => button.classList.remove("active"));
    nav.classList.add("active");
  }

  if (service) {
    document.querySelectorAll(".service-card").forEach((button) => button.classList.remove("active"));
    service.classList.add("active");
  }

  if (category) {
    const term = category.dataset.categoryName.split(" ")[0];
    searchInput.value = term;
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
