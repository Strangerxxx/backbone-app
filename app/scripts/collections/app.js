/*global define*/

define([
    'underscore',
    'backbone',
    'models/app'
], function (_, Backbone, AppModel) {
    'use strict';

    var AppCollection = Backbone.Collection.extend({
        model: AppModel
    });

    return AppCollection;
});
