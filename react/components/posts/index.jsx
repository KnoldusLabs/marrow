/**
 * @jsx React.DOM
 */

var React = require('react');
var Preview = require('./partials/preview.jsx');
var Footer = require('../footer.jsx');
var Nav = require('../navigation.jsx');

module.exports = React.createClass({
	render: function() {
		var makePreview = function(item, i) {
			return <Preview key={i} id={item.id} title={item.title} date={item.date} />
		}

		return <span>
			<Nav />
			<div id="wrapper">
				<section className="home" role="content">
					{ this.props.items.map(makePreview) }
				</section>
			</div>
			<Footer />
		</span>;
	}
});
