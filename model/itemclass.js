var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize');

var ItemClass = sequelize.define('ItemClass', {
    alias:Sequelize.STRING,
    create_time:Sequelize.DATE
}, {
    tableName:'weshop_item_class',
    timestamps:false
});

module.exports = ItemClass;