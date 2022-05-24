// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class GamesSchedule extends Model{}

GamesSchedule.init({
    game_schedule_id: { 
        type: DataTypes.SMALLINT, 
        primaryKey: true,   
        allowNull: false
    },
    hteam: { 
        type: DataTypes.SMALLINT, 
        allowNull: false 
    },
    gteam: { 
        type: DataTypes.SMALLINT, 
        allowNull: false 
    },
    schedule_id: { 
        type: DataTypes.SMALLINT,
    },
    }, {
        sequelize,                           
        modelName: 'GamesSchedule',
        tableName: 'GamesSchedule',
        timestamps: false
    })
    

// EXPORT
module.exports = GamesSchedule
