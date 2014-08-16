$(function(){

	// Model
	var Task = Backbone.Model.extend({
		defaults: {
			title: 'do it',
			complited: false,
		}
	});

	var task1 = new Task();

	console.log(task1.toJSON());
  
});