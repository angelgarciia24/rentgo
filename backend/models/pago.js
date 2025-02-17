const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Reserva = require('./reserva');

const Pago = sequelize.define('Pago', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    reserva_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Reserva,
            key: 'id'
        }
    },
    metodo_pago: {
        type: DataTypes.ENUM('tarjeta', 'paypal', 'transferencia'),
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'completado', 'fallido'),
        defaultValue: 'pendiente'
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_pago: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'pagos',
    timestamps: false
});

Pago.belongsTo(Reserva, { foreignKey: 'reserva_id' });

module.exports = Pago;
