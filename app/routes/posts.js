import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  }
});