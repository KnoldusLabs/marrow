/**
 * @jsx React.DOM
 */

var React  = require('react');
var moment = require('moment');

module.exports = React.createClass({
	prettyDate: function() {
		return moment(this.props.date).format("MMMM Do YYYY");
	},

	render: function() {
		return <time dateTime={this.props.time}>
			{ this.prettyDate() }
		</time>;
	}
});