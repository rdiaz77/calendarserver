require('dotenv').config()
console.log(process.env)
const express = require('express');
const server = express();
const { Sequelize } = require('sequelize');
const PORT = 3000;
const envConfigs = require('./config/config.json')
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env]


server.get('/', (req,res)=> res.send('INDEX') );


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully with the heroku DB.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


server.listen(PORT, console.log(`server started on ${PORT}`))
