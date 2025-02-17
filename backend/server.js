const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenido a RentGo API 🚗');
});

// Sincronizar Base de Datos
sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error al sincronizar:', err));

// Puerto de conexión
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
