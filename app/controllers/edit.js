import Ember from 'ember';

export default Ember.Controller.extend({

	status: false,
  message: '',
	actions: {
      submit() {
        //this.set('message', `Has actualizado el pienso ${this.marca} correctamente`);
        //this.set('status', true);
        console.log('Valores recibidos');
        console.log(this.get('model.marca'));
        console.log(this.get('model.modelo'));
        console.log(this.get('model.peso'));
        console.log(this.get('model.precio'));
        console.log(this.get('model.descripcion'));
        console.log(this.get('model.fCaducidad'));

        var pienso = this.get('model.store').createRecord('pienso', {
          marca: this.get('model.marca'),
          modelo: this.get('model.modelo'),
          peso: this.get('model.peso'),
          precio: this.get('model.precio'),
          descripcion: this.get('model.descripcion'),
          fCaducidad: this.get('model.fcaducidad')
        });

        pienso.save().then(function(data) {
          this.set('message', `Creando nuevo registro ${this.get('model.marca')}`);
          this.set('status', true);
        });
      }
  }
});
