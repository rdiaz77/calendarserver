// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Teams extends Model{}

Teams.init({
    team_id: { 
        type: DataTypes.SMALLINT, 
        primaryKey: true,   
        autoIncrement: true,
        allowNull: false
    },
    team_name: { 
        type: DataTypes.CHAR, 
        allowNull: false 
    },
    }, {
        sequelize,                           
        modelName: 'Teams',
        tableName: 'Teams',
        timestamps: false
    })
    

// EXPORT
module.exports = Teams
