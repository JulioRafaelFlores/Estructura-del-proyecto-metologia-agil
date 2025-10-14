// productos.js

const products = [
    {
        id: 1,
        name: "Laptop XYZ",
        category: "laptop",
        price: 1200,
        image: "assets/placeholder.png",
        description: "Laptop XYZ con procesador i7 y 16GB de RAM."
    },
    {
        id: 2,
        name: "Celular ABC",
        category: "celular",
        price: 800,
        image: "assets/placeholder.png",
        description: "Celular ABC con cámara de 48MP y 128GB de almacenamiento."
    },
    {
        id: 3,
        name: "Auricular 123",
        category: "auricular",
        price: 150,
        image: "assets/placeholder.png",
        description: "Auriculares 123 con cancelación de ruido."
    },
    {
        id: 4,
        name: "Computadora DEF",
        category: "pc",
        price: 1000,
        image: "assets/placeholder.png",
        description: "Computadora DEF con procesador Ryzen y 32GB de RAM."
    }
];

function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <button class="btn btn-add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        `;
        productGrid.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);