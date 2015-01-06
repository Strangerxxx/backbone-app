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

        id: '',

        className: 'user-login-form',

        events: {
        },
            //'submit': 'userLogin'

        //userLogin: function (ev) {
        //    var userDetails = $(ev.currentTarget);
        //    console.log(userDetails);
        //},

        initialize: function () {
            console.log('from init', this);
            this.listenTo(this.model, 'change', this.render);
        },


        render: function () {
            console.log('Rendering LOGIN!');
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return LoginView;

});
