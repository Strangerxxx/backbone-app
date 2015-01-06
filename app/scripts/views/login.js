/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],

        tagName: 'form',

        id: 'login-form',

        className: 'user-login',

        events: {},

        //userLogin: function (ev) {
        //    var userDetails = $(ev.currentTarget);
        //    console.log(userDetails);
        //},

        initialize: function () {
            console.log('from init', this);
            this.listenTo(this.model, 'change', this.render);
        },


        render: function () {
            var template = _.template($('#user-login').html(), {});
            this.$el.html(template);
        }

        //render: function () {
        //    console.log('Rendering LOGIN!');
        //    this.$el.html(this.template(this.model.toJSON()));
        //}
    });
    return LoginView;

});
