/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.ejs'],

        tagName: 'div',

        id: '',

        className: 'sidebar-nav',

        events: {
            'click #menu-toggle': 'toggle'
        },

        toggle: function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            if ( ( ".toggled" ) ) {
                $( "#toggle-left" ).removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
            } else
                $( "#toggle-left" ).removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");
        },


        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
    return SidebarView;

});
