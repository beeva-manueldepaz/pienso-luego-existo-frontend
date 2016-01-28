import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    //return Ember.$.getJSON('http://localhost:3000/piensos/');
    return this.store.findRecord('pienso', 1).then(function(success) {
      console.log(success)
    });
  }
});
