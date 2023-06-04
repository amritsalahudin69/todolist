import {UserModels} from './users.model';
import {TitleModels} from './tltle.model';
import {ActivitiesModels} from './activities.model';

UserModels.belongsTo(TitleModels,{foreignKey:'user_id'});
ActivitiesModels.hasOne(UserModels,{foreignKey:'user_id'});

ActivitiesModels.belongsTo(ActivitiesModels, {foreignKey: 'title_id'});
ActivitiesModels.hasOne(ActivitiesModels, {foreignKey:'title_id'})

module.exports = {
    UserModels,
    TitleModels,
    ActivitiesModels
}