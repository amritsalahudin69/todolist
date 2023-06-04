import {Sequelize} from 'sequelize';
import {config} from "../../config/dbconfig";

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    define: {
        underscored: true,
    }
})


module.exports = sequelize