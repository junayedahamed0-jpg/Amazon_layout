
  
    // Accessibility: basic skip-to-top
    document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('backToTop').addEventListener('keydown', (e) => { if (e.key === 'Enter') { window.scrollTo({ top: 0, behavior: 'smooth' }); }});

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

   // Demo deals data (you can replace with real API later)
    const deals = [
      { title: 'Wireless Headphones', price: 1999, mrp: 3999, img: 'https://images.unsplash.com/photo-1518444028785-8f622e7630f3?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Smart Watch', price: 2499, mrp: 4999, img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Bluetooth Speaker', price: 1499, mrp: 2999, img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Mechanical Keyboard', price: 3299, mrp: 4999, img: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop' },
      { title: '4K Monitor', price: 18999, mrp: 24999, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
      { title: 'DSLR Camera', price: 39999, mrp: 49999, img: 'https://images.unsplash.com/photo-1435820394963-a15297f976fd?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Gaming Mouse', price: 999, mrp: 1999, img: 'https://images.unsplash.com/photo-1541140911322-98afe66ea6da?q=80&w=1200&auto=format&fit=crop' },
      { title: 'Portable SSD', price: 5299, mrp: 6999, img: 'https://images.unsplash.com/photo-1619537903549-816f4d6de0ee?q=80&w=1200&auto=format&fit=crop' }
    ]; 

    const track = document.getElementById('dealTrack');
    deals.forEach(d => {
      const el = document.createElement('article');
      el.className = 'item';
      el.innerHTML = `
        <div class="thumb" style="height: 140px; background:#f7fafa; border-radius:6px; overflow:hidden; display:grid; place-items:center;">
          <img src="${d.img}" alt="${d.title}" style="width:100%; height:100%; object-fit:cover;"/>
        </div>
        <div style="display:grid; gap:.25rem;">
          <div class="price">₹${d.price.toLocaleString('en-IN')} <span style="color:#565959; font-weight:400; text-decoration:line-through; font-size:.9rem;">₹${d.mrp.toLocaleString('en-IN')}</span></div>
          <div style="font-size:.95rem; color:#0f1111;">${d.title}</div>
          <button class="add" aria-label="Add ${d.title} to cart" style="justify-self:start; background: var(--danger); color: #fff; border: none; border-radius: 999px; padding: .45rem .9rem; cursor: pointer;">Add to Cart</button>
        </div>`;
      track.appendChild(el);
    });

    // Fake add-to-cart handler
    const cartCount = document.getElementById('cartCount');
    document.addEventListener('click', (e) => {
      if (e.target.matches('.add')) {
        const curr = parseInt(cartCount.textContent, 10) || 0;
        cartCount.textContent = curr + 1;
      }
    });

    // Menu demo
    const openMenu = document.getElementById('openMenu');
    openMenu.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Demo menu — plug in your off-canvas navigation here.');
    });

    // Search demo
    document.querySelector('.search').addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('q').value.trim();
      if (!q) return alert('Type something to search.');
      alert('Searching for: ' + q + '\n(Connect to your product API to show results)');
    });
  