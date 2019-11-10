import React, { Component } from "react";
import Header from './Header';

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            books_name: "",
            books_author: "",
            books_isbn: "",
            books_price: "",
            book_qty: ""
        };
    }

    canBeSubmitted() {
        // const { books_name, books_author, books_isbn, books_price, book_qty } = this.state;
        // if (books_name.length > 4 || books_author.length > 4 || books_isbn.length > 4 || books_price.length > 4 || book_qty.length > 4) {
        //     return true;
        // }
        // return false;
    }

    handleOnChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { books_name, books_author, books_isbn, books_price, books_qty } = this.state;
        const url = "http://localhost:4000/api/books/add";

        let newdata = {
            "books_name": books_name,
            "books_author": books_author,
            "books_isbn": books_isbn,
            "books_price": books_price,
            "books_qty" : books_qty,
            "books_addedby" : localStorage.getItem('user')
        };

        let data = {
            method: 'POST',
            headers: {},
            body: JSON.stringify(newdata)
            // body: apiData
        };

        fetch(url, data).then(function (response) {
            return response.json();
        }).then(function (jsonResponse) {
            alert("Books added successfully..!");
        }).catch(function (error) {
            console.log(error);
        });
    };

    render() {

        return (
            <div>
                <Header />
                <div className="login-form">
                    <div className="">
                        <div className="col-6 mx-auto mt-5">
                            <h1>Add Books</h1>
                            <div className="col-12">
                                <form onSubmit={this.handleSubmit} method="post">
                                    <div className="form-group">
                                        <label>Books Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="books_name"
                                            placeholder="Add Books Name"
                                            name="books_name"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Books Author</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="books_author"
                                            placeholder="Add Books Author"
                                            name="books_author"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Books ISBN</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="books_isbn"
                                            placeholder="Add Books ISBN"
                                            name="books_isbn"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="books_name">Books Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="books_price"
                                            placeholder="Add Books Price"
                                            name="books_price"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Books Quantity</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="books_qty"
                                            placeholder="Add Books Quantity"
                                            name="books_qty"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        // disabled={!this.canBeSubmitted()}
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddProduct;
