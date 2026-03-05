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
    name: "Laptop HP Pavilion 14",
    category: "Computo",
    description: "Core i7, 16GB RAM y disco SSD 1TB.",
    price: 6899.0,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p3",
    name: "Laptop ASUS VivoBook 16",
    category: "Computo",
    description: "Ryzen 7, pantalla Full HD y bateria larga.",
    price: 6299.0,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p4",
    name: "Laptop Acer Aspire 5",
    category: "Computo",
    description: "Core i5 de ultima generacion, SSD 512GB.",
    price: 5399.0,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p5",
    name: "Computadora Dell Inspiron Desktop",
    category: "Computo",
    description: "PC de escritorio para oficina y estudio.",
    price: 4799.0,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p6",
    name: "PC Gamer Ryzen 5 RTX 4060",
    category: "Computo",
    description: "Computadora gamer armada para alto rendimiento.",
    price: 10299.0,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p7",
    name: "Mini PC Intel NUC",
    category: "Computo",
    description: "Computadora compacta para hogar y negocios.",
    price: 3599.0,
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p8",
    name: "MacBook Air M2 13",
    category: "Computo",
    description: "Laptop ultraligera con chip M2 y 8GB RAM.",
    price: 10499.0,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p9",
    name: "Smartphone Samsung Galaxy A55",
    category: "Telefonia",
    description: "Pantalla AMOLED 6.6, 256GB y camara triple.",
    price: 3299.0,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p10",
    name: "Smartphone Xiaomi Redmi Note 13",
    category: "Telefonia",
    description: "Camara 108MP y bateria de alta duracion.",
    price: 2199.0,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p11",
    name: "iPhone 15 128GB",
    category: "Telefonia",
    description: "Procesador rapido, gran camara y iOS actual.",
    price: 8199.0,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484cb6e6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p12",
    name: "Motorola Edge 40 Neo",
    category: "Telefonia",
    description: "Pantalla pOLED y carga rapida 68W.",
    price: 2899.0,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p13",
    name: "Monitor LG UltraWide 29",
    category: "Pantallas",
    description: "Resolucion Full HD, ideal para trabajo y gaming.",
    price: 2099.0,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p14",
    name: "Monitor Samsung 27 Curvo",
    category: "Pantallas",
    description: "75Hz con modo juego y diseno elegante.",
    price: 1899.0,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p15",
    name: "Monitor ASUS TUF 24 Gaming",
    category: "Pantallas",
    description: "Panel IPS, 165Hz y tiempo de respuesta bajo.",
    price: 2399.0,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p16",
    name: "Smart TV TCL 50 4K",
    category: "Pantallas",
    description: "Google TV, HDR y sonido Dolby Audio.",
    price: 3199.0,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p17",
    name: "Audifonos Sony WH-CH720N",
    category: "Audio",
    description: "Cancelacion de ruido y bateria de larga duracion.",
    price: 1199.0,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p18",
    name: "Audifonos JBL Tune 520BT",
    category: "Audio",
    description: "Bluetooth, bajos potentes y microfono integrado.",
    price: 549.0,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p19",
    name: "Bocina Bluetooth Anker Soundcore",
    category: "Audio",
    description: "Resistente al agua y 24 horas de reproduccion.",
    price: 699.0,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p20",
    name: "Barra de Sonido LG 2.1",
    category: "Audio",
    description: "Subwoofer inalambrico para cine en casa.",
    price: 1699.0,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p21",
    name: "Teclado Mecanico Redragon",
    category: "Accesorios",
    description: "Switches rojos, iluminacion RGB y formato compacto.",
    price: 449.0,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p22",
    name: "Mouse Logitech G305",
    category: "Accesorios",
    description: "Mouse inalambrico gaming de alta precision.",
    price: 399.0,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p23",
    name: "Webcam Full HD 1080p",
    category: "Accesorios",
    description: "Ideal para clases virtuales y videollamadas.",
    price: 329.0,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p24",
    name: "Disco SSD Kingston 1TB",
    category: "Accesorios",
    description: "Velocidad alta de lectura y escritura.",
    price: 799.0,
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p25",
    name: "Camara de Seguridad TP-Link",
    category: "Hogar inteligente",
    description: "Vision nocturna, audio bidireccional y app movil.",
    price: 649.0,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p26",
    name: "Foco Inteligente WiFi",
    category: "Hogar inteligente",
    description: "Control de color y brillo desde el celular.",
    price: 149.0,
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p27",
    name: "Enchufe Inteligente Tapo P100",
    category: "Hogar inteligente",
    description: "Programa horarios y controla equipos remotamente.",
    price: 129.0,
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p28",
    name: "Timbre Inteligente con Camara",
    category: "Hogar inteligente",
    description: "Notificaciones en tiempo real y grabacion HD.",
    price: 899.0,
    image: "https://images.unsplash.com/photo-1558002038-bb0237f4e1f0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p29",
    name: "Tablet Xiaomi Pad 6",
    category: "Tablets",
    description: "Pantalla 11, procesador Snapdragon, 256GB.",
    price: 2799.0,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p30",
    name: "iPad 10ma Generacion",
    category: "Tablets",
    description: "Pantalla retina y gran rendimiento diario.",
    price: 4499.0,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p31",
    name: "Samsung Galaxy Tab S9 FE",
    category: "Tablets",
    description: "Tablet premium para productividad y multimedia.",
    price: 3899.0,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p32",
    name: "Smartwatch Huawei Watch Fit",
    category: "Wearables",
    description: "Monitoreo de salud y entrenamiento diario.",
    price: 899.0,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p33",
    name: "Smartwatch Xiaomi Redmi Watch 4",
    category: "Wearables",
    description: "Pantalla AMOLED y bateria de larga duracion.",
    price: 799.0,
    image: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p34",
    name: "Banda Inteligente Honor Band",
    category: "Wearables",
    description: "Seguimiento de actividad y sueno.",
    price: 299.0,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p35",
    name: "Router WiFi 6 TP-Link AX1800",
    category: "Redes",
    description: "Mayor cobertura y velocidad para casa/oficina.",
    price: 699.0,
    image: "https://images.unsplash.com/photo-1644502356440-2c12ba72438f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "p36",
    name: "Extensor de Red WiFi AC1200",
    category: "Redes",
    description: "Mejora la senal inalambrica en toda tu casa.",
    price: 299.0,
    image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&w=900&q=80"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const emptyProducts = document.getElementById("emptyProducts");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const emptyCart = document.getElementById("emptyCart");
