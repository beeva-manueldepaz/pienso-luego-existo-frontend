import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
      submit() {
        console.log(this.get('marca'));
        console.log(this.get('modelo'));
        console.log(this.get('peso'));
        console.log(this.get('precio'));
        console.log(this.get('descriṕcion'));
        console.log(this.get('fCaducidad'));
      }
    }
});
