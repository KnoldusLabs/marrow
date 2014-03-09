/**
 * @jsx React.DOM
 */

var React       = require('react');

var Head        = require('./partials/head.jsx');
var Navigation  = require('./partials/navigation.jsx');
var Footer      = require('./partials/footer.jsx');
var PostsIndex  = require('../posts/index.jsx');
var PostsShow   = require('../posts/show.jsx');

var ReactRouter = require('react-router-component');
var Pages       = ReactRouter.Pages;
var Page        = ReactRouter.Page;

module.exports = React.createClass({
	render: function() {
		return (
            <html lang="en">
                <Head />
                <body lang="en">
                    <Navigation />
                    <div id="wrapper">
                        <Pages path={this.props.path}>
                            <Page path="/" handler={PostsIndex} />
                            <Page path="/posts/:id" handler={PostsShow} />
                        </Pages>
                    </div>
                    <Footer />
                    <script src="/assets/bundle.js"></script>
                </body>
            </html>
        )
	}
});
