$(function(){

	// Model
	var Task = Backbone.Model.extend({
		defaults: {
			title: 'do it',
			complited: false,
		}
	});

	var task = new Task();

	var TaskView = Backbone.View.extend({
		tagName: 'li',
	});

	var taskView = new TaskView({ model: task });
	// $el は jQueryのオブジェクト
	console.log(taskView.$el);

});