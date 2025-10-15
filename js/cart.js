// cart.js moderno y responsivo para TechStore
// Lee el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toNumberPrice(v){
    if (typeof v === 'number' && !isNaN(v)) return v;
    if (!v && v !== 0) return 0;
    // remove currency symbols and spaces
    const s = String(v).replace(/[^0-9.,-]/g, '').replace(/,/g, '');
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
}

// normalize any existing cart prices to numbers
cart = cart.map(item => ({ ...item, price: toNumberPrice(item.price), quantity: Number(item.quantity) || 0 }));

function saveCart() {
    // ensure prices are serialized as numbers
    const serial = cart.map(i => ({ ...i, price: toNumberPrice(i.price), quantity: Number(i.quantity) || 0 }));
    localStorage.setItem('cart', JSON.stringify(serial));
}

function removeFromCart(productId) {
    // compare IDs as strings for robustness
    cart = cart.filter(item => String(item.id) !== String(productId));
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div style="text-align:center;color:var(--muted);padding:32px 0;">Tu carrito está vacío.</div>';
        document.getElementById('totalAmount').textContent = '0';
        return;
    }
        cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.style = 'display:flex;align-items:center;gap:16px;padding:10px 0;border-bottom:1px solid #f0f0f0;';
        itemElement.innerHTML = `
            <img src="${item.image || 'assets/placeholder.png'}" alt="${item.name}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;border:1px solid #eee;">
            <div style="flex:1;">
                <div style="font-weight:600;color:var(--text);">${item.name}</div>
                <div style="color:var(--muted);font-size:0.95em;">Cantidad: ${item.quantity}</div>
            </div>
            <div style="font-weight:700;color:var(--primary);min-width:80px;text-align:right;">$${(item.price * item.quantity).toFixed(2)}</div>
                        <button class="btn btn-ghost cart-remove" data-id="${item.id}" style="color:var(--accent);font-size:1.2em;" title="Eliminar">✕</button>
        `;
        cartContainer.appendChild(itemElement);
    });
        // attach remove handlers
        const removeButtons = cartContainer.querySelectorAll('.cart-remove');
        removeButtons.forEach(b => {
            b.addEventListener('click', () => {
                const id = b.getAttribute('data-id');
                removeFromCart(id);
            });
        });
    document.getElementById('totalAmount').textContent = `$${calculateTotal().toFixed(2)}`;
}

function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const el = document.getElementById('cart-count');
    if (el) el.textContent = count;
}

function sendOrderWhatsApp() {
    if (cart.length === 0) return;
    let message = '¡Hola! Quiero hacer un pedido:%0A';
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}%0A`;
    });
    message += `%0ATotal: $${calculateTotal().toFixed(2)}`;
    const phone = '18294323608';
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}

// Botones y eventos
const whatsappBtn = document.getElementById('whatsappButton');
if (whatsappBtn) whatsappBtn.addEventListener('click', sendOrderWhatsApp);
const clearBtn = document.getElementById('clearCartButton');
if (clearBtn) clearBtn.addEventListener('click', clearCart);

// Inicializar
updateCartDisplay();
updateCartCount();