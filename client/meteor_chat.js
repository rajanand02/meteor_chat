Meteor.Router.add({
  '/': 'home',
  '/rooms/:id': 'room'
});
var rooms = [
  {name: 'Rails Development', members: 6, last_activity: '1 minute ago'},
  {name: 'Meteor Development', members: 2, last_activity: '5 minutes ago'},
  {name: 'Rails Core', members: 0, last_activity: '3 days ago'},
  {name: 'Meteor Core', members: 3, last_activity: '6 days ago'}
];
 
Template.rooms.helpers({
  rooms: rooms
});
