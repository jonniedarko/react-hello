import React from 'react'

var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});

var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
	 propTypes: {
		products:	React.PropTypes.array,
		inStockOnly : React.PropTypes.bool
	},
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if ( product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1
					&& product.category.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 ){
						return;
			}
			if(!product.stocked && this.props.inStockOnly) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        }.bind(this));
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
	handleChange: function() {
	   this.props.onUserInput(
		   this.refs.filterTextInput.value,
		   this.refs.inStockOnlyInput.checked
	   );
   },
    render: function() {
        return (
			<form>
			   <input
				   type="text"
				   placeholder="Search..."
				   value={this.props.filterText}
				   ref="filterTextInput"
				   onChange={this.handleChange}
			   />
			   <p>
				   <input
					   type="checkbox"
					   checked={this.props.inStockOnly}
					   ref="inStockOnlyInput"
					   onChange={this.handleChange}
				   />
				   {' '}
				   Only show products in stock
			   </p>
		   </form>
        );
    }
});

var FilterTable = React.createClass({
	getDefaultProps: function() {
    	return {data: [], filterText: '', inStockOnly: false};
	},
	handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },
    render: function() {
        return (
			<div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    products={this.state.data}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    },
	componentDidMount: function(){
		this.fetchProducts();
	},

	fetchProducts: function () {
		fetch(this.props.url, { method : 'get' })
			.then((data) => {
				return data.json()
			})
			.then((json) => {
				this.setState({ data: json});
			})
			.catch((err) =>{

				console.error(this.props.url, err);

			});
	}
});

export default FilterTable;
