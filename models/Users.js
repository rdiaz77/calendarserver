const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class User extends Model{}

User.init({
    user_id: { 
        type: DataTypes.SMALLINT, 
        autoIncrement: true,
        primaryKey: true,   
        allowNull: false
    },
    first_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    last_name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes. STRING,
        allowNull: false
    },
    team_id:{
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    player_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },

    }, 
    {
        sequelize,                           
        modelName: 'User',
        tableName: 'Users',
        timestamps: true
    })
    

// EXPORT
module.exports = User
