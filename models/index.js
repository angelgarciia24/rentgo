const sequelize = require('../config/database');

const Usuario = require('./usuario');
const Empresa = require('./Empresa');
const Coche = require('./coche');
const Reserva = require('./reserva');
const Pago = require('./Pago');
const Reseña = require('./Reseña');

// Relaciones
Usuario.hasOne(Empresa, { foreignKey: 'usuario_id' });
Empresa.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Empresa.hasMany(Coche, { foreignKey: 'empresa_id' });
Coche.belongsTo(Empresa, { foreignKey: 'empresa_id' });

Usuario.hasMany(Reserva, { foreignKey: 'usuario_id' });
Reserva.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Coche.hasMany(Reserva, { foreignKey: 'coche_id' });
Reserva.belongsTo(Coche, { foreignKey: 'coche_id' });

Reserva.hasOne(Pago, { foreignKey: 'reserva_id' });
Pago.belongsTo(Reserva, { foreignKey: 'reserva_id' });

Usuario.hasMany(Reseña, { foreignKey: 'usuario_id' });
Coche.hasMany(Reseña, { foreignKey: 'coche_id' });
Reseña.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Reseña.belongsTo(Coche, { foreignKey: 'coche_id' });

module.exports = { sequelize, Usuario, Empresa, Coche, Reserva, Pago, Reseña };
