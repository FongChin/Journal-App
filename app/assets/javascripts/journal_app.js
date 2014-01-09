window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		JournalApp.postCollection = new JournalApp.Collections.Posts();
		JournalApp.postCollection.fetch({success: function(collection, response, options){
			JournalApp.installSidebar(JournalApp.postCollection);
		}});

		new JournalApp.Routers.Router();
		Backbone.history.start();
  },
	installSidebar: function(postCollection) {
		var indexView = new JournalApp.Views.PostsIndexView(
			{ collection: postCollection }
		);
		$("#sidebar").html(indexView.render().$el);
	}
};

$(document).ready(function(){
  JournalApp.initialize();
});
