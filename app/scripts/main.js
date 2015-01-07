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
    'routers/app',
    'collections/app',
    'views/login',
    'views/top-bar',
    'views/side-bar',
    'views/page'
], function (
    Backbone,
    AppRouter,
    AppCollection,
    LoginWidget,
    TopBarWidget,
    SideBarWidget,
    PageView
){
    var appCollection = new AppCollection();
    var router = new AppRouter();
    var containter = $('body > div.container');

    router.on('route:login', function () {
        var loginWidget =  LoginWidget({model: appCollection});
        loginWidget.render();
        containter.append(loginView.$el);
    });
    router.on('route:home', function () {
        var 
    });

    Backbone.history.start();
});



//require([
//    'backbone'
//], function (Backbone) {
//    Backbone.history.start();
//});
