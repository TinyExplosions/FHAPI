define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var UserModel = Backbone.Model.extend({
        actRoot: "User",
        idAttribute: "userID",

        defaults: {
            fullName: "",
            surname: "",
            preferredName: ""
        }
    });
    return UserModel;
});