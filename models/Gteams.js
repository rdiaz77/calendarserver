// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class Gteams extends Model{}

Gteams.init({
    guest_team_id: { 
        type: DataTypes.SMALLINT, 
        primaryKey: true,   
        autoIncrement: true,
        allowNull: false
    },
    guest_team: { 
        type: DataTypes.SMALLINT, 
        allowNull: false 
    },
    }, {
        sequelize,                           
        modelName: 'Gteams',
        tableName: 'Gteams',
        timestamps: false
    })
    

// EXPORT
module.exports = Gteams
