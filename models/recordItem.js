const { DataTypes } = require('sequelize');//import mongoose from 'mongoose';
const sequelize  = require('../database.js');

const RecordItem = sequelize.define('RecordItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
        //unique: true
    }
});



module.exports =  RecordItem