/**
 * @jsx React.DOM
 */

var React = require('react');
var Preview = require('./partials/preview.jsx');

var data = [{
    id: 1,
    title: "Foo",
    date: "12-12-2015"
}]

module.exports = React.createClass({
    render: function() {
        var createItem = function(item) {
            return <Preview id={item.id} title={item.title} date={item.date} />
        }

        return (
            <section className="home" role="content">
                {data.map(createItem)}
            </section>
        );
    }
});
