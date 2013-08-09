// Require.js allows us to configure shortcut alias
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        backbone: 'libs/backbone/backbone-min',
        underscore: 'libs/underscore/underscore-min',
        hammer: 'libs/hammer/jquery.hammer.min',
        templates: '../templates',
        machina: 'libs/machina/machina',
        sync: 'sync/fhSync',
        moment: '../moment'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'moment': {
            exports: 'moment'
        }
    }
});

require([
    // Load our app module and pass it to our definition function
    'app','moment'
], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    window.App = App;
    $fh.ready({}, function() {
        console.log("init app");
        App.initialize();
    });
});
