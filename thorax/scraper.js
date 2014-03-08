var visited =  {};
var fs = require('fs');

function scrape(url, as) {
	if (visited[url]) {
		return;
	} else {
		visited[url] = true;
	}

	var page = require('webpage').create();
	page.loadImages = false;
	page.open(url, function() {
		setTimeout(function() {
			console.log("writing " + as);
			fs.write('public/pages/' + as, page.content);

			var links = JSON.parse(page.evaluate(function() {
				var paths = Array.prototype.slice.call(document.querySelectorAll('a')).filter(function(el) {
					return el.getAttribute('data-call-method') === "_anchorClick";
				}).map(function(el) {
					return el.pathname;
				});

				return JSON.stringify(paths);
			}));

			if (links.length) {
				links.forEach(function(link) {
					if (link !== '/') {
						scrape(link, link + '.html');
					}
				});
			}

			page.close();
		}, 2000);
	});
}

scrape('http://localhost:8000', 'index.html');
