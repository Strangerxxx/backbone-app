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

        className: 'container',

        events: {
            'submit .user-login': 'userLogin'
        },

        userLogin: function (ev) {
            var userDetails = $(ev.currentTarget);
            console.log(userDetails);
            alert(userDetails);
            return false;
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return LoginView;

});

