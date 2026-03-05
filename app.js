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
const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalSpecs = document.getElementById("modalSpecs");
const modalAddBtn = document.getElementById("modalAddBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutBtn = document.getElementById("checkoutBtn");
const downloadInvoiceBtn = document.getElementById("downloadInvoiceBtn");
const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");
const checkoutError = document.getElementById("checkoutError");
const cardNameInput = document.getElementById("cardName");
const cardNumberInput = document.getElementById("cardNumber");
const cardExpiryInput = document.getElementById("cardExpiry");
const cardCvvInput = document.getElementById("cardCvv");
const customerEmailInput = document.getElementById("customerEmail");
const customerAddressInput = document.getElementById("customerAddress");
const customerNitInput = document.getElementById("customerNit");

const THEME_STORAGE_KEY = "electro_tienda_theme";
const CART_STORAGE_KEY = "electro_tienda_cart";
const LAST_INVOICE_STORAGE_KEY = "electro_tienda_last_invoice";

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
const getSavedInvoice = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(LAST_INVOICE_STORAGE_KEY) || "null");
    if (!saved || !Array.isArray(saved.items) || !saved.customer || !saved.totals || !saved.number) return null;
    return saved;
  } catch (error) {
    return null;
  }
};

let lastInvoice = getSavedInvoice();
const filters = {
  query: "",
  category: "all",
  sort: "default"
};
let selectedProductId = null;

const formatGTQ = (amount) => `Q ${amount.toFixed(2)}`;
const nowDate = () => new Date();
const pad2 = (num) => String(num).padStart(2, "0");
const invoiceNumber = () => {
  const d = nowDate();
  return `ET-${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}-${d.getTime().toString().slice(-5)}`;
};

const saveTheme = (mode) => localStorage.setItem(THEME_STORAGE_KEY, mode);
const saveCart = () => localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(Array.from(cart.values())));
const saveLastInvoice = (invoice) => {
  lastInvoice = invoice;
  localStorage.setItem(LAST_INVOICE_STORAGE_KEY, JSON.stringify(invoice));
};
const getProductById = (productId) => products.find((p) => p.id === productId);

const getProductSpecs = (product) => {
  const base = [
    `Categoria: ${product.category}`,
    `Precio: ${formatGTQ(product.price)}`,
    "Garantia local de 12 meses.",
    "Entrega en Guatemala en 24 a 72 horas."
  ];

  const byCategory = {
    Computo: [
      "Procesador de alto rendimiento para trabajo y estudio.",
      "Almacenamiento SSD rapido para encendido y carga de programas.",
      "Conectividad WiFi y Bluetooth integrada."
    ],
    Telefonia: [
      "Pantalla de alta nitidez para multimedia y redes.",
      "Bateria optimizada para uso durante todo el dia.",
      "Camara principal para foto y video en alta calidad."
    ],
    Pantallas: [
      "Panel con buen nivel de color y contraste.",
      "Entradas HDMI para consola, PC o TV box.",
      "Ideal para oficina, entretenimiento y videojuegos."
    ],
    Audio: [
      "Sonido claro con bajos definidos.",
      "Conexion inalambrica estable por Bluetooth.",
      "Diseno comodo para uso diario."
    ],
    Accesorios: [
      "Compatible con la mayoria de equipos modernos.",
      "Construccion duradera para uso constante.",
      "Instalacion rapida y sencilla."
    ],
    "Hogar inteligente": [
      "Control desde app movil y configuracion intuitiva.",
      "Automatizaciones para mejorar seguridad y comodidad.",
      "Compatibilidad con redes WiFi domesticas."
    ],
    Tablets: [
      "Pantalla amplia ideal para estudio y contenido multimedia.",
      "Sistema fluido para tareas, llamadas y apps.",
      "Excelente balance entre portabilidad y potencia."
    ],
    Wearables: [
      "Monitoreo de actividad, ritmo cardiaco y sueno.",
      "Sincronizacion con smartphone.",
      "Bateria de varios dias segun uso."
    ],
    Redes: [
      "Cobertura mejorada para hogar u oficina.",
      "Configuracion facil desde navegador o app.",
      "Conexion estable para multiples dispositivos."
    ]
  };

  return [...base, ...(byCategory[product.category] || ["Producto con excelente relacion calidad-precio."])];
};

const closeProductModal = () => {
  productModal.hidden = true;
  selectedProductId = null;
};

const getCartTotals = () => {
  let totalItems = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.quantity * item.price;
  });
  return { totalItems, totalPrice };
};

