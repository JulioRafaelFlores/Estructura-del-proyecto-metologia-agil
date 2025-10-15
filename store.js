
const products = [
  // Laptops
  { name: "Laptop HP", price: "$650", img: "img/laptop1.webp", category: "laptop", desc: "Rendimiento confiable para trabajo y estudio." },
  { name: "Laptop Dell", price: "$720", img: "img/laptop2.png", category: "laptop", desc: "Diseño robusto y gran autonomía." },
  { name: "Laptop Lenovo", price: "$680", img: "img/laptop3.avif", category: "laptop", desc: "Ideal para productividad y entretenimiento." },
  { name: "Laptop Asus", price: "$750", img: "img/laptop4.png", category: "laptop", desc: "Ligera y potente para uso diario." },
  { name: "Laptop Acer", price: "$630", img: "img/laptop5.jpg", category: "laptop", desc: "Excelente relación calidad-precio." },
  { name: "Laptop Apple MacBook", price: "$1200", img: "img/laptop6.jpg", category: "laptop", desc: "Experiencia premium y alto rendimiento." },
{ name: "Laptop MSI Modern", price: "$900", img: "img/laptop7.avif", category: "laptop", desc: "Perfecta para diseño y gaming ligero." },
{ name: "Laptop Huawei MateBook", price: "$850", img: "img/laptop8.jpg", category: "laptop", desc: "Pantalla FullView y batería duradera." },
{ name: "Laptop Samsung Galaxy Book", price: "$780", img: "img/laptop9.jpg", category: "laptop", desc: "Ultraligera y conectividad avanzada." },
{ name: "Laptop Toshiba Satellite", price: "$600", img: "img/laptop10.webp", category: "laptop", desc: "Fiable y económica para estudiantes." },




  // Computadoras
  { name: "PC Gamer", price: "$1200", img: "img/pc1gamer.webp", category: "pc", desc: "Potencia para juegos exigentes." },
  { name: "PC Oficina", price: "$800", img: "img/pc2oficina.jpg", category: "pc", desc: "Perfecta para tareas administrativas." },
  { name: "PC All-in-One", price: "$950", img: "img/pc3allin.avif", category: "pc", desc: "Todo en uno, ahorra espacio." },
  { name: "PC Compacta", price: "$700", img: "img/pc4conpacta.jpg", category: "pc", desc: "Diseño pequeño y eficiente." },
  { name: "PC Workstation", price: "$1500", img: "img/pc5workstation.avif", category: "pc", desc: "Ideal para diseño y edición profesional." },
  { name: "PC Mini", price: "$600", img: "img/pc6mini.jpg", category: "pc", desc: "Solución compacta y versátil." },
{ name: "PC HP EliteDesk", price: "$850", img: "img/pc7.jpg", category: "pc", desc: "Rendimiento empresarial y seguridad." },
{ name: "PC Dell OptiPlex", price: "$900", img: "img/pc8.webp", category: "pc", desc: "Fiable para oficinas y negocios." },
{ name: "PC Lenovo ThinkCentre", price: "$950", img: "img/pc9.jpg", category: "pc", desc: "Robusta y eficiente para trabajo." },
{ name: "PC Asus VivoMini", price: "$650", img: "img/pc10.jpg", category: "pc", desc: "Mini PC para espacios reducidos." },






  // Celulares
  { name: "iPhone 14", price: "$999", img: "img/celular1.jpg", category: "celular", desc: "Tecnología avanzada y gran cámara." },
  { name: "Samsung Galaxy S23", price: "$850", img: "img/celu3.jpg", category: "celular", desc: "Pantalla brillante y alto rendimiento." },
  { name: "Xiaomi Redmi Note 12", price: "$400", img: "img/celu2.jpg", category: "celular", desc: "Excelente batería y precio accesible." },
  { name: "Motorola Edge", price: "$500", img: "img/cel4.avif", category: "celular", desc: "Diseño moderno y buen desempeño." },
  { name: "Huawei P50", price: "$600", img: "img/cel5.webp", category: "celular", desc: "Fotografía profesional y elegante." },
  { name: "Google Pixel 7", price: "$700", img: "img/celu6.jpg", category: "celular", desc: "Android puro y cámara de calidad." },

{ name: "Oppo Reno 8", price: "$450", img: "img/cel7.jpg", category: "celular", desc: "Diseño elegante y carga rápida." },
{ name: "Realme 10 Pro", price: "$380", img: "img/cel8.jpg", category: "celular", desc: "Gran pantalla y rendimiento sólido." },
{ name: "Vivo V23", price: "$420", img: "img/cel9.jpg", category: "celular", desc: "Selfies perfectos y diseño premium." },
{ name: "Sony Xperia 10 IV", price: "$600", img: "img/cel10.webp", category: "celular", desc: "Resistente al agua y sonido Hi-Res." },

  // Tablets
{ name: "iPad 10ª Gen", price: "$450", img: "img/tablet1.webp", category: "tablet", desc: "Pantalla brillante y gran rendimiento para estudio y trabajo." },
{ name: "Samsung Galaxy Tab S8", price: "$520", img: "img/tablet2.jpg", category: "tablet", desc: "Ideal para productividad y entretenimiento multimedia." },
{ name: "Lenovo Tab M10", price: "$210", img: "img/tablet3.jpg", category: "tablet", desc: "Tablet versátil y económica para toda la familia." },
{ name: "Huawei MatePad 11", price: "$390", img: "img/tablet4.jpg", category: "tablet", desc: "Excelente autonomía y pantalla de alta resolución." },
{ name: "Xiaomi Pad 6", price: "$320", img: "img/tablet5.jpg", category: "tablet", desc: "Gran relación calidad-precio y diseño moderno." },
{ name: "Amazon Fire HD 10", price: "$180", img: "img/tablet6.jpg", category: "tablet", desc: "Perfecta para leer, navegar y ver contenido." },
  { name: "Tablet Alcatel 3T", price: "$150", img: "img/tablet7.jpg", category: "tablet", desc: "Ideal para niños y uso básico." },
{ name: "Tablet TCL Tab 10", price: "$200", img: "img/tablet8.jpg", category: "tablet", desc: "Buena autonomía y pantalla HD." },
{ name: "Tablet Microsoft Surface Go", price: "$600", img: "img/tablet9.jpg", category: "tablet", desc: "Potente y ligera para profesionales." },
{ name: "Tablet BQ Aquaris M10", price: "$170", img: "img/tablet10.jpg", category: "tablet", desc: "Económica y funcional para el día a día." },



// Auriculares
  { name: "Auriculares JBL", price: "$120", img: "img/audifono1.webp", category: "auricular", desc: "Sonido potente y diseño cómodo." },
  { name: "Auriculares Sony", price: "$140", img: "img/audifono2.avif", category: "auricular", desc: "Cancelación de ruido y alta fidelidad." },
  { name: "Auriculares Bose", price: "$180", img: "img/audifonos3.jpg", category: "auricular", desc: "Calidad premium y gran autonomía." },
  { name: "Auriculares Apple AirPods", price: "$200", img: "img/audifono4.jpg", category: "auricular", desc: "Integración perfecta con dispositivos Apple." },
  { name: "Auriculares Samsung Buds", price: "$110", img: "img/audifono5.webp", category: "auricular", desc: "Compactos y con buen sonido." },
  { name: "Auriculares Logitech", price: "$90", img: "img/audifono6.webp", category: "auricular", desc: "Ideales para videollamadas y gaming." },
{ name: "Auriculares Sennheiser HD", price: "$160", img: "img/audifono7.jpg", category: "auricular", desc: "Sonido profesional y gran comodidad." },
{ name: "Auriculares Philips SHB", price: "$80", img: "img/audifono8.webp", category: "auricular", desc: "Bluetooth y batería de larga duración." },
{ name: "Auriculares Beats Solo3", price: "$170", img: "img/audifono9.jpg", category: "auricular", desc: "Estilo moderno y sonido potente." },
{ name: "Auriculares Panasonic RP", price: "$60", img: "img/audifono10.webp", category: "auricular", desc: "Ligero y económico para uso diario." },


// Accesorios 
{ name: "Mouse Inalámbrico Logitech", price: "$35", img: "img/accsesorio1.jpg", category: "accesorio", desc: "Precisión y comodidad para trabajar sin cables." },
{ name: "Teclado Bluetooth Microsoft", price: "$45", img: "img/accsesorio2.jpg", category: "accesorio", desc: "Diseño compacto y conexión rápida." },
{ name: "Base Refrigerante Cooler Master", price: "$28", img: "img/accsesorio3.jpg", category: "accesorio", desc: "Mantén tu laptop fresca y mejora el rendimiento." },
{ name: "Hub USB-C 6 en 1", price: "$55", img: "img/accsesorio4.jpg", category: "accesorio", desc: "Expande puertos y conecta todos tus dispositivos." },
{ name: "Funda Protectora Neopreno", price: "$22", img: "img/accsesorio6.jpg", category: "accesorio", desc: "Protege tu laptop de golpes y rayaduras." },
{ name: "Adaptador HDMI a VGA", price: "$18", img: "img/accsesorio7.jpg", category: "accesorio", desc: "Conecta tu laptop a monitores y proyectores antiguos." },
  
{ name: "Cargador Universal", price: "$30", img: "img/accsesorio8.jpg", category: "accesorio", desc: "Compatible con la mayoría de laptops." },
{ name: "Alfombrilla Gaming", price: "$20", img: "img/accsesorio9.webp", category: "accesorio", desc: "Superficie amplia y antideslizante." },
{ name: "Cable USB-C a USB-A", price: "$12", img: "img/accsesorio10.jpg", category: "accesorio", desc: "Transferencia rápida y resistente." },
{ name: "Soporte Ajustable", price: "$25", img: "img/accsesorio5.jpg", category: "accesorio", desc: "Ergonómico y portátil para cualquier laptop." },

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