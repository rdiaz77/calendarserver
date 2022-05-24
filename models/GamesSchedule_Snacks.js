// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class GamesSchedule_Snacks extends Model{}

GamesSchedule_Snacks.init({
    gameschedulesnacks_id: { 
        type: DataTypes.SMALLINT, 
        primaryKey: true, 
        autoIncrement: true,  
        allowNull: false
    },
    player_snack_id: { 
        type: DataTypes.SMALLINT
    },
    game_schedule_id: { 
        type: DataTypes.SMALLINT 
    },
    }, {
        sequelize,                           
        modelName: 'GamesSchedule_Snacks',
        tableName: 'GamesSchedule_Snacks',
        timestamps: false
    })
    
// EXPORT
module.exports = GamesSchedule_Snacks
