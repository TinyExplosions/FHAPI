define([
    'underscore',
    'backbone',
    'text!templates/WebViewTemplate.html'
], function(_, Backbone, WebViewTemplate){

    var HomeView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        events: {
            "click a.webview": "openWebview",
            "click a.external": "openExternal"
        },

        render: function() {
            var compiledTemplate = _.template( WebViewTemplate, {} );
            this.$el.html( compiledTemplate );
            return this;
        },

        openWebview: function(evt) {
            evt.preventDefault();
            $fh.webview({
                "url": evt.target.href,
                "title": evt.target.title
            }, function(res){}, function(res){});
        },

        openExternal: function(evt) {
            evt.preventDefault();
            window.open(evt.target.href, "_system");
        }
    });
    return HomeView;

});