/**
 * @jsx React.DOM
 */

var React       = require('react');
var ReactRouter = require('react-router-component');
var Link        = ReactRouter.Link;

module.exports = React.createClass({
    render: function() {
        return (
            <article className="preview">
                <time>{ this.props.date }</time>
                <section className="content">
                    <h2 className="title">
                        <Link href={ "/posts/" + this.props.id }>{ this.props.title }</Link>
                    </h2>
                </section>
            </article>
        );
    }
});
