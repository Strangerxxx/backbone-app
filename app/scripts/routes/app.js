/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '' : 'home',    // trigger the route home
            '#/login' : 'login'    // trigger the login template
            // 'users/:id' // match user id
            // 'users/*id' // match anything
            //'users/:'
        }
    });

    return AppRouter;
});
