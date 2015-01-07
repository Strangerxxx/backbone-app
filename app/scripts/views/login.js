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

        tagName: 'div',

        id: '',

        className: 'user-login-form input-group',

        events: {
        },
            //'submit .user-login': 'userLogin'

        //userLogin: function (ev) {
        //    var userDetails = $(ev.currentTarget);
        //    console.log(userDetails);
        //
        //},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return LoginView;

});
