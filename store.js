const products = [
  // Laptops
  { id: 1, name: "Laptop HP", price: 650, img: "assets/laptop.png", category: "laptop", desc: "Laptop HP confiable y eficiente para el trabajo diario." },
  { id: 2, name: "Laptop Dell", price: 720, img: "assets/laptop2.png", category: "laptop", desc: "Laptop Dell con gran rendimiento y diseño moderno." },
  { id: 3, name: "Laptop Lenovo", price: 680, img: "assets/laptop3.png", category: "laptop", desc: "Lenovo ideal para estudiantes y profesionales." },
  { id: 4, name: "Laptop Asus", price: 750, img: "assets/laptop4.png", category: "laptop", desc: "Asus potente para gaming y tareas exigentes." },
  { id: 5, name: "Laptop Acer", price: 630, img: "assets/laptop5.png", category: "laptop", desc: "Acer ligera y rápida, perfecta para movilidad." },
  { id: 6, name: "Laptop Apple MacBook", price: 1200, img: "assets/laptop6.png", category: "laptop", desc: "MacBook con diseño premium y alto desempeño." },

  // Computadoras
  { id: 7, name: "PC Gamer", price: 1200, img: "assets/pc.png", category: "pc", desc: "PC Gamer de alto rendimiento para juegos exigentes." },
  { id: 8, name: "PC Oficina", price: 800, img: "assets/pc2.png", category: "pc", desc: "PC eficiente y silenciosa para oficina." },
  { id: 9, name: "PC All-in-One", price: 950, img: "assets/pc3.png", category: "pc", desc: "Todo en uno, ideal para ahorrar espacio." },
  { id: 10, name: "PC Compacta", price: 700, img: "assets/pc4.png", category: "pc", desc: "Compacta y versátil para cualquier ambiente." },
  { id: 11, name: "PC Workstation", price: 1500, img: "assets/pc5.png", category: "pc", desc: "Workstation para tareas profesionales y diseño." },
  { id: 12, name: "PC Mini", price: 600, img: "assets/pc6.png", category: "pc", desc: "Mini PC, potente y fácil de transportar." },

  // Celulares
  { id: 13, name: "iPhone 14", price: 999, img: "assets/phone.png", category: "celular", desc: "iPhone 14 con cámara avanzada y gran autonomía." },
  { id: 14, name: "Samsung Galaxy S23", price: 850, img: "assets/phone2.png", category: "celular", desc: "Galaxy S23, pantalla brillante y potente procesador." },
  { id: 15, name: "Xiaomi Redmi Note 12", price: 400, img: "assets/phone3.png", category: "celular", desc: "Xiaomi con excelente relación calidad-precio." },
  { id: 16, name: "Motorola Edge", price: 500, img: "assets/phone4.png", category: "celular", desc: "Motorola Edge, diseño elegante y gran batería." },
  { id: 17, name: "Huawei P50", price: 600, img: "assets/phone5.png", category: "celular", desc: "Huawei P50, cámara profesional y rendimiento." },
  { id: 18, name: "Google Pixel 7", price: 700, img: "assets/phone6.png", category: "celular", desc: "Pixel 7, experiencia Android pura y fluida." },

  // Auriculares
  { id: 19, name: "Auriculares JBL", price: 120, img: "assets/headphones.png", category: "auricular", desc: "JBL con sonido potente y bajos profundos." },
  { id: 20, name: "Auriculares Sony", price: 140, img: "assets/headphones2.png", category: "auricular", desc: "Sony con cancelación de ruido y comodidad." },
  { id: 21, name: "Auriculares Bose", price: 180, img: "assets/headphones3.png", category: "auricular", desc: "Bose, calidad de audio superior y diseño premium." },
  { id: 22, name: "Auriculares Apple AirPods", price: 200, img: "assets/headphones4.png", category: "auricular", desc: "AirPods, integración perfecta con dispositivos Apple." },
  { id: 23, name: "Auriculares Samsung Buds", price: 110, img: "assets/headphones5.png", category: "auricular", desc: "Samsung Buds, compactos y con gran autonomía." },
  { id: 24, name: "Auriculares Logitech", price: 90, img: "assets/headphones6.png", category: "auricular", desc: "Logitech, ideales para videollamadas y música." }
];

function renderProducts(filter) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products
    .filter(p => filter === 'all' ? true : p.category === filter)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = p.id;
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <div class="price">$${p.price}</div>
        <div class="desc">${p.desc}</div>
        <div class="product-actions" style="width:100%;display:flex;justify-content:center;align-items:center;padding-top:8px;"><button class="btn btn-primary btn-buy">Comprar</button></div>
      `;
      grid.appendChild(card);
    });
}

renderProducts('all');

document.querySelectorAll('.product-filters button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.product-filters button').forEach(b => b.classList.remove('btn-primary'));
    this.classList.add('btn-primary');
    renderProducts(this.dataset.filter);
  });
});

// Quantity form & add-to-cart logic
function openQuantityForm(card, product) {
  if (card.querySelector('.quantity-form')) return;
  const actions = card.querySelector('.product-actions');
  const buyButton = actions.querySelector('.btn-buy');
  // hide the Comprar button while the form is open
  if (buyButton) buyButton.style.display = 'none';

  const form = document.createElement('div');
  form.className = 'quantity-form';
  form.style = 'margin-top:8px;display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;max-width:220px;';
  form.innerHTML = `
    <input type="number" min="1" value="1" class="qty-input" style="width:80%;padding:8px;border:1px solid #ddd;border-radius:6px;text-align:center;"> 
    <button class="btn btn-add" style="width:100%;background:rgba(34,197,94,0.14);border:1px solid rgba(34,197,94,0.28);color:rgb(34,97,41);padding:10px;border-radius:8px;font-weight:700;">Agregar al carrito</button>
    <button class="btn btn-ghost btn-cancel" style="padding:6px 8px;">Cancelar</button>
  `;
  form.style.alignSelf = 'center';
  form.style.margin = '0 auto';
  actions.appendChild(form);

  const qtyInput = form.querySelector('.qty-input');
  const addBtn = form.querySelector('.btn-add');
  const cancelBtn = form.querySelector('.btn-cancel');

  cancelBtn.addEventListener('click', () => {
    form.remove();
    if (buyButton) buyButton.style.display = '';
  });

  addBtn.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value, 10);
    if (!qty || qty < 1) return alert('Ingrese una cantidad válida (mínimo 1).');
    addToCart(product, qty);
    // notify header / same-page listeners
    try { document.dispatchEvent(new Event('cart-updated')); } catch(e){}
    addBtn.textContent = 'Agregado';
    setTimeout(() => { if (form.parentElement) form.remove(); if (buyButton) buyButton.style.display = ''; }, 700);
  });
}

function addToCart(product, quantity) {
  const raw = localStorage.getItem('cart');
  const cart = raw ? JSON.parse(raw) : [];
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity = (existing.quantity || 0) + quantity;
  else cart.push({ id: product.id, name: product.name, price: product.price, quantity: quantity, image: product.img });
  localStorage.setItem('cart', JSON.stringify(cart));
  if (typeof updateCartCount === 'function') updateCartCount();
}

document.getElementById('productGrid').addEventListener('click', function (e) {
  const buyBtn = e.target.closest('.btn-buy');
  if (!buyBtn) return;
  const card = buyBtn.closest('.product-card');
  const id = parseInt(card.dataset.id, 10);
  const product = products.find(p => p.id === id);
  if (!product) return;
  openQuantityForm(card, product);
});