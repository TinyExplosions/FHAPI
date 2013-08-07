define([
    'underscore',
    'backbone',
    'models/UserModel'
], function(_, Backbone, UserModel){
    var UserCollection = Backbone.Collection.extend({

        model: UserModel,
        actRoot: "UserList",

        initialize: function(models, options) {
        }

    });

    return UserCollection;

});