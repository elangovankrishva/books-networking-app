import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

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
    // let techs = favorite.split(',');

    // const arr = favorite.split(",").map(t => t.trim().toLowerCase());
  
    // const technologies = [...new Set([].concat.apply([], favorite))];
    // const countries = [...new Set(data.map(mentor => mentor.country))];


    console.log(technologies);
    // var favoriteArr = favorite.split(",");
    // let cc = favorite.split(",").map(function(n) {return Number(n);});

    // console.log(techs);
    return (
      <div className="container">
        <br />
        <img src={require('../Images/user.jpg')} className="center" alt="login" />
        <br />

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Books Details</h5>
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
              <div className="details-label-right">{this.state.UserDetail.user_publish_books}</div>
            </div>
            <div className="product-details">
              <div className="product-label tags details-label-left">Favorite List : </div>
              <div className="details-label-right">{this.state.UserDetail.user_favorite_list}</div>
              {/* {favorite.map((favr, i) => (
                <div key={i} className="tags">
                  <span>{favr}</span>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
