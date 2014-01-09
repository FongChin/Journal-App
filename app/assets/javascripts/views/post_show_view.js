JournalApp.Views.PostShow = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},
	events: {
		"dblclick .post": "edit",
		"blur input": "update"
	},
	template: JST["post_show"],
	render: function (){
		var renderedContent = this.template({ post: this.model });
		this.$el.html(renderedContent);
		return this;
	},
	edit: function(event) {
		var id = $(event.currentTarget).attr("id");
		var input = $("<input type='text'>")
		input.val($(event.currentTarget).text());
		input.attr("data-field", id);
		$(event.currentTarget).replaceWith(input);
		input.focus();
	},
	update: function(event) {
		var that = this;
		var attrName = $(event.currentTarget).data("field");
		var value = $(event.currentTarget).val();
		this.model.set(attrName, value);
		this.model.save();
		this.render();
	}
})