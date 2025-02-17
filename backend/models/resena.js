const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Coche = require('./coche');

const Resena = sequelize.define('Resena', { // Cambiado a 'Resena' sin Ñ
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
    puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    comentario: {
        type: DataTypes.TEXT
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reseñas',
    timestamps: false
});

// 🔹 Aquí estaba el problema: "Reseña" no existía antes de esta línea
Resena.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Resena.belongsTo(Coche, { foreignKey: 'coche_id' });

module.exports = Resena;
