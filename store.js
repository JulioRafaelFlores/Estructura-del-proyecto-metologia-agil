
const products = [
  // Laptops
  { name: "Laptop HP", price: "$650", img: "img/laptop1.webp", category: "laptop", desc: "Rendimiento confiable para trabajo y estudio." },
  { name: "Laptop Dell", price: "$720", img: "img/laptop2.png", category: "laptop", desc: "Diseño robusto y gran autonomía." },
  { name: "Laptop Lenovo", price: "$680", img: "img/laptop3.avif", category: "laptop", desc: "Ideal para productividad y entretenimiento." },
  { name: "Laptop Asus", price: "$750", img: "img/laptop4.png", category: "laptop", desc: "Ligera y potente para uso diario." },
  { name: "Laptop Acer", price: "$630", img: "img/laptop5.jpg", category: "laptop", desc: "Excelente relación calidad-precio." },
  { name: "Laptop Apple MacBook", price: "$1200", img: "img/laptop6.jpg", category: "laptop", desc: "Experiencia premium y alto rendimiento." },


  // Computadoras
  { name: "PC Gamer", price: "$1200", img: "img/laptop2.png", category: "pc", desc: "Potencia para juegos exigentes." },
  { name: "PC Oficina", price: "$800", img: "img/pc2oficina.jpg", category: "pc", desc: "Perfecta para tareas administrativas." },
  { name: "PC All-in-One", price: "$950", img: "img/pc3allin.avif", category: "pc", desc: "Todo en uno, ahorra espacio." },
  { name: "PC Compacta", price: "$700", img: "img/pc4conpacta.jpg", category: "pc", desc: "Diseño pequeño y eficiente." },
  { name: "PC Workstation", price: "$1500", img: "img/pc5workstation.avif", category: "pc", desc: "Ideal para diseño y edición profesional." },
  { name: "PC Mini", price: "$600", img: "img/pc6mini.jpg", category: "pc", desc: "Solución compacta y versátil." },

  // Celulares
  { name: "iPhone 14", price: "$999", img: "img/celular1.jpg", category: "celular", desc: "Tecnología avanzada y gran cámara." },
  { name: "Samsung Galaxy S23", price: "$850", img: "img/phone2.png", category: "celular", desc: "Pantalla brillante y alto rendimiento." },
  { name: "Xiaomi Redmi Note 12", price: "$400", img: "assets/phone3.png", category: "celular", desc: "Excelente batería y precio accesible." },
  { name: "Motorola Edge", price: "$500", img: "assets/phone4.png", category: "celular", desc: "Diseño moderno y buen desempeño." },
  { name: "Huawei P50", price: "$600", img: "assets/phone5.png", category: "celular", desc: "Fotografía profesional y elegante." },
  { name: "Google Pixel 7", price: "$700", img: "img/celu6.jpg", category: "celular", desc: "Android puro y cámara de calidad." },
  // Auriculares
  { name: "Auriculares JBL", price: "$120", img: "assets/headphones.png", category: "auricular", desc: "Sonido potente y diseño cómodo." },
  { name: "Auriculares Sony", price: "$140", img: "assets/headphones2.png", category: "auricular", desc: "Cancelación de ruido y alta fidelidad." },
  { name: "Auriculares Bose", price: "$180", img: "assets/headphones3.png", category: "auricular", desc: "Calidad premium y gran autonomía." },
  { name: "Auriculares Apple AirPods", price: "$200", img: "assets/headphones4.png", category: "auricular", desc: "Integración perfecta con dispositivos Apple." },
  { name: "Auriculares Samsung Buds", price: "$110", img: "assets/headphones5.png", category: "auricular", desc: "Compactos y con buen sonido." },
  { name: "Auriculares Logitech", price: "$90", img: "assets/headphones6.png", category: "auricular", desc: "Ideales para videollamadas y gaming." }
];

// ...existing code...
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


const productos = [
  {
    id: 1,
    nombre: "Laptop HP Pavilion",
    categoria: "laptop",
    precio: 1200,
    imagen: "img/laptophp.jpg"
  },
  {
    id: 2,
    nombre: "PC Gamer Ryzen",
    categoria: "pc",
    precio: 1800,
    imagen: "assets/pc-gamer.jpg"
  },
  {
    id: 3,
    nombre: "Celular Samsung Galaxy",
    categoria: "celular",
    precio: 900,
    imagen: "assets/samsung-galaxy.jpg"
  },
  {
    id: 4,
    nombre: "Auriculares Sony WH-1000XM4",
    categoria: "auricular",
    precio: 350,
    imagen: "assets/sony-wh1000xm4.jpg"
  }
  // Agrega más productos según necesites
];



// ...existing code...
function mostrarProductos(productosFiltrados) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  productosFiltrados.forEach(producto => {
    grid.innerHTML += `
      <div class="product">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="title">${producto.nombre}</div>
        <div class="price">$${producto.precio}</div>
        <div class="actions">
          <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
      </div>
    `;
  });
}
// ...existing code...