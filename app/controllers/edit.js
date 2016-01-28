import Ember from 'ember';

export default Ember.Controller.extend({

	marca: 'McPerris',
	modelo: 'Plus',
	peso: 20,
	precio: 100,
	descripcion: 'Para los más perros',
	fCaducidad: '12/9/2016',

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
        
        this.set('message', `Has actualizado el pienso ${this.marca} correctamente`);
        this.set('status', true);
      }
    }
});
