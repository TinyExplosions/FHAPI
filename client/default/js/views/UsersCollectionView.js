define([
  'jquery',
  'underscore',
  'backbone',
  'collections/UserCollection',
  'views/UserListView'
], function($, _, Backbone, UserCollection, UserListView){

    var UsersCollectionView = Backbone.View.extend({

        initialize : function() {
           var self = this;
            _(this).bindAll('add', 'remove');

            // create an array of user views to keep track of children
            this._userListViews = [];

            if(this.collection) {
                // add each user to the view
                this.collection.each(this.add);
            } else {
                this.collection = new UserCollection();
                this.collection.fetch();
            }

            // bind this view to the add and remove events of the collection!
            this.collection.bind('add', this.add);
            this.collection.bind('remove', this.remove);
        },

        add : function(user) {
            // We create an updating user view for each user that is added.
            var li = new UserListView({
                tagName : 'li',
                model : user
            });

            // And add it to the collection so that it's easy to reuse.
            this._userListViews.push(li);

            // If the view has been rendered, then
            // we immediately append the rendered user.
            if (this._rendered) {
                $(this.el).append(li.render().el);
            }
        },

        remove : function(model) {
            var removeItem = _(this._userListViews).select(function(item) {return item.model === model;})[0];
            this._userListViews = _(this._userListViews).without(removeItem);

            if (this._rendered) {
                $(removeItem.el).remove();
            }
        },

        render : function() {
            this._rendered = true;

            $(this.el).empty();

            // Render each UserListView and append them.
            //render all views, then add to el
            var userList = [];
            _(this._userListViews).each(function(li) {
                userList.push(li.render().el);
            });
            $(this.el).append(userList);

            return this;
        }
  });

  return UsersCollectionView;

});


