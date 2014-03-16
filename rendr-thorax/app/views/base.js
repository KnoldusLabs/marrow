var RendrView = require('rendr/shared/base/view');
$ = require('cheerio');
var ThoraxView = require('thorax/src/thorax').View;

// Create a base view, for adding common extensions to our
// application's views.
module.exports = RendrView.extend(Thorax.View.prototype);
