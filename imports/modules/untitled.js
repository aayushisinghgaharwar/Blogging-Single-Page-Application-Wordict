Meteor.publish('rooms', function () {
  return Rooms.find({}, {
    fields: { secretInfo: 0 }
  });
});
  return [Careers.find(), Meteor.users.find(query, fields)];
let handle = Meteor.subscribe('collectionsForCareersEditor');
    if (handle.ready()) {
      data.users = Meteor.users.find({},{sort: {username: 1}}).fetch();
      data.careers = Careers.find().fetch();
    }