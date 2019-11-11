import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserDetail: []
    }
  }

  UserDetail(Id) {
    fetch('http://localhost:4000/api/users/' + Id)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          UserDetail: data
        });
      });
  }

  componentDidMount() {
    var value = localStorage.getItem("user");
    console.log('value--->' + value);
    if (!((value === '') || (value === null))) {
      this.UserDetail(value);
    }
  }

  render() {
    if (!localStorage.getItem("user")) {
      return (<Redirect to={'/'} />)
    }

    let favorite = this.state.UserDetail.user_favorite_list;
    let favorites = [...new Set([].concat.apply([], favorite))];

    let pub_book = this.state.UserDetail.user_publish_books;
    let pub_books = [...new Set([].concat.apply([], pub_book))];

    return (
      <div className="container">
        <br />
        <img src={require('../Images/user.jpg')} className="center" alt="login" />
        <br />

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">User Details</h5>
            <div className="product-details">
              <div className="product-label tags details-label-left">Name : </div>
              <div className="details-label-right">{this.state.UserDetail.user_name}</div>
            </div>
            <div className="product-details">
              <div className="product-label tags details-label-left">Email : </div>
              <div className="details-label-right">{this.state.UserDetail.user_email}</div>
            </div>
            <div className="product-details">
              <div className="product-label tags details-label-left">Published Books : </div>
              <div className="details-label-right">
                {pub_books.map((pub_book, i) => (
                  <div key={i} className="tags">
                    <Link
                      to={{
                        pathname: `/product_details/${pub_book}`,
                        state: { books: pub_book },
                      }}
                    >
                      <p>{pub_book}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-details">
              <div className="product-label tags details-label-left">Favorite List : </div>
              <div className="details-label-right">
                {favorites.map((favr, i) => (
                  <div key={i} className="tags">
                    <Link
                      to={{
                        pathname: `/product_details/${favr}`,
                        state: { books: favr },
                      }}
                    >
                      <p>{favr}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
