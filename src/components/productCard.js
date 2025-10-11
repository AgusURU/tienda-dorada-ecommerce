/**
 * Componente de tarjeta de producto
 * Genera dinámicamente el HTML para mostrar un producto
 * @param {Object} product - Objeto producto con propiedades id, name, description, price, stock, img
 * @returns {HTMLElement} Elemento DOM de la tarjeta del producto
 */
/**
 * Crea una tarjeta de producto con estilos mejorados
 * @param {Object} product - Objeto producto con propiedades: id, name, description, price, stock, img
 * @returns {HTMLElement} Elemento div con la tarjeta del producto
 */
export function createProductCard(product){
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <h4>${product.name}</h4>
    <p>${product.description}</p>
    <div class="product-price">💰 $${product.price.toFixed(2)}</div>
    <div class="product-stock">📦 Stock: ${product.stock} unidades</div>
    <div style="margin-top:16px">
      <button class="btn primary add-btn" data-id="${product.id}">🛒 Agregar al Carrito</button>
    </div>
  `;
  return div;
}
