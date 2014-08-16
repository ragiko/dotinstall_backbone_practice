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
		// DOMを作る
		tagName: 'li',
		// className: 'liClass',
		// id: 'liId',
		template: _.template('<%- title %>'),
		render: function () {
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		}

	});

	var taskView = new TaskView({ model: task });
	console.log(taskView.render().el);

});

// $el は jQueryのオブジェクト
