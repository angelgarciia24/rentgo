const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empresa = require('./Empresa');

const Coche = sequelize.define('Coche', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Empresa,
            key: 'id'
        }
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    año: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING
    },
    transmision: {
        type: DataTypes.ENUM('Manual', 'Automático'),
        allowNull: false
    },
    precio_diario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    imagenes: {
        type: DataTypes.JSON
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'coches',
    timestamps: false
});

Coche.belongsTo(Empresa, { foreignKey: 'empresa_id' });

module.exports = Coche;
