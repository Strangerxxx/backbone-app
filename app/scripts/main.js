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
    'views/login',
    'views/nav',
    'views/sidebar',
    'views/content',
    'routers/app'
], function (
    Backbone,
    AppCollection,
    UsersCollection,
    AppModel,
    UserModel,
    LoginView,
    NavView,
    SidebarView,
    ContentView,
    AppRouter
){
    var appModel = new AppModel();
    var userModel = new UserModel();

    var appCollection = new AppCollection();
    var usersCollection = new UsersCollection();

    var navView = new NavView({model: appCollection});
    var loginView = new LoginView({model: usersCollection});
    var sidebarView = new SidebarView({model: appCollection});
    var contentView = new ContentView({model: appCollection});

    var router = new AppRouter();

    router.on('route:login', function () {
        $('#wrapper').remove();
        navView.render();
        loginView.render();
        $('#top-menu').append( navView.$el );
        $('#user-login').append( loginView.$el );
    });

    router.on('route:home', function () {
        navView.render();
        sidebarView.render();
        contentView.render();
        $('#top-menu').append( navView.$el );
        $('#sidebar-wrapper').append( sidebarView.$el );
        $('#page-content-wrapper').append( contentView.$el );
        //$('#wrapper').append( contentView.$el );
        // Скрыть/Показать боковое меню

    });

    Backbone.history.start();
});



//require([
//    'backbone'
//], function (Backbone) {
//    Backbone.history.start();
//});
