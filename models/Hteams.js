// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class Hteams extends Model{}

Hteams.init({
    hteam_id: { 
        type: DataTypes.SMALLINT, 
        primaryKey: true,
        autoIncrement: true,   
        allowNull: false
    },
    home_team: { 
        type: DataTypes.SMALLINT, 
        allowNull: false 
    },
    }, {
        sequelize,                           
        modelName: 'Hteams',
        tableName: 'Hteams',
        timestamps: false
    })
    

// EXPORT
module.exports = Hteams
