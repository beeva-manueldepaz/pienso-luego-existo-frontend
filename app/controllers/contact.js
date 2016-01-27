import Ember from 'ember';

export default Ember.Controller.extend({

  subject: '',

  actions: {
    submit() {

      alert(this.get('subject'));

      //this.toggleProperty('isExpanded');
    },
    validat(){
      alert('b');
    }
  }
});
