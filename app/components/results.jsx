var React = require('react');
var Result = require('./result.jsx');

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundProducts: props.products
        }
    }

    componentWillReceiveProps(nextProps) {
        var foundProducts = nextProps.products.filter(product => {
            return product.name.toLowerCase().match(nextProps.query) ||
                product.description.toLowerCase().match(nextProps.query);
        });

        this.setState({
            'foundProducts': foundProducts
        });
    }

    render() {
        return (
            <div className="results">
                {this.state.foundProducts.map(function (product, i) {
                    return (
                        <Result product={product}/>
                    )
                })}
            </div>
        );
    }
}

module.exports = Results;