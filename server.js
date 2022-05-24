const express = require('express');
const server = express();
const { Sequelize } = require('sequelize');
const PORT = 3000;

server.get('/', (req,res)=> res.send('INDEX') );


const sequelize = new Sequelize('SportCalendar', 'postgres', 'Asturias171#', {
    host: 'localhost',
    dialect:  'postgres' 
  });
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully with the DB.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


server.listen(PORT, console.log(`server started on ${PORT}`))
