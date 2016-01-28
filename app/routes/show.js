import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'pienso',
        attributes: {
          marca: "Purina",
          modelo: "Junior Pro",
          peso: 2.5,
          precio: 5.99,
          descripcion: "Indicado para perros jovenes",
          fCaducidad: "1453912360",
          logo: "sdfasdfasf"
        }
      }]
    })
  }
});
