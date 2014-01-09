JournalApp.Views.PostForm = Backbone.View.extend({
	events: {
		"submit form": "submit"
	},
	template: JST["post_form"],
	render: function() {
		var renderedContent = this.template({post: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	submit: function(event) {
		event.preventDefault();
		var postForm = this;
		var attributes = this.$("form").serializeJSON();

    var options = {
  		  success: function(model, response, options) {
    			Backbone.history.navigate("#/", {trigger: true})
    		},
    		error: function(model, xhr, options) {
    			var errorMsg = JSON.parse(xhr.responseText)["errors"];
    			postForm.model = model;
    			postForm.render();
    			postForm.$el.append(errorMsg);
  		}
	  };
		if (postForm.model.isNew()){
			postForm.collection.create(attributes["post"], options);
		} else {
			postForm.model.save(attributes["post"], options)
		}
	}
})