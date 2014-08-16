$(function(){

	// Model
	var Task = Backbone.Model.extend({
		defaults: {
			title: 'do it',
			completed: false,
		}
	});

	var task = new Task();

	var TaskView = Backbone.View.extend({
		tagName: 'li',
		template: _.template( $("#task-template").html() ),
		render: function () {
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		}
	});

	// Collection

	var Tasks = Backbone.Collection.extend({
		model: Task
	});

	var TasksView = Backbone.View.extend({
		tagName: 'ul',
		render: function () {
			this.collection.each( function (task) {
				var taskView = new TaskView({ model: task });
				this.$el.append(taskView.render().el);
			}, this /* thisはulを指すため, contextをthisに */);
			return this;
		}
	});


	var tasks = new Tasks([
		{ 
			title: 'task1',
			completed:  true,
		},
		{ title: 'task2' },
		{ title: 'task3' }
	]);

	var tasksView = new TasksView({collection: tasks});
	$('#tasks').html(tasksView.render().el);


});
