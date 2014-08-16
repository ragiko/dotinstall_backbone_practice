$(function(){

	// Model
	var Task = Backbone.Model.extend({
		defaults: {
			title: 'do it',
			complited: false,
		},
		validate: function (attrs) {
			if ( _.isEmpty(attrs.title) ) {
				return 'title must not be empty!';
			}
		},
		toggle: function () {
			this.set('complited', !this.get('completed'));
		}

	});

	var task1 = new Task();
	// task1.set('title', 'newTitle');
	// var title = task1.get('title');

	//console.log(title);
	// console.log(task1.toJSON());

	console.log(task1.toJSON());
	task1.set({'title': ''}, {validate: true});
	// task1.toggle();
	console.log(task1.toJSON());

});