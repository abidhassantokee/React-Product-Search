var React = require('react');
var ReactDOM = require('react-dom');
var products = require('./products.js');
var Search = require('./components/search.jsx');

ReactDOM.render(
    <Search products={products}/>,
    document.getElementById('app')
);