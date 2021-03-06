var React = require('react');

class Result extends React.Component {
    displayPrice(price) {
        return '$' + price / 100;
    }

    render() {
        return (
            <div className="in-stock">
                <h2><a href="#">{this.props.product.name}</a></h2>
                <p>{this.displayPrice(this.props.product.price)}</p>
                <p>{this.props.product.description}</p>
                <hr/>
            </div>
        );
    }
}

module.exports = Result;