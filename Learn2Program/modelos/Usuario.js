const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const IntentoTest = require("./IntentoTest");
const Recordatorios = require("./Recordatorios"); // Asegúrate de que el nombre coincide con el modelo

const Usuario = sequelize.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    tableName: "usuario",
    timestamps: false
});

// Relación 1:N con IntentoTest
Usuario.hasMany(IntentoTest, { foreignKey: "idUsuario", onDelete: "CASCADE" });
IntentoTest.belongsTo(Usuario, { foreignKey: "idUsuario" });

// Relación 1:N con Recordatorios



module.exports = Usuario;
