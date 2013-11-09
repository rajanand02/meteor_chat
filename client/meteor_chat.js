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
Template.messages.messages = function(){
  return Messages.find({}, { sort: { time: -1}});
}

Template.input.events = {
  'keydown input#message' : function (event){
    if (event.which == 13){
      if (Meteor.user())
        var name = Meteor.user().profile.name;
      else
        var name = "Anonymous";
      var message = document.getElementById('message');

      if (message.value != ''){
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}
