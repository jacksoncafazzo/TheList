import DS from 'ember-data';

export default DS.Model.extend({
  want: DS.attr(),
  description: DS.attr(),
  poster: DS.attr(),
  posted: DS.attr(),
  offer: DS.attr()
});
