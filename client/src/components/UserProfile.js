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
    console.log('value--->'+value);
    if (!((value === '') || (value === null))) {
      this.UserDetail(value);
    }
  }

  render() {
    if (!localStorage.getItem("user")) {
      return (<Redirect to={'/'} />)
    }
    return (
      <div className="container">
        <br />
        <img src={require('../Images/user.jpg')} className="center" alt="login" />
        <br />
        <Form >
          <FormGroup row>
            <Label for="name" className="text-right" sm={2}>User Name</Label>
            <Col sm={4}>
              <Input type="name" name="name" id="name" disabled={true} value={this.state.UserDetail.user_name} placeholder="User Name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" className="text-right" sm={2}>Email</Label>
            <Col sm={4}>
              <Input type="email" name="email" value={this.state.UserDetail.user_email} id="Email" disabled={true} placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Contact" className="text-right" sm={2}>Publish Books</Label>
            <Col sm={4}>
              <Input type="textarea" name="Contact" value={this.state.UserDetail.user_publish_books} disabled={true} id="Contact" placeholder="mobile" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Contact" className="text-right" sm={2}>Favorite List</Label>
            <Col sm={4}>
              <Input type="textarea" name="Contact" value={this.state.UserDetail.user_favorite_list} disabled={true} id="Contact" placeholder="mobile" />
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UserProfile;
