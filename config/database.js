const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306, // Asegura que el puerto tenga un valor
        dialect: process.env.DB_DIALECT || 'mysql', // Usa 'mysql' como valor por defecto
        logging: false // Desactiva logs de SQL en consola (opcional)
    }
);

// Verificar conexión
sequelize.authenticate()
    .then(() => console.log('✅ Conexión a la base de datos exitosa'))
    .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;

