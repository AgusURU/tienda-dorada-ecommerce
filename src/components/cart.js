// COMPONENTE - Renderizado dinámico del carrito
export function renderCart(cart, productsMap) {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  
  if (cart.length === 0) {
    container.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  cart.forEach(item => {
    const product = productsMap[item.id];
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    
    cartItemElement.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <div style="flex:1">
        <div>${product.name}</div>
        <div>Cantidad: 
          <input class="qty" data-id="${item.id}" type="number" min="1" value="${item.qty}" style="width:60px" />
        </div>
      </div>
      <div>$${(product.price * item.qty).toFixed(2)}</div>
      <button class="btn remove" data-id="${item.id}" title="Eliminar del carrito">X</button>
    `;
    
    container.appendChild(cartItemElement);
  });
}
