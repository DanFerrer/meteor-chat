if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function() {
      return Messages.find({}, { sort: { time: -1}});
    }
  });

  Template.body.events({
    "submit .new-message": function(event) {
      event.preventDefault();
      var name = Meteor.user() ? Meteor.user().profile.name : 'AnonymousUser' + Math.floor((Math.random() * 1000000000000) + 1);;
      var message = event.target.text.value;
      if (message.value != "") {
        Messages.insert({
          name: name,
          message: message,
          time: Date.now().toString()
        });
      }
      event.target.text.value = "";
    }
  });
}