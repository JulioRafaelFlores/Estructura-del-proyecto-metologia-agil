// cart-ui.js
// Attach an inline quantity form to existing product buttons (.btn-add-to-cart)
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  function findPrice(parent) {
    // Try common selectors first
    const priceSelectors = ['.price', '.product-price', 'p.price', 'div.price'];
    for (const sel of priceSelectors) {
      const el = parent.querySelector(sel);
      if (el && el.textContent) {
        const m = el.textContent.match(/\$\s*([0-9.,]+)/);
        if (m) return parseFloat(m[1].replace(/,/g, ''));
        // fallback: extract first number
        const m2 = el.textContent.match(/([0-9]+(?:[.,][0-9]+)?)/);
        if (m2) return parseFloat(m2[1].replace(/,/g, ''));
      }
    }

    // Search any text nodes (p, div, etc.) for a dollar amount
    const text = parent.textContent || '';
    const m = text.match(/\$\s*([0-9.,]+)/);
    if (m) return parseFloat(m[1].replace(/,/g, ''));
    const m2 = text.match(/([0-9]+(?:[.,][0-9]+)?)/);
    if (m2) return parseFloat(m2[1].replace(/,/g, ''));
    return 0;
  }

  function createForm(parent, btn) {
    // prevent duplicate
    if (parent.querySelector('.qty-form')) return;

    btn.style.display = 'none';

    const wrapper = document.createElement('div');
    wrapper.className = 'qty-form';
    wrapper.style.marginTop = '8px';
    wrapper.innerHTML = `
      <input type="number" min="1" value="1" class="qty-input" aria-label="Cantidad" style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6e9ef;margin-bottom:8px;">
      <button class="btn btn-add-full" style="background:#1da54f;color:#fff;padding:12px;border-radius:10px;border:none;width:100%;font-weight:700;">Agregar al carrito</button>
      <button class="btn btn-cancel" style="margin-top:8px;background:transparent;border:0;color:var(--muted);">Cancelar</button>
    `;

    parent.appendChild(wrapper);

    const qtyInput = wrapper.querySelector('.qty-input');
    const addBtn = wrapper.querySelector('.btn-add-full');
    const cancelBtn = wrapper.querySelector('.btn-cancel');

    addBtn.addEventListener('click', () => {
      const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
      const id = btn.getAttribute('data-id') || null;
      if (!id) return;

      const nameEl = parent.querySelector('h4') || parent.querySelector('.title');
      const name = nameEl ? nameEl.textContent.trim() : `Producto ${id}`;
      const price = findPrice(parent);
      const img = (parent.querySelector('img')||{}).getAttribute ? (parent.querySelector('img').getAttribute('src')) : null;

      // save to localStorage, merging quantities (compare IDs as strings)
      const key = 'cart';
      const raw = localStorage.getItem(key);
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find(i => String(i.id) === String(id));
      if (existing) existing.quantity = (existing.quantity || 0) + qty;
      else cart.push({ id: String(id), name, price, image: img, quantity: qty });
      localStorage.setItem(key, JSON.stringify(cart));

      // update header count if function present
      if (typeof updateHeaderCartCount === 'function') updateHeaderCartCount();
      else {
        const el = document.getElementById('cart-count');
        if (el) el.textContent = cart.reduce((s,i)=>s+(i.quantity||0),0);
      }

      // clean up
      wrapper.remove();
      btn.style.display = '';
    });

    cancelBtn.addEventListener('click', () => {
      wrapper.remove();
      btn.style.display = '';
    });
  }

  // Helper to slug a string for generated ids
  function slugify(text){
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g,'-')
      .replace(/[^a-z0-9-_]/g,'')
      .replace(/-+/g,'-');
  }

  // Event delegation: handle clicks on buttons inside productGrid
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('button');
    if (!btn) return;

    // Ignore filter buttons or other unrelated buttons (they live outside product containers)
    const parent = btn.closest('.product-card, .product, .product-item');
    if (!parent) return; // not a product action

    // Consider this a buy/add button if it has data-id or its text indicates purchase
    const text = (btn.textContent || '').toLowerCase();
    const isBuy = btn.classList.contains('btn-add-to-cart') || text.includes('agregar') || text.includes('comprar');
    if (!isBuy) return;

    // Ensure button carries a dataset id if available; if not, generate one from the product name
    if (!btn.dataset.id) {
      const nameEl = parent.querySelector('h4') || parent.querySelector('.title') || parent.querySelector('.price');
      const nameText = nameEl ? nameEl.textContent.trim() : 'producto';
      btn.dataset.id = 'gen-' + slugify(nameText);
    }

    createForm(parent, btn);
  });

  // In case products are rendered after load, observe and attach nothing (delegation covers it)
});
