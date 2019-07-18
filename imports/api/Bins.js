import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'bins.create': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: Meteor.userId()
        });
    },

    'bins.remove': function(bin) {
       return Bins.remove(bin)
    },

    'bins.update': function(bin, content) {
        return Bins.update(bin._id, { $set: { content }});
    },

    'bin.share': function(bin, email) {
        return Bins.update(bin._id, { $push: { sharedWith: email }});
    }
})

export const Bins = new Mongo.Collection('bins');