const clearCartBtn = document.getElementById("clearCart");
const themeToggle = document.getElementById("themeToggle");
const productTemplate = document.getElementById("productCardTemplate");

const THEME_STORAGE_KEY = "electro_tienda_theme";
const CART_STORAGE_KEY = "electro_tienda_cart";

const getSavedCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return new Map();

    const entries = saved
      .filter((item) => item && item.id)
      .map((item) => [
        item.id,
        {
          id: item.id,
          name: item.name,
          category: item.category,
          description: item.description,
          image: item.image,
          price: Number(item.price) || 0,
          quantity: Math.max(1, Number(item.quantity) || 1)
        }
      ]);

    return new Map(entries);
  } catch (error) {
    return new Map();
  }
};

const cart = getSavedCart();
const filters = {
  query: "",
  category: "all",
  sort: "default"
};

const formatGTQ = (amount) => `Q ${amount.toFixed(2)}`;

const saveTheme = (mode) => localStorage.setItem(THEME_STORAGE_KEY, mode);
const saveCart = () => localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(Array.from(cart.values())));

const applyTheme = (mode) => {
  const dark = mode === "dark";
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "Modo claro" : "Modo oscuro";
};

const populateCategoryOptions = () => {
  const categories = [...new Set(products.map((product) => product.category))].sort((a, b) => a.localeCompare(b));
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
};

const renderProducts = () => {
  const normalizedQuery = filters.query.trim().toLowerCase();
  productGrid.innerHTML = "";

  let filtered = products.filter((p) => {
    const target = `${p.name} ${p.category} ${p.description}`.toLowerCase();
    const matchesQuery = target.includes(normalizedQuery);
    const matchesCategory = filters.category === "all" || p.category === filters.category;
    return matchesQuery && matchesCategory;
  });

  if (filters.sort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

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

  saveCart();
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

  saveCart();
  renderCart();
});

searchInput.addEventListener("input", (event) => {
  filters.query = event.target.value;
  renderProducts();
});

categorySelect.addEventListener("change", (event) => {
  filters.category = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  filters.sort = event.target.value;
  renderProducts();
});

clearCartBtn.addEventListener("click", () => {
  cart.clear();
  saveCart();
  renderCart();
});

themeToggle.addEventListener("click", () => {
  const darkActive = document.body.classList.contains("dark");
  const nextTheme = darkActive ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
});

const init = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  applyTheme(savedTheme);
  populateCategoryOptions();
  renderProducts();
  renderCart();
};

init();
