import Ember from 'ember';
import EmberGoogleMapInitializer from 'thelist/initializers/ember-google-map';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ember google map', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberGoogleMapInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
