// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Users extends Model{}

Users.init({
    user_id: { 
        type: DataTypes.SMALLINT, 
        autoIncrement: true,
        primaryKey: true,   
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
    email: { 
        type: DataTypes.CHAR,
        allowNull: false
    },
    dob: { 
        type: DataTypes.DATE,
        allowNull: false
    },
    username: { 
        type: DataTypes.CHAR,
        allowNull: false
    },
    password: { 
        type: DataTypes.CHAR,
        allowNull: false
    },
    team_id: { 
        type: DataTypes.SMALLINT,
    },
    player_id: { 
        type: DataTypes.SMALLINT,
    },
    }, {
        sequelize,                           
        modelName: 'Users',
        tableName: 'Users',
        timestamps: false
    })
    

// EXPORT
module.exports = Users
