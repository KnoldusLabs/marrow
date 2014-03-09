/**
 * @jsx React.DOM
 */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <footer id="footer" className="Footer">
                <small className="legal">
                    Proudly powered by <a href="http://facebook.github.io/react/"><strong>React</strong></a>
                </small>
            </footer>
        )
    }
});
