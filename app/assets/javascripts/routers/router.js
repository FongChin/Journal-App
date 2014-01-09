JournalApp.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "new",
		"posts/new": "new",
		"posts/:id": "show"
	},
	show: function(id) {
		var post = new JournalApp.Models.Post({id: parseInt(id)})
		post.fetch({
			success: function(model, response, options) {
				var postShow = new JournalApp.Views.PostShow({model: model});
				$("#content").html(postShow.render().$el);
			}
		})
	},
	new: function() {
		var formView = new JournalApp.Views.PostForm({
			model: new JournalApp.Models.Post(),
			collection: JournalApp.postCollection
		});
		$("#content").html(formView.render().$el);
	}
})

