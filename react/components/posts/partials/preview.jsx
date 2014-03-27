/**
 * @jsx React.DOM
 */

var React  = require('react');
var Date = require('../../date.jsx');

var switchboard = require('../../../switchboard');

module.exports = React.createClass({
	visitArticle: function() {
		switchboard.navigate('/posts/' + this.props.id, { trigger: true });
		return false;
	},

	render: function() {
		return <article className="preview">
			<Date time={this.props.date} />
			<section className="content">
				<h2 className="title">
					<a onClick={this.visitArticle} href={ "/posts/" + this.props.id }>{ this.props.title }</a>
				</h2>
			</section>
		</article>;
	}
});