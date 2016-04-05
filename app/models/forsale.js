import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.attr(),
  description: DS.attr(),
  offer: DS.attr(),
  condition: DS.attr(),
  price: DS.attr(),
  poster: DS.attr(),
  posted: DS.attr()
});
