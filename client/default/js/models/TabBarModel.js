define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var TabBarModel = Backbone.Model.extend({
    // We can pass it default values.
    defaults : {
        items: [
            {
                title: "Home",
                href: "#home",
                icon: "icon-home.png"
            },
            {
                title: "Authentication",
                href: "#auth",
                icon: "icon-profile.png"
            },
            {
                title: "Actions",
                href: "#act",
                icon: "icon-settings.png"
            },
            {
                title: "Database",
                href: "#db",
                icon: "icon-settings.png"
            },
            {
                title: "WebView",
                href: "#webview",
                icon: "icon-settings.png"
            }
        ]
    }
  });
  return TabBarModel;
});