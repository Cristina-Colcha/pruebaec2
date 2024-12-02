const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Ruta API
app.get('/api/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `Hola, ${nombre}! Espero que tengas un excelente día.🌟` });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
