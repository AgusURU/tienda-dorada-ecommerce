# Proyecto Final: Simulador I### 📁 Estructura del Proyecto

```
ProyectoFinal-Rodriguez/
├── index.html              # Página principal
├── products.json           # Datos de productos (JSON) - Compatible GitHub Pages
├── README.md               # Documentación del proyecto
├── server.js               # Servidor HTTP para desarrollo local
├── .gitignore              # Archivos excluidos de Git
├── assets/
│   └── taza.png           # Imagen de ejemplo
├── data/
│   └── products.json      # Copia original de datos JSON
├── src/
│   ├── app.js             # Lógica principal de la aplicación
│   ├── api.js             # Simulación de API con fetch JSON
│   └── components/
│       ├── cart.js        # Renderizado del carrito
│       └── productCard.js # Generación de tarjetas de productos
└── styles/
    └── styles.css         # Estilos CSS (verde y dorado)
```rce
## Autor: Agustín Rodriguez

###  Descripción del Proyecto

Este es un simulador interactivo de Ecommerce desarrollado en JavaScript que permite a los usuarios:
- Navegar por un catálogo de productos
- Agregar productos al carrito de compras
- Gestionar cantidades y eliminar productos del carrito
- Realizar el proceso completo de checkout
- Persistir el carrito en localStorage

###  Objetivos Cumplidos

 **Simulador Interactivo**: Ecommerce funcional con proceso completo de compra
 **Datos Remotos**: Productos cargados desde archivo JSON de forma asíncrona
 **HTML Interactivo**: Todo el contenido generado dinámicamente desde JavaScript
 **Herramientas JS**: Uso de ES6 modules, async/await, fetch API, DOM manipulation
 **Librerías Externas**: SweetAlert2 para reemplazar alert/prompt/confirm
 **Lógica de Negocio**: Proceso completo desde catálogo hasta compra

###  Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsive con CSS Grid y Flexbox
- **JavaScript ES6+**: Módulos, async/await, destructuring
- **SweetAlert2**: Librería para notificaciones y alertas
- **LocalStorage**: Persistencia de datos del carrito

###  Estructura del Proyecto

```
ProyectoFinal-Rodriguez/
├── index.html              # Página principal
├── README.md               # Documentación
├── server.js               # Servidor HTTP simple para desarrollo
├── assets/
│   └── placeholder-product.jpg  # Imágenes de productos
├── data/
│   └── products.json       # Base de datos simulada de productos
├── src/
│   ├── app.js              # Archivo principal de la aplicación
│   ├── api.js              # Funciones para manejo de API
│   └── components/
│       ├── cart.js         # Componente del carrito
│       └── productCard.js  # Componente de tarjeta de producto
└── styles/
    └── styles.css          # Estilos CSS
```

###  Funcionalidades Principales

1. **Catálogo de Productos**
   - Carga asíncrona desde JSON
   - Renderizado dinámico de tarjetas
   - Información de precio y stock

2. **Carrito de Compras**
   - Agregar productos con validación de stock
   - Modificar cantidades
   - Eliminar productos
   - Cálculo automático de totales
   - Persistencia en localStorage

3. **Proceso de Checkout**
   - Formulario con validación
   - Datos precargados de ejemplo
   - Simulación de procesamiento de pago
   - Confirmación de compra

4. **Interactividad Avanzada**
   - Event delegation para eventos dinámicos
   - Notificaciones con SweetAlert2
   - Actualizaciones asíncronas del DOM

###  Criterios de Evaluación Cumplidos

####  Funcionalidad
- Simula el flujo completo entrada-procesamiento-salida
- Sin errores de cómputo
- Validaciones de stock y datos

####  Interactividad
- Captura de eventos con inputs adecuados
- Salidas coherentes con los datos ingresados
- Visualización asíncrona en HTML

####  Escalabilidad
- Funciones parametrizadas con tareas específicas
- Objetos con propiedades y métodos relevantes
- Arrays para agrupar datos dinámicamente
- Recorrido óptimo de colecciones

####  Integridad
- Código JavaScript en archivos .js separados
- Referenciado correctamente desde HTML
- Información JSON cargada de forma asíncrona

####  Legibilidad
- Variables, funciones y objetos con nombres significativos
- Código legible y bien estructurado
- Comentarios JSDoc oportunos
- Código ordenado y secuencial

###  Características Técnicas

- **Modular**: Código organizado en módulos ES6
- **Asíncrono**: Carga de datos con fetch API
- **Responsive**: Diseño adaptable a diferentes pantallas
- **Accesible**: Elementos semántticos y atributos ARIA
- **Performante**: Event delegation y optimizaciones DOM

###  Autor

**Agustín Rodriguez**  
Curso: JavaScript - CoderHouse  
Proyecto Final - 2025

**Nombre del repositorio/zip**: `ProyectoFinal+Rodriguez`
