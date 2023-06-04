import {Model, Datatypes} from 'sequelize';
import sequelize from './sequelize'


class activities extends Model{

}

activities.init(
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    nameActiviti: {
        type: DataTypes.STRING
        },
    title_id: {
        type: DataTypes.INTEGER,
        allowNull : true,
        field : "title_id"
        }
    },
    {
    //parameter settingan
    sequelize: sequelize, //hasil import dari const sequelize = require('./sequelize')
    tableName:'sys_activities',
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    }
)

module.exports= activities