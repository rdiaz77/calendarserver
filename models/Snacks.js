// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class Snacks extends Model{}

GamesSchedule.init({
    snack_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,   
        autoIncrement: true,
        allowNull: false
    },
    name: { 
        type: DataTypes.CHAR, 
        allowNull: false 
    },
    }, {
        sequelize,                           
        modelName: 'Snacks',
        tableName: 'Snacks',
        timestamps: false
    })
    

// EXPORT
module.exports = Snacks
