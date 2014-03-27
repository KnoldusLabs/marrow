/**
 * @jsx React.DOM
 */

var React = require('react');
var Preview = require('./partials/preview.jsx');
var Footer = require('../footer.jsx');
var Nav = require('../navigation.jsx');
var Date = require('../date.jsx');

var Showdown = require('showdown');
var converter = new Showdown.converter();

module.exports = React.createClass({
    render: function() {
        return <span>
			<Nav />
			<div id="wrapper">
				<article role="content" className="single">
					<header>
						<h1>{ this.props.title }</h1>
						<div className="meta">
							<Date time={this.props.date} />
						</div>
					</header>
					<section className="body" dangerouslySetInnerHTML={{
						__html: converter.makeHtml(this.props.content)
					}} />
				</article>
			</div>
			<Footer />
		</span>;
    }
});
