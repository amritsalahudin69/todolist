import {Model, Datatypes} from 'sequelize';
import sequelize from './sequelize'

class title extends Model{

}

title.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    title: {
        type: DataTypes.STRING
        },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull : true,
        field : "user_id"
        },
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'sys_title',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= title