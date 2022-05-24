// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

// MODEL
class Location extends Model{}

Location.init({
    location_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,  
        allowNull: false
    },
    venue_name: { 
        type: DataTypes.CHAR, 
        allowNull: false 
    },
    city: { 
        type: DataTypes.CHAR, 
        allowNull: false 
    },
    }, {
        sequelize,                           
        modelName: 'Location',
        tableName: 'Location',
        timestamps: false
    })
    

// EXPORT
module.exports = Location