const closeCheckoutModal = () => {
  checkoutModal.hidden = true;
  checkoutError.textContent = "";
};

const openCheckoutModal = () => {
  if (!cart.size) {
    window.alert("Tu carrito esta vacio. Agrega productos antes de pagar.");
    return;
  }
  const totals = getCartTotals();
  checkoutTotal.textContent = formatGTQ(totals.totalPrice);
  checkoutModal.hidden = false;
};

const sanitizeCardNumber = (value) => value.replace(/\D/g, "").slice(0, 19);
const formatCardNumber = (value) => sanitizeCardNumber(value).replace(/(\d{4})(?=\d)/g, "$1 ").trim();
const sanitizeExpiry = (value) => value.replace(/[^\d/]/g, "").slice(0, 5);
const sanitizeCvv = (value) => value.replace(/\D/g, "").slice(0, 4);

const validatePaymentData = (data) => {
  if (!data.cardName || data.cardName.length < 4) return "Ingresa el nombre completo del titular.";
  if (!/^\d{13,19}$/.test(data.cardNumber)) return "El numero de tarjeta debe tener entre 13 y 19 digitos.";
  if (!/^\d{2}\/\d{2}$/.test(data.cardExpiry)) return "El vencimiento debe estar en formato MM/AA.";
  if (!/^\d{3,4}$/.test(data.cardCvv)) return "El CVV debe tener 3 o 4 digitos.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerEmail)) return "Ingresa un correo valido para la factura.";
  if (!data.customerAddress || data.customerAddress.length < 8) return "Ingresa una direccion de entrega valida.";
  if (!data.customerNit) return "Ingresa NIT o C/F para la factura.";

  const [mm, yy] = data.cardExpiry.split("/").map(Number);
  if (mm < 1 || mm > 12) return "Mes de vencimiento invalido.";
  const year = 2000 + yy;
  const d = nowDate();
  const currentPeriod = d.getFullYear() * 12 + (d.getMonth() + 1);
  const cardPeriod = year * 12 + mm;
  if (cardPeriod < currentPeriod) return "La tarjeta aparece vencida.";

  return "";
};

const generateInvoicePdf = (invoice) => {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    window.alert("No fue posible cargar el generador PDF. Revisa tu conexion e intenta de nuevo.");
    return false;
  }

  const { customer, totals, number, items, createdAt } = invoice;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const date = createdAt ? new Date(createdAt) : nowDate();
  const dateText = `${pad2(date.getDate())}/${pad2(date.getMonth() + 1)}/${date.getFullYear()} ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;

  const pageW = 210;
  const left = 14;
  const right = 196;

  doc.setFillColor(12, 33, 64);
  doc.rect(0, 0, pageW, 34, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("ElectroTienda GT", left, 15);
  doc.setFontSize(10);
  doc.text("Factura electronica", left, 22);
  doc.text("Tecnologia para Guatemala", left, 27);
  doc.setFontSize(11);
  doc.text(`No. ${number}`, right, 15, { align: "right" });
  doc.text(dateText, right, 22, { align: "right" });

  doc.setFillColor(240, 245, 255);
  doc.roundedRect(left, 40, 182, 42, 2, 2, "F");
  doc.setTextColor(20, 33, 52);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Datos de cliente", 18, 48);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Nombre: ${customer.cardName}`, 18, 55);
  doc.text(`Correo: ${customer.customerEmail}`, 18, 61);
  doc.text(`Direccion: ${customer.customerAddress}`, 18, 67);
  doc.text(`NIT/C/F: ${customer.customerNit}`, 18, 73);
  doc.text(`Pago: Tarjeta terminada en ${customer.cardNumber.slice(-4)}`, 18, 79);

  let y = 92;
  doc.setFillColor(12, 33, 64);
  doc.rect(left, y, 182, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Producto", 18, y + 5.5);
  doc.text("Cant.", 132, y + 5.5);
  doc.text("Precio", 152, y + 5.5);
  doc.text("Subtotal", 192, y + 5.5, { align: "right" });
  y += 10;

  doc.setTextColor(29, 43, 63);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  items.forEach((item, index) => {
    if (y > 262) {
      doc.addPage();
      y = 20;
      doc.setFillColor(12, 33, 64);
      doc.rect(left, y, 182, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.text("Producto", 18, y + 5.5);
      doc.text("Cant.", 132, y + 5.5);
      doc.text("Precio", 152, y + 5.5);
      doc.text("Subtotal", 192, y + 5.5, { align: "right" });
      y += 10;
      doc.setTextColor(29, 43, 63);
      doc.setFont("helvetica", "normal");
    }

    if (index % 2 === 0) {
      doc.setFillColor(247, 250, 255);
      doc.rect(left, y - 4.5, 182, 8, "F");
    }

    const shortName = doc.splitTextToSize(item.name, 106)[0];
    doc.text(shortName, 18, y);
    doc.text(String(item.quantity), 134, y);
    doc.text(formatGTQ(item.price), 152, y);
    doc.text(formatGTQ(item.price * item.quantity), 192, y, { align: "right" });
    y += 8;
  });

  y += 4;
  doc.setFillColor(240, 245, 255);
  doc.roundedRect(118, y, 76, 24, 2, 2, "F");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(20, 33, 52);
  doc.text(`Articulos: ${totals.totalItems}`, 122, y + 8);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(`Total pagado: ${formatGTQ(totals.totalPrice)}`, 122, y + 17);

  const footerY = 287;
  doc.setDrawColor(210, 220, 237);
  doc.line(left, footerY - 4, right, footerY - 4);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(86, 102, 131);
  doc.text("Gracias por comprar en ElectroTienda GT.", left, footerY);
  doc.text("Factura valida como comprobante electronico de compra.", right, footerY, { align: "right" });

  doc.save(`Factura_ElectroTiendaGT_${number}.pdf`);
  return true;
};

const openProductModal = (product) => {
  selectedProductId = product.id;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.description;
  modalPrice.textContent = formatGTQ(product.price);

  modalSpecs.innerHTML = "";
  getProductSpecs(product).forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    modalSpecs.appendChild(li);
  });

  productModal.hidden = false;
};

