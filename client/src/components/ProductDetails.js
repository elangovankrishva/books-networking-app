import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import Header from './Header';
import loader from '../assets/loader.gif';
import productImage from '../assets/product-default.svg';

class ProductDetails extends Component {
    state = {
        productId: null,
        productData: null
    }

    componentDidMount() {
        this.products();
    }

    products() {
        fetch('http://localhost:4000/api/books')
            .then(response => {
                return response.json();
            }).then(data => {
                let id = this.props.match.params.productId;
                this.setState({
                    productData: data.filter(item => item._id === id)[0]
                });
            });
    }

    render() {
        const hasProductData = this.state.productData ? (<div>
            <div className="row mt-5 no-gutters">
                <div className="col-sm-4 col-md-4 ">
                    <ReactImageFallback
                        src={this.state.productData.books_image}
                        fallbackImage={productImage}
                        initialImage={loader}
                        alt={this.state.productData.books_name}
                        className="card-img product-img-thumbnail img-fluid" />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Books Details</h5>
                        <h2 className="card-title">{this.state.productData.books_name}</h2>
                        <div className="product-details">
                            <div className="product-label tags details-label-left">ISBN : </div>
                            <div className="details-label-right">{this.state.productData.books_isbn}</div>
                        </div>
                        <div className="product-details">
                            <div className="product-label tags details-label-left">AUTHOR : </div>
                            <div className="details-label-right">{this.state.productData.books_author}</div>
                        </div>
                        <div className="product-details">
                            <div className="product-label tags details-label-left">PRICE : </div>
                            <div className="details-label-right">{this.state.productData.books_price}</div>
                        </div>
                        <div className="product-details">
                            <div className="product-label tags details-label-left">QTY : </div>
                            <div className="details-label-right">{this.state.productData.books_qty}</div>
                        </div>
                        <div className="product-details">
                            <div className="product-label tags details-label-left">STOCK : </div>
                            <div className="details-label-right">{this.state.productData.books_stock}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (<h2>Loading Data</h2>)
        return (
            <div>
                <Header />
                <div className="container">
                    {hasProductData}
                </div>
            </div>
        )
    }
}

export default ProductDetails;
