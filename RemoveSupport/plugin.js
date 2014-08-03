/**
 * Remove Saiku Support Label - v0.1.0
 *
 * Made by Breno Polanski <breno.polanski@gmail.com>
 * Under MIT License
 */
var RemoveSupport = Backbone.View.extend({
	initialize: function() {
		// Remove template
		$('#template-upgrade').remove();
	}
});

 /**
  * Start Plugin
  */
Saiku.events.bind('session:new', function() {
	function new_workspace(args) {
		if (typeof args.workspace.removeSupport === 'undefined') {
			args.workspace.removeSupport = new RemoveSupport({ workspace: args.workspace });
		}
	}

	// Add new tab content
	for (var i = 0, len = Saiku.tabs._tabs.length; i < len; i += 1) {
		var tab = Saiku.tabs._tabs[i];
		new_workspace({
			workspace: tab.content
		});
	}

	// New workspace
	Saiku.session.bind('workspace:new', new_workspace);
});
