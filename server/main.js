import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/api/Bins';


Meteor.startup(() => {
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: Meteor.userId() });
  });


  Meteor.publish('sharedBins', function() {
    const user = Meteor.users.findOne(this.userId)
    if(!user) { return; }
    const email = user.emails[0].address;
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });

  // THIS WAS TO CLEAR OUT ALL THE BINS THAT WERE AUTOMATICALLY CREATED
  // Meteor.methods({
  //   'remove.allBins': function() {
  //     return Bins.remove({})
  //   }
  // })

});
