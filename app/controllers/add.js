import Ember from 'ember';

export default Ember.Controller.extend({
  status: false,
  message: '',
	actions: {
      submit() {
        console.log(this.get('marca'));
        console.log(this.get('modelo'));
        console.log(this.get('peso'));
        console.log(this.get('precio'));
        console.log(this.get('descripcion'));
        console.log(this.get('fCaducidad'));
        
        this.set('message', `Has dado de alta el pienso ${this.marca}`);
        this.set('status', true);
      }
    }
});