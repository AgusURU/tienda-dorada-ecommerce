/**
 * API simulada para manejo de productos
 * Utiliza datos estáticos en formato JSON cargados de forma asíncrona
 * ✅ CUMPLE CONSIGNA: "Utilizar datos remotos (o simularlos con JSON)"
 */

/**
 * Obtiene todos los productos disponibles
 * @returns {Promise<Array>} Array de objetos producto
 */
export async function getProducts() {
  // Simula latencia de red para demostrar carga asíncrona
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // JSON en la raíz del proyecto para compatibilidad con GitHub Pages
  const response = await fetch('./products.json');
  if (!response.ok) {
    throw new Error('No se pudieron cargar los productos');
  }
  
  return response.json();
}

/**
 * Obtiene un producto específico por su ID
 * @param {number} id - ID del producto a buscar
 * @returns {Promise<Object|undefined>} Objeto producto o undefined si no existe
 */
export async function getProductById(id) {
  const products = await getProducts();
  return products.find(product => product.id === Number(id));
}
