/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        collections: '../scripts/collections',
        models: '../scripts/models',
        views: '../scripts/views',
        routers: '../scripts/routes',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap_sass: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
    }
});

require([
    'backbone',
    'collections/app',
    'collections/users',
    'models/app',
    'models/user',
    'views/app',
    'views/login',
    'routers/app'
], function (
    Backbone,
    AppCollection,
    UserCollection,
    AppModel,
    UserModel,
    AppView,
    LoginView,
    AppRouter
){
    var appCollection = new AppCollection();

    var appModel = new AppModel();

    var appView = new AppView({model: appCollection});

    var userCollection = new UserCollection();

    var userModel = new UserModel();

    var loginView = new LoginView({model: userCollection});

    var router = new AppRouter();


    console.log(loginView);

    router.on('route:home', function () {
        appView.render();
        //loginView.render();
        $('#top-menu').append( appView.$el );
        //$('#user-login').append( loginView.$el );
        console.log('appView');
        console.log(appView)
    });

    router.on('route:login', function () {
        loginView.render();
        $('#user-login').append( loginView.$el );
        console.log('loginView');
        console.log(loginView)
    });

    Backbone.history.start();
});


//require([
//    'backbone'
//], function (Backbone) {
//    Backbone.history.start();
//});
