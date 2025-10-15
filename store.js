
const products = [
  // Laptops
  { name: "Laptop HP", price: "$650", img: "img/laptop1.webp", category: "laptop", desc: "Rendimiento confiable para trabajo y estudio." },
  { name: "Laptop Dell", price: "$720", img: "img/laptop2.png", category: "laptop", desc: "Diseño robusto y gran autonomía." },
  { name: "Laptop Lenovo", price: "$680", img: "img/laptop3.avif", category: "laptop", desc: "Ideal para productividad y entretenimiento." },
  { name: "Laptop Asus", price: "$750", img: "img/laptop4.png", category: "laptop", desc: "Ligera y potente para uso diario." },
  { name: "Laptop Acer", price: "$630", img: "img/laptop5.jpg", category: "laptop", desc: "Excelente relación calidad-precio." },
  { name: "Laptop Apple MacBook", price: "$1200", img: "img/laptop6.jpg", category: "laptop", desc: "Experiencia premium y alto rendimiento." },


// Accesorios para laptops
{ name: "Mouse Inalámbrico Logitech", price: "$35", img: "img/mouse-logitech.jpg", category: "accesorio", desc: "Precisión y comodidad para trabajar sin cables." },
{ name: "Teclado Bluetooth Microsoft", price: "$45", img: "img/teclado-microsoft.jpg", category: "accesorio", desc: "Diseño compacto y conexión rápida." },
{ name: "Base Refrigerante Cooler Master", price: "$28", img: "img/base-coolermaster.jpg", category: "accesorio", desc: "Mantén tu laptop fresca y mejora el rendimiento." },
{ name: "Hub USB-C 6 en 1", price: "$55", img: "img/hub-usbc.jpg", category: "accesorio", desc: "Expande puertos y conecta todos tus dispositivos." },
{ name: "Funda Protectora Neopreno", price: "$22", img: "img/funda-neopreno.jpg", category: "accesorio", desc: "Protege tu laptop de golpes y rayaduras." },
{ name: "Adaptador HDMI a VGA", price: "$18", img: "img/adaptador-hdmivga.jpg", category: "accesorio", desc: "Conecta tu laptop a monitores y proyectores antiguos." },
  
  // Computadoras
  { name: "PC Gamer", price: "$1200", img: "img/pc1gamer.webp", category: "pc", desc: "Potencia para juegos exigentes." },
  { name: "PC Oficina", price: "$800", img: "img/pc2oficina.jpg", category: "pc", desc: "Perfecta para tareas administrativas." },
  { name: "PC All-in-One", price: "$950", img: "img/pc3allin.avif", category: "pc", desc: "Todo en uno, ahorra espacio." },
  { name: "PC Compacta", price: "$700", img: "img/pc4conpacta.jpg", category: "pc", desc: "Diseño pequeño y eficiente." },
  { name: "PC Workstation", price: "$1500", img: "img/pc5workstation.avif", category: "pc", desc: "Ideal para diseño y edición profesional." },
  { name: "PC Mini", price: "$600", img: "img/pc6mini.jpg", category: "pc", desc: "Solución compacta y versátil." },

  // Celulares
  { name: "iPhone 14", price: "$999", img: "img/celular1.jpg", category: "celular", desc: "Tecnología avanzada y gran cámara." },
  { name: "Samsung Galaxy S23", price: "$850", img: "img/celu3.jpg", category: "celular", desc: "Pantalla brillante y alto rendimiento." },
  { name: "Xiaomi Redmi Note 12", price: "$400", img: "img/celu2.jpg", category: "celular", desc: "Excelente batería y precio accesible." },
  { name: "Motorola Edge", price: "$500", img: "img/cel4.avif", category: "celular", desc: "Diseño moderno y buen desempeño." },
  { name: "Huawei P50", price: "$600", img: "img/cel5.webp", category: "celular", desc: "Fotografía profesional y elegante." },
  { name: "Google Pixel 7", price: "$700", img: "img/celu6.jpg", category: "celular", desc: "Android puro y cámara de calidad." },
  // Auriculares
  { name: "Auriculares JBL", price: "$120", img: "img/audifono1.webp", category: "auricular", desc: "Sonido potente y diseño cómodo." },
  { name: "Auriculares Sony", price: "$140", img: "img/audifono2.avif", category: "auricular", desc: "Cancelación de ruido y alta fidelidad." },
  { name: "Auriculares Bose", price: "$180", img: "img/audifonos3.jpg", category: "auricular", desc: "Calidad premium y gran autonomía." },
  { name: "Auriculares Apple AirPods", price: "$200", img: "img/audifono4.jpg", category: "auricular", desc: "Integración perfecta con dispositivos Apple." },
  { name: "Auriculares Samsung Buds", price: "$110", img: "img/audifono5.webp", category: "auricular", desc: "Compactos y con buen sonido." },
  { name: "Auriculares Logitech", price: "$90", img: "img/audifono6.webp", category: "auricular", desc: "Ideales para videollamadas y gaming." }
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