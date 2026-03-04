const products = [
  {
    id: "p1",
    name: "Laptop Lenovo IdeaPad 15",
    category: "Computo",
    description: "Intel Core i5, 16GB RAM, SSD 512GB.",
    price: 5699.0,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p2",
    name: "Smartphone Samsung Galaxy A55",
    category: "Telefonia",
    description: "Pantalla AMOLED 6.6, 256GB, camara triple.",
    price: 3299.0,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p3",
    name: "Audifonos Sony WH-CH720N",
    category: "Audio",
    description: "Cancelacion de ruido y bateria de larga duracion.",
    price: 1199.0,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p4",
    name: "Monitor LG UltraWide 29",
    category: "Pantallas",
    description: "Resolucion Full HD, ideal para trabajo y gaming.",
    price: 2099.0,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p5",
    name: "Teclado Mecanico Redragon",
    category: "Accesorios",
    description: "Switches rojos, iluminacion RGB y formato compacto.",
    price: 449.0,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p6",
    name: "Camara de Seguridad TP-Link",
    category: "Hogar inteligente",
    description: "Vision nocturna, audio bidireccional y app movil.",
    price: 649.0,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p7",
    name: "Tablet Xiaomi Pad 6",
    category: "Tablets",
    description: "Pantalla 11, procesador Snapdragon, 256GB.",
    price: 2799.0,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p8",
    name: "Smartwatch Huawei Watch Fit",
    category: "Wearables",
    description: "Monitoreo de salud y entrenamiento diario.",
    price: 899.0,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const emptyProducts = document.getElementById("emptyProducts");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const emptyCart = document.getElementById("emptyCart");
const clearCartBtn = document.getElementById("clearCart");
const themeToggle = document.getElementById("themeToggle");
const productTemplate = document.getElementById("productCardTemplate");

const cart = new Map();

const formatGTQ = (amount) => `Q ${amount.toFixed(2)}`;

const saveTheme = (mode) => localStorage.setItem("electro_tienda_theme", mode);

const applyTheme = (mode) => {
  const dark = mode === "dark";
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "Modo claro" : "Modo oscuro";
};

const renderProducts = (query = "") => {
  const normalizedQuery = query.trim().toLowerCase();
  productGrid.innerHTML = "";

  const filtered = products.filter((p) => {
    const target = `${p.name} ${p.category} ${p.description}`.toLowerCase();
    return target.includes(normalizedQuery);
  });

  emptyProducts.hidden = filtered.length > 0;

  filtered.forEach((product) => {
    const card = productTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".product-image").src = product.image;
    card.querySelector(".product-image").alt = product.name;
    card.querySelector(".product-category").textContent = product.category;
    card.querySelector(".product-name").textContent = product.name;
    card.querySelector(".product-desc").textContent = product.description;
    card.querySelector(".product-price").textContent = formatGTQ(product.price);

    const addBtn = card.querySelector(".add-btn");
    addBtn.addEventListener("click", () => addToCart(product.id));

    productGrid.appendChild(card);
  });
};

const renderCart = () => {
  cartList.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.quantity * item.price;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <div class="cart-item-head">
        <strong>${item.name}</strong>
        <button class="remove-btn" type="button" data-id="${item.id}">Quitar</button>
      </div>
      <small>Cantidad: ${item.quantity}</small>
      <small>${formatGTQ(item.price)} c/u</small>
    `;
    cartList.appendChild(li);
  });

  emptyCart.style.display = cart.size ? "none" : "block";
  cartCount.textContent = String(totalItems);
  cartTotal.textContent = formatGTQ(totalPrice);
};

const addToCart = (productId) => {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  if (cart.has(product.id)) {
    const current = cart.get(product.id);
    cart.set(product.id, { ...current, quantity: current.quantity + 1 });
  } else {
    cart.set(product.id, { ...product, quantity: 1 });
  }

  renderCart();
};

cartList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const id = target.dataset.id;
  if (!id) return;

  const item = cart.get(id);
  if (!item) return;

  if (item.quantity <= 1) {
    cart.delete(id);
  } else {
    cart.set(id, { ...item, quantity: item.quantity - 1 });
  }

  renderCart();
});

searchInput.addEventListener("input", (event) => {
  renderProducts(event.target.value);
});

clearCartBtn.addEventListener("click", () => {
  cart.clear();
  renderCart();
});

themeToggle.addEventListener("click", () => {
  const darkActive = document.body.classList.contains("dark");
  const nextTheme = darkActive ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
});

const init = () => {
  const savedTheme = localStorage.getItem("electro_tienda_theme") || "light";
  applyTheme(savedTheme);
  renderProducts();
  renderCart();
};

init();
