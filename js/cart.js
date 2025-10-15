// cart.js moderno y responsivo para TechStore
// Lee el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
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
        // Make each item take full width and add spacing between items
    itemElement.style = 'width:100%;box-sizing:border-box;padding:8px;border-radius:8px;margin:5px 0;display:flex;align-items:center;gap:12px;background:transparent;border:1px solid #e6e6e6;';
        itemElement.innerHTML = `
            <img src="${item.image || 'assets/placeholder.png'}" alt="${item.name}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;border:1px solid #eee;flex:0 0 auto;">
            <div style="flex:1;min-width:0;">
                <div style="font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</div>
                <div style="color:var(--muted);font-size:0.95em;">Cantidad: ${item.quantity}</div>
            </div>
            <div style="font-weight:700;color:var(--primary);min-width:80px;text-align:right;">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="btn btn-ghost" style="color:var(--accent);font-size:1.2em;margin-left:8px;" title="Eliminar" onclick="removeFromCart(${item.id})">✕</button>
        `;
        cartContainer.appendChild(itemElement);
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
document.getElementById('whatsappButton').addEventListener('click', sendOrderWhatsApp);
document.getElementById('clearCartButton').addEventListener('click', clearCart);

// Inicializar
updateCartDisplay();
updateCartCount();