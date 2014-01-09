JournalApp.Views.PostsIndexView = Backbone.View.extend({
	events: {
		"click .delete_post": "deletePost"
	},
	template: JST["posts_index"],
	initialize: function (){
		var that = this;

		that.listenTo(that.collection, "add change:title remove reset", this.render);
	},
	render: function (){
		var renderedContent = this.template({posts: this.collection});
		this.$el.html(renderedContent)

		return this;
	},
	deletePost: function(event) {
		event.preventDefault();
    this.collection.get($(event.currentTarget).attr("data-id"))
       .destroy({
         success: function(model, response){
         }
    });
		return
	}
})

