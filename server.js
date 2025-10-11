// Servidor HTTP simple para desarrollo
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_DIR = __dirname;

// MIME types para diferentes archivos
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(BASE_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Verificar si el archivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Archivo no encontrado</h1>');
      return;
    }
    
    // Obtener la extensión del archivo
    const ext = path.extname(filePath);
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    
    // Leer y servir el archivo
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Error interno del servidor</h1>');
        return;
      }
      
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('Presiona Ctrl+C para detener el servidor');
});