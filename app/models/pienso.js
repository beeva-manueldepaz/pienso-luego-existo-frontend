import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('number'),
  marca: DS.attr('string'),
  modelo: DS.attr('string'),
  peso: DS.attr('number'),
  precio: DS.attr('number'),
  descripcion: DS.attr('string'),
  fCaducidad:  DS.attr('string'),
  logo: DS.attr('string')
});
