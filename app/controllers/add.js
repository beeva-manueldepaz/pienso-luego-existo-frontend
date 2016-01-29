import Ember from 'ember';

export default Ember.Controller.extend({
  status: false,
  message: '',
  actions: {
    submit() {

      console.log(`Dando de alta el pienso ${this.get('marca')}`);
      console.log(this.get('marca'));
      console.log(this.get('modelo'));
      console.log(this.get('peso'));
      console.log(this.get('precio'));
      console.log(this.get('descripcion'));
      console.log(this.get('fCaducidad'));

      var pienso = this.get('store').createRecord('pienso', {
        marca: this.get('marca'),
        modelo: this.get('modelo'),
        peso: this.get('peso'),
        precio: this.get('precio'),
        descripcion: this.get('descripcion'),
        fCaducidad: this.get('fcaducidad')
      });

      pienso.save().then(function(data) {
        this.set('message', `Creando nuevo registro ${this.get('marca')}`);
        this.set('status', true);
      });
    }
  }
});
