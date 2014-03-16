var BaseApp = require('rendr/shared/app'),
    handlebarsHelpers = require('./lib/handlebarsHelpers');

/**
 * Extend the `BaseApp` class, adding any custom methods or overrides.
 */
module.exports = BaseApp.extend({

	initialize: function() {
		this.templateAdapter.registerHelpers(handlebarsHelpers);
	},

	/**
	 * Client-side only.
	 *
	 * `start` is called at the bottom of `__layout.hbs`. Calling this kicks off
	 * the router and initializes the application.
	 *
	 * Override this method (remembering to call the superclass' `start` method!)
	 * in order to do things like bind events to the router, as shown below.
	 */
	start: function() {
		// Show a loading indicator when the app is fetching.
		this.router.on('action:start', function() { this.set({ loading: true  }); }, this);
		this.router.on('action:end',   function() { this.set({ loading: false }); }, this);

		// Call 'super'.
		BaseApp.prototype.start.call(this);
	}
});
