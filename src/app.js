// PROYECTO FINAL - Agustín Rodriguez - JavaScript CoderHouse

import { getProducts } from './api.js';
import { createProductCard } from './components/productCard.js';
import { renderCart } from './components/cart.js';

let PRODUCTS = [];
let PRODUCTS_MAP = {};
let CART = JSON.parse(localStorage.getItem('pj_cart') || '[]');

const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const openCartBtn = document.getElementById('open-cart');
const cartPanel = document.getElementById('cart-panel');
const closeCartBtn = document.getElementById('close-cart');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const cancelCheckout = document.getElementById('cancel-checkout');
const checkoutForm = document.getElementById('checkout-form');

// INICIALIZACIÓN - Carga productos desde JSON de forma asíncrona
async function init() {
  try {
    // Asegurar que el modal esté oculto al inicializar
    checkoutModal.classList.add('hidden');
    
    PRODUCTS = await getProducts();
    PRODUCTS.forEach(product => PRODUCTS_MAP[product.id] = product);
    renderProducts();
    updateCartUI();
  } catch (error) {
    Swal.fire('Error', 'No se pudieron cargar los productos. Verifica tu conexión e intenta nuevamente.', 'error');
  }
}

// RENDERIZADO DINÁMICO DE PRODUCTOS
function renderProducts() {
  productList.innerHTML = '';
  PRODUCTS.forEach(product => {
    const card = createProductCard(product);
    productList.appendChild(card);
  });
}

// EVENT DELEGATION - Manejo de eventos del catálogo
productList.addEventListener('click', event => {
  if (event.target.matches('.add-btn')) {
    const productId = Number(event.target.dataset.id);
    addToCart(productId, 1);
  }
});

openCartBtn.addEventListener('click', ()=> cartPanel.classList.toggle('hidden'));
closeCartBtn.addEventListener('click', ()=> cartPanel.classList.add('hidden'));

// LÓGICA DEL CARRITO - Agregar producto con validación de stock
function addToCart(id, qty) {
  const product = PRODUCTS_MAP[id];
  if (!product) return;
  
  const existingItem = CART.find(item => item.id === id);
  const newQuantity = (existingItem ? existingItem.qty : 0) + qty;
  
  if (newQuantity > product.stock) {
    Swal.fire('Stock insuficiente', 'No hay suficiente stock para esa cantidad', 'warning');
    return;
  }
  
  if (existingItem) {
    existingItem.qty = newQuantity;
  } else {
    CART.push({ id, qty });
  }
  
  persistCart();
  updateCartUI();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto agregado al carrito',
    showConfirmButton: false,
    timer: 900
  });
}

// EVENTOS DEL CARRITO - Modificar cantidades y eliminar productos
document.getElementById('cart-items').addEventListener('input', e=>{
  if(e.target.matches('.qty')){
    const id = Number(e.target.dataset.id);
    const qty = Number(e.target.value);
    updateCartQuantity(id, qty);
  }
});

document.getElementById('cart-items').addEventListener('click', e=>{
  if(e.target.matches('.remove')){
    const id = Number(e.target.dataset.id);
    removeFromCart(id);
  }
});

function updateCartQuantity(id, qty){
  const item = CART.find(i=>i.id===id);
  if(!item) return;
  const product = PRODUCTS_MAP[id];
  if(qty < 1) return;
  if(qty > product.stock){ Swal.fire('Stock','Cantidad mayor al stock','warning'); return; }
  item.qty = qty;
  persistCart();
  updateCartUI();
}

function removeFromCart(id){
  CART = CART.filter(i=>i.id!==id);
  persistCart();
  updateCartUI();
}

// PERSISTENCIA - LocalStorage para mantener el carrito
function persistCart(){
  localStorage.setItem('pj_cart', JSON.stringify(CART));
}

function calculateTotal(){
  return CART.reduce((sum, it)=> sum + (PRODUCTS_MAP[it.id].price * it.qty), 0);
}

function updateCartUI(){
  const count = CART.reduce((s,i)=>s+i.qty,0);
  cartCount.textContent = count;
  renderCart(CART, PRODUCTS_MAP);
  cartTotalEl.textContent = calculateTotal().toFixed(2);
  
  // Habilitar/deshabilitar botón checkout según contenido del carrito
  checkoutBtn.disabled = CART.length === 0;
  checkoutBtn.style.opacity = CART.length === 0 ? '0.5' : '1';
}

checkoutBtn.addEventListener('click', () => {
  // Verificar que el carrito no esté vacío antes de abrir checkout
  if (CART.length === 0) {
    Swal.fire('Carrito vacío', 'Agrega productos al carrito antes de proceder al checkout', 'info');
    return;
  }
  
  checkoutModal.classList.remove('hidden');
  // Precargar datos de ejemplo
  document.getElementById('customer-name').value = 'Agustín Rodríguez';
  document.getElementById('customer-email').value = 'agustin@example.com';
  document.getElementById('customer-address').value = 'Montevideo, Uruguay';
});

cancelCheckout.addEventListener('click', ()=> checkoutModal.classList.add('hidden'));

// PROCESO DE CHECKOUT - Simulación completa de compra
checkoutForm.addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('customer-name').value;
  const email = document.getElementById('customer-email').value;
  const address = document.getElementById('customer-address').value;
  const total = calculateTotal();
  if(CART.length===0){ Swal.fire('Carrito vacío','Agrega productos antes de pagar','info'); return; }

  Swal.fire({title:'Procesando pago...',didOpen:()=>{Swal.showLoading();}});
  setTimeout(()=>{
    Swal.close();
    Swal.fire('Compra confirmada',`Gracias ${name}. Total: $${total.toFixed(2)}`,'success');
    CART = [];
    persistCart();
    updateCartUI();
    checkoutModal.classList.add('hidden');
  },800);
});

init();
