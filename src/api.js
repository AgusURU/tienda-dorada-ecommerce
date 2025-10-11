/**
 * API simulada para manejo de productos
 * Utiliza datos estáticos con método de respaldo para GitHub Pages
 */

import { PRODUCTS_DATA } from './productsData.js';

/**
 * Obtiene todos los productos disponibles
 * Intenta cargar desde JSON, si falla usa datos embebidos
 * @returns {Promise<Array>} Array de objetos producto
 */
export async function getProducts() {
  // Simula latencia de red para demostrar carga asíncrona
  await new Promise(resolve => setTimeout(resolve, 300));
  
  try {
    // Intenta cargar desde JSON primero
    const response = await fetch('data/products.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Fallback: Cargando productos desde módulo embebido');
  }
  
  // Fallback: usar datos embebidos si falla el JSON
  return PRODUCTS_DATA;
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
