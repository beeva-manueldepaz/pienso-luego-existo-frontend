import DS from 'ember-data';

App.Pienso = DS.Model.extend({
  marca: DS.attr(),
  modelo: DS.attr(),
  peso: DS.attr(),
  precio: DS.attr(),
  descripcion: DS.attr(),
  fCaducidad:  DS.attr(),
  logo: DS.attr()
});