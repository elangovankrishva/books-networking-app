import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import loader from '../assets/loader.gif';
import productImage from '../assets/product-default.svg';

class ProductsList extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="col-sm-3 ">
        <div className="card">
          <Link
            to={{
              pathname: `/product_details/${this.props.books._id}`,
              state: { books: this.props.books },
            }}
            className="card"
          >
            <div className="text-center">
              <ReactImageFallback
                src={this.props.books.books_image}
                fallbackImage={productImage}
                initialImage={loader}
                alt={this.props.books.books_name}
                className="img-thumbnail img-fluid rounded-circle thumbnail" />
            </div>

            <div className="content-card">
              <h3>{this.props.books.books_name}</h3>
              <p><span className="product-label tags">ISBN:</span> {books.books_isbn}</p>
              <p><span className="product-label tags">AUTHOR:</span> {books.books_author}</p>
              <p><span className="product-label tags">PRICE:</span> {books.books_price}</p>
              <p><span className="product-label tags">QTY:</span> {books.books_qty}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default ProductsList;
