import {Model, Datatypes} from 'sequelize';
import sequelize from './sequelize'
class users extends Model{

}
user.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    name: {
        type: DataTypes.STRING
        },
    code: {
        type: DataTypes.STRING
        }
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'sys_users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= users