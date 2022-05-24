// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Players_Snacks extends Model{}

Players_Snacks.init({
    player_snacks_id: { 
        type: DataTypes.SMALLINT, 
        primaryKey: true,  
        autoIncrement: true, 
        allowNull: false
    },
    player_id: { 
        type: DataTypes.SMALLINT, 
        allowNull: false 
    },
    snack_id: { 
        type: DataTypes.SMALLINT, 
        allowNull: false 
    },
    }, {
        sequelize,                           
        modelName: 'Players_Snacks',
        tableName: 'Players_Snacks',
        timestamps: false
    })
    

// EXPORT
module.exports = Players_Snacks
