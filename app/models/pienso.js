import DS from 'ember-data';

export default DS.Model.extend({
  marca: DS.attr('string'),
  modelo: DS.attr('string'),
  peso: DS.attr('number'),
  precio: DS.attr('number'),
  descripcion: DS.attr('string'),
  fCaducidad:  DS.attr('date')
});
