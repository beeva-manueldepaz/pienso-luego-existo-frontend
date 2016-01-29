import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('pienso').then(function(success) {
      return success;
    });
  }
});
