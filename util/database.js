const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-complete', 'andres', 'anfeques', { 
    dialect: 'mariadb', 
    host: 'localhost'
});

module.exports = sequelize;

// const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//         host: 'localhost',
//         user: 'andres',
//         password: 'anfeques',
//         database: 'node-complete',
//         connectionLimit: 5 // Example connection limit
//     });

// module.exports = pool;