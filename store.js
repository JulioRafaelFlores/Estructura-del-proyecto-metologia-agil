const products = [
  // Laptops
  { name: "Laptop HP", price: "$650", img: "assets/laptop.png", category: "laptop", desc: "Laptop HP confiable y eficiente para el trabajo diario." },
  { name: "Laptop Dell", price: "$720", img: "assets/laptop2.png", category: "laptop", desc: "Laptop Dell con gran rendimiento y diseño moderno." },
  { name: "Laptop Lenovo", price: "$680", img: "assets/laptop3.png", category: "laptop", desc: "Lenovo ideal para estudiantes y profesionales." },
  { name: "Laptop Asus", price: "$750", img: "assets/laptop4.png", category: "laptop", desc: "Asus potente para gaming y tareas exigentes." },
  { name: "Laptop Acer", price: "$630", img: "assets/laptop5.png", category: "laptop", desc: "Acer ligera y rápida, perfecta para movilidad." },
  { name: "Laptop Apple MacBook", price: "$1200", img: "assets/laptop6.png", category: "laptop", desc: "MacBook con diseño premium y alto desempeño." },

  // Computadoras
  { name: "PC Gamer", price: "$1200", img: "assets/pc.png", category: "pc", desc: "PC Gamer de alto rendimiento para juegos exigentes." },
  { name: "PC Oficina", price: "$800", img: "assets/pc2.png", category: "pc", desc: "PC eficiente y silenciosa para oficina." },
  { name: "PC All-in-One", price: "$950", img: "assets/pc3.png", category: "pc", desc: "Todo en uno, ideal para ahorrar espacio." },
  { name: "PC Compacta", price: "$700", img: "assets/pc4.png", category: "pc", desc: "Compacta y versátil para cualquier ambiente." },
  { name: "PC Workstation", price: "$1500", img: "assets/pc5.png", category: "pc", desc: "Workstation para tareas profesionales y diseño." },
  { name: "PC Mini", price: "$600", img: "assets/pc6.png", category: "pc", desc: "Mini PC, potente y fácil de transportar." },

  // Celulares
  { name: "iPhone 14", price: "$999", img: "assets/phone.png", category: "celular", desc: "iPhone 14 con cámara avanzada y gran autonomía." },
  { name: "Samsung Galaxy S23", price: "$850", img: "assets/phone2.png", category: "celular", desc: "Galaxy S23, pantalla brillante y potente procesador." },
  { name: "Xiaomi Redmi Note 12", price: "$400", img: "assets/phone3.png", category: "celular", desc: "Xiaomi con excelente relación calidad-precio." },
  { name: "Motorola Edge", price: "$500", img: "assets/phone4.png", category: "celular", desc: "Motorola Edge, diseño elegante y gran batería." },
  { name: "Huawei P50", price: "$600", img: "assets/phone5.png", category: "celular", desc: "Huawei P50, cámara profesional y rendimiento." },
  { name: "Google Pixel 7", price: "$700", img: "assets/phone6.png", category: "celular", desc: "Pixel 7, experiencia Android pura y fluida." },

  // Auriculares
  { name: "Auriculares JBL", price: "$120", img: "assets/headphones.png", category: "auricular", desc: "JBL con sonido potente y bajos profundos." },
  { name: "Auriculares Sony", price: "$140", img: "assets/headphones2.png", category: "auricular", desc: "Sony con cancelación de ruido y comodidad." },
  { name: "Auriculares Bose", price: "$180", img: "assets/headphones3.png", category: "auricular", desc: "Bose, calidad de audio superior y diseño premium." },
  { name: "Auriculares Apple AirPods", price: "$200", img: "assets/headphones4.png", category: "auricular", desc: "AirPods, integración perfecta con dispositivos Apple." },
  { name: "Auriculares Samsung Buds", price: "$110", img: "assets/headphones5.png", category: "auricular", desc: "Samsung Buds, compactos y con gran autonomía." },
  { name: "Auriculares Logitech", price: "$90", img: "assets/headphones6.png", category: "auricular", desc: "Logitech, ideales para videollamadas y música." }
];

function renderProducts(filter) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products
    .filter(p => filter === 'all' ? true : p.category === filter)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <div class="price">${p.price}</div>
        <div class="desc">${p.desc}</div>
        <button class="btn btn-primary">Comprar</button>
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