const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Coche = require('./coche');

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    coche_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Coche,
            key: 'id'
        }
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada', 'finalizada'),
        defaultValue: 'pendiente'
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reservas',
    timestamps: false
});

Reserva.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Reserva.belongsTo(Coche, { foreignKey: 'coche_id' });

module.exports = Reserva;
