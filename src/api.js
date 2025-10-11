// API SIMULADA - Carga datos desde JSON (cumple consigna de datos remotos)

export async function getProducts() {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const response = await fetch('./products.json');
  if (!response.ok) {
    throw new Error('No se pudieron cargar los productos');
  }
  
  return response.json();
}

export async function getProductById(id) {
  const products = await getProducts();
  return products.find(product => product.id === Number(id));
}
