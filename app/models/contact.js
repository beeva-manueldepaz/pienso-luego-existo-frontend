import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  from: DS.attr('string'),
  name: DS.attr('string'),
  client: DS.attr('boolean'),
  content: DS.attr('string'),
  date:  DS.attr('date')
});

