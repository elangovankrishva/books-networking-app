import React, { Component } from "react";
import ProductsList from "./ProductsList";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: []
    };
  }

  componentDidMount() {
    this.products();
  }

  products() {
    fetch('http://localhost:4000/api/books')
      .then(response => {
        return response.json();
      }).then(data => {
        console.log("apiRes==>" + JSON.stringify(data));
        this.setState({
          Product: data
        });
      });
  }

  getSearchedProducts() {
    const { searchProduct } = this.props;
    const products = searchProduct
      ? this.state.Product.filter(
        data => data.books_name.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1
      )
      : this.state.Product;
    return products;
  }

  render() {
    const products = this.getSearchedProducts();
    return (
      <div className="main thememain-white">
        <div className="container content-main">
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {products.map(data => {
                  return <ProductsList key={data._id} books={data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
