/**
 * @jsx React.DOM
 */

var React = require('react');
var Preview = require('./partials/preview.jsx');

var data = [{
    id: 1,
    title: "Foo",
    date: "12-12-2015",
    content: "Hey!"
}]

module.exports = React.createClass({
    render: function() {
        var item = data[+this.props.id - 1]

        return (
            <article role="content" class="single">
                <header>
                    <h1>{ item.title }</h1>
                    <div class="meta">
                        <time datetime="{ item.date }" class="date">{ item.date }</time>
                    </div>
        		</header>

        		<section class="body">
        			<p>{ item.content }</p>
        		</section>
        	</article>
        )
    }
});
