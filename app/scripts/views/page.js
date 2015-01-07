/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ContentView = Backbone.View.extend({
        template: JST['app/scripts/templates/content.ejs'],

        tagName: 'div',

        id: '',

        className: 'container-fluid',

        events: {
        },


        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return ContentView;

});
