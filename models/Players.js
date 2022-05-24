// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class Player extends Model{}

GamesSchedule.init({
    player_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true, 
        allowNull: false
    },
    first_name: { 
        type: DataTypes.CHAR, 
        allowNull: false 
    },
    last_name: { 
        type: DataTypes.CHAR, 
        allowNull: false 
    },
    dob: { 
        type: DataTypes.DATE,
        allowNull: false
    },
    allergy_status: { 
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    team_id: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    }, {
        sequelize,                           
        modelName: 'Player',
        tableName: 'Player',
        timestamps: false
    })
    

// EXPORT
module.exports = Player
