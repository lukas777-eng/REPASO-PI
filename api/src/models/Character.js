const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,  //me genera automáticamente un UUIDV4 que es un datatype de Sequelize
      allowNull: false,                 //no se permite que este campo esté vacío, o sea, es un campo requerido
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
