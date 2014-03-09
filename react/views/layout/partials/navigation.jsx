/**
 * @jsx React.DOM
 */

var React       = require('react');
var ReactRouter = require('react-router-component');
var Link        = ReactRouter.Link;

module.exports = React.createClass({
	render: function() {
		return (
            <nav role="navigation">
                <Link href="/" id='logo'>Nate Hunzaker</Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><a href="http://www.github.com/nhunzaker">github</a></li>
                    <li><a href="http://feeds.feedburner.com/natehunzaker">rss</a></li>
                </ul>
            </nav>
        )
	}
});
