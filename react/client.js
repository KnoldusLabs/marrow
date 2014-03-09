/**
 * @jsx React.DOM
 */

var React       = require('react');
var ReactMount  = require('react/lib/ReactMount');
var ReactAsync  = require('react-async');
var ReactRouter = require('react-router-component');

ReactMount.allowFullPageRender = true;

var Layout = module.exports = require('./views/layout/index.jsx');

if (typeof window !== 'undefined') {
	React.renderComponent(Layout(), document);
}
