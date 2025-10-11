/**
 * API simulada para manejo de productos
 * Datos embebidos directamente - Solución simple para GitHub Pages
 */

/**
 * Obtiene todos los productos disponibles
 * @returns {Promise<Array>} Array de objetos producto
 */
export async function getProducts() {
  // Simula latencia de red para demostrar carga asíncrona
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Datos embebidos directamente - sin fetch
  return [
    {
      "id": 1,
      "name": "Taza Personalizada",
      "price": 450,
      "stock": 12,
      "category": "Accesorios",
      "description": "Taza cerámica 325ml, diseño personalizado.",
      "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop"
    },
    {
      "id": 2,
      "name": "Remera Básica",
      "price": 1200,
      "stock": 6,
      "category": "Indumentaria",
      "description": "Remera algodón 100% disponible en varias tallas.",
      "img": "https://f.fcdn.app/imgs/c83f18/aventureros.com.uy/avenuy/0cbe/original/catalogo/RE002_Beige_1/1920-1200/remera-de-algodon-beige.jpg"
    },
    {
      "id": 3,
      "name": "Sticker Pack x10",
      "price": 300,
      "stock": 30,
      "category": "Accesorios",
      "description": "Pack de 10 stickers resistentes al agua.",
      "img": "https://axiomprint.com/_next/image?url=https%3A%2F%2Fnewapi.axiomprint.com%2Fuploads%2Fcustom-stocker-pack-2-754.jpg&w=3840&q=100"
    },
    {
      "id": 4,
      "name": "Auriculares Premium",
      "price": 2500,
      "stock": 8,
      "category": "Electrónicos",
      "description": "Auriculares inalámbricos con cancelación de ruido.",
      "img": "https://f.fcdn.app/imgs/05e063/www.zonatecno.com.uy/zoteuy/6df1/original/catalogo/106807_106807_3/1500-1500/auriculares-inalambricos-opn-sound-aperto-audio-direccional-auriculares-inalambricos-opn-sound-aperto-audio-direccional.jpg"
    },
    {
      "id": 5,
      "name": "Notebook Ejecutiva",
      "price": 850,
      "stock": 15,
      "category": "Oficina",
      "description": "Cuaderno de notas con tapa dura y papel de calidad.",
      "img": "https://themerchlist.com/wp-content/uploads/2023/04/KAMEZ-Santhome-Deluxe-Notebook-with.png"
    },
    {
      "id": 6,
      "name": "Botella Térmica",
      "price": 1800,
      "stock": 10,
      "category": "Accesorios",
      "description": "Botella térmica de acero inoxidable, mantiene temperatura 12hs.",
      "img": "https://electroshoptienda.com.uy/wp-content/uploads/2024/08/stanley-go-flip-16oz-lagoon.jpg"
    }
  ];
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
