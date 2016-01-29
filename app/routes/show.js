import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.findRecord('pienso', params.id).then(function(success) {
      console.log(params);
    	return success;
    });
  }
});
