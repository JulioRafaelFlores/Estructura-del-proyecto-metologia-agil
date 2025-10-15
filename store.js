

const products = [
  // Laptops
  { name: "Laptop HP", price: "$650", img: "assets/laptop.png", category: "laptop" },
  { name: "Laptop Dell", price: "$720", img: "assets/laptop2.png", category: "laptop" },
  { name: "Laptop Lenovo", price: "$680", img: "assets/laptop3.png", category: "laptop" },
  { name: "Laptop Asus", price: "$750", img: "assets/laptop4.png", category: "laptop" },
  { name: "Laptop Acer", price: "$630", img: "assets/laptop5.png", category: "laptop" },
  { name: "Laptop Apple MacBook", price: "$1200", img: "assets/laptop6.png", category: "laptop" },

  // Computadoras
  { name: "PC Gamer", price: "$1200", img: "assets/pc.png", category: "pc" },
  { name: "PC Oficina", price: "$800", img: "assets/pc2.png", category: "pc" },
  { name: "PC All-in-One", price: "$950", img: "assets/pc3.png", category: "pc" },
  { name: "PC Compacta", price: "$700", img: "assets/pc4.png", category: "pc" },
  { name: "PC Workstation", price: "$1500", img: "assets/pc5.png", category: "pc" },
  { name: "PC Mini", price: "$600", img: "assets/pc6.png", category: "pc" },

  // Celulares
  { name: "iPhone 14", price: "$999", img: "assets/phone.png", category: "celular" },
  { name: "Samsung Galaxy S23", price: "$850", img: "assets/phone2.png", category: "celular" },
  { name: "Xiaomi Redmi Note 12", price: "$400", img: "assets/phone3.png", category: "celular" },
  { name: "Motorola Edge", price: "$500", img: "assets/phone4.png", category: "celular" },
  { name: "Huawei P50", price: "$600", img: "assets/phone5.png", category: "celular" },
  { name: "Google Pixel 7", price: "$700", img: "assets/phone6.png", category: "celular" },

  // Auriculares
  { name: "Auriculares JBL", price: "$120", img: "assets/headphones.png", category: "auricular" },
  { name: "Auriculares Sony", price: "$140", img: "assets/headphones2.png", category: "auricular" },
  { name: "Auriculares Bose", price: "$180", img: "assets/headphones3.png", category: "auricular" },
  { name: "Auriculares Apple AirPods", price: "$200", img: "assets/headphones4.png", category: "auricular" },
  { name: "Auriculares Samsung Buds", price: "$110", img: "assets/headphones5.png", category: "auricular" },
  { name: "Auriculares Logitech", price: "$90", img: "assets/headphones6.png", category: "auricular" }
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
// ...existing code...















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