/*global define*/

define([
    'underscore',
    'backbone',
    'models/app'
], function (_, Backbone, UserModel) {
    'use strict';

    var UserCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return UserCollection;
});

