import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("blog");
	this.resource("posts", function() {
		this.route("edit",{
			path: ":post_id"
		});
	});
	this.route("new");
});

// Router.map(function() {
//   this.route('inspections');
// });

export default Router;
