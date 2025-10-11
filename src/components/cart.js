/**
 * Componente del carrito de compras
 * Renderiza dinámicamente los items del carrito con controles interactivos
 * @param {Array} cart - Array de items en el carrito
 * @param {Object} productsMap - Mapa de productos indexado por ID
 */
export function renderCart(cart, productsMap) {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  
  // Mostrar mensaje si el carrito está vacío
  if (cart.length === 0) {
    container.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  // Renderizar cada item del carrito
  cart.forEach(item => {
    const product = productsMap[item.id];
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    
    // Template HTML interactivo generado dinámicamente
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
