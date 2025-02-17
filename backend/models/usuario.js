const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto_perfil: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.ENUM('cliente', 'empresa', 'admin'),
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;
