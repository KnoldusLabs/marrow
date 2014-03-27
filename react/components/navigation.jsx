/**
 * @jsx React.DOM
 */

var React = require('react');
var switchboard = require('../switchboard');

module.exports = React.createClass({
	goHome: function() {
		switchboard.navigate('/', { trigger: true });
		return false;
	},

	render: function() {
		return <nav role="navigation">
			<a onClick={this.goHome} href="/" id='logo'>Nate Hunzaker</a>
			<ul>
				<li><a onClick={this.goHome} href="/">Home</a></li>
				<li><a href="http://www.github.com/nhunzaker">github</a></li>
				<li><a href="http://feeds.feedburner.com/natehunzaker">rss</a></li>
			</ul>
		</nav>;
	}
});
