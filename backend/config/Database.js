import { Sequelize } from "sequelize";

const db = new Sequelize({
    database: 'rumah_sakitdb',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
});

(async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


export default db;