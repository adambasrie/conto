// Import module http bawaan Node.js
const http = require('http');

// Buat server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Halo dari Node.js!, Hello Wolrd');
});

// Jalankan server di port 3000
server.listen(3002, () => {
    console.log('Server berjalan di http://localhost:3000');
});
