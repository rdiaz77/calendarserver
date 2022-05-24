const express = require('express');
const server = express();
const PORT = 3000;

server.get('/', (req,res)=> res.send('INDEX') );


// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });



server.listen(3000, console.log(`server started on ${PORT}`))