JournalApp.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "new",
		"posts/new": "new",
		"posts/:id": "show"
	},
	show: function(id) {
		var post = JournalApp.postCollection.get(id);
		var postShow = new JournalApp.Views.PostShow({model: post});
		$("#content").html(postShow.render().$el);
	},
	new: function() {
		var formView = new JournalApp.Views.PostForm({
			model: new JournalApp.Models.Post(),
			collection: JournalApp.postCollection
		});
		$("#content").html(formView.render().$el);
	}
})

