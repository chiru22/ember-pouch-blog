import DS from 'ember-data';

export default DS.Model.extend({
	_rev: DS.attr('string'),
	name: DS.attr('string'),
	description: DS.attr('string')
  
});
