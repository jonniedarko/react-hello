import React from 'react'

var ProductRow = React.createClass({
	render: function (){
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

var ProductCategoryRow = React.createClass({

	render: function (){
		return (
			<tr>
				<th colSpan="2">
					{this.props.category}
				</th>
			</tr>
		);
	}
});

var ProductTable = React.createClass({
	render: function(){
		var rows = [];
		var lastCategory = null
		debugger;
		this.props.products.forEach((product)=>{
			if(product.category !== lastCategory){
				rows.push(
					<ProductCategoryRow category={product.category} key ={product.category} />
				)
			}
			rows.push(
				<ProductRow product={product} key={product.name} />
			);
            lastCategory = product.category;
		});
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
})

var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var FilterTable = React.createClass({
	getInitialState: function() {
    	return {data: []};
	},
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.state.data} />
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