const applyTheme = (mode) => {
  const dark = mode === "dark";
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  themeToggle.setAttribute("aria-pressed", dark ? "true" : "false");
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
    const detailBtn = card.querySelector(".detail-btn");
    detailBtn.addEventListener("click", () => openProductModal(product));
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
  checkoutBtn.disabled = !cart.size;
  downloadInvoiceBtn.disabled = !lastInvoice;
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

checkoutBtn.addEventListener("click", openCheckoutModal);

checkoutModal.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.dataset.closeCheckout === "true") {
    closeCheckoutModal();
  }
});

closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

cardNumberInput.addEventListener("input", () => {
  cardNumberInput.value = formatCardNumber(cardNumberInput.value);
});

cardExpiryInput.addEventListener("input", () => {
  let value = sanitizeExpiry(cardExpiryInput.value);
  if (/^\d{2}$/.test(value)) value = `${value}/`;
  cardExpiryInput.value = value;
});

cardCvvInput.addEventListener("input", () => {
  cardCvvInput.value = sanitizeCvv(cardCvvInput.value);
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const payload = {
    cardName: cardNameInput.value.trim(),
    cardNumber: sanitizeCardNumber(cardNumberInput.value),
    cardExpiry: cardExpiryInput.value.trim(),
    cardCvv: sanitizeCvv(cardCvvInput.value),
    customerEmail: customerEmailInput.value.trim(),
    customerAddress: customerAddressInput.value.trim(),
    customerNit: customerNitInput.value.trim()
  };

  const error = validatePaymentData(payload);
  if (error) {
    checkoutError.textContent = error;
    return;
  }
  checkoutError.textContent = "";

  const totals = getCartTotals();
  const number = invoiceNumber();
  const invoiceData = {
    customer: payload,
    totals,
    number,
    items: Array.from(cart.values()),
    createdAt: nowDate().toISOString()
  };
  const pdfCreated = generateInvoicePdf(invoiceData);
  if (!pdfCreated) return;

  saveLastInvoice(invoiceData);

  checkoutForm.reset();
  closeCheckoutModal();
  cart.clear();
  saveCart();
  renderCart();
  window.alert("Pago procesado con tarjeta. Tu factura PDF fue generada correctamente.");
});

downloadInvoiceBtn.addEventListener("click", () => {
  if (!lastInvoice) {
    window.alert("Aun no hay factura disponible para descargar.");
    return;
  }
  generateInvoicePdf(lastInvoice);
});

productModal.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.dataset.close === "true") {
    closeProductModal();
  }
});

closeModalBtn.addEventListener("click", closeProductModal);

modalAddBtn.addEventListener("click", () => {
  if (!selectedProductId) return;
  addToCart(selectedProductId);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!productModal.hidden) closeProductModal();
  if (!checkoutModal.hidden) closeCheckoutModal();
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
