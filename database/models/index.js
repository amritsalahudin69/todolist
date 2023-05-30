const User = require('./user.model');
const Enduser = require('./endusers.model');

User.belongsTo(UserStatus,{foreignKey:'id_status'});
UserStatus.hasOne(User,{foreignKey:'id_status'});

module.exports = {
    User,
    Enduser
}