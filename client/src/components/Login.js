import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      login: false,
      model: false,
      error: false,
      Showprofile: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.dropdowntoggle = this.dropdowntoggle.bind(this);
  }

  login() {
    if (this.validateForm()) {
      // const url = 'http://localhost:4000/api/userlogin?email=' + this.state.username + '&password=' + this.state.password;
      fetch('http://localhost:4000/api/users/5dc65ff2a26c121e9491e020',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }
        }).then(
          response => response.json()
        )
        .then(
          jsondata => {
          if (jsondata._id != 0) {
            this.props.user('Hi ' + jsondata.user_name);
            this.setState({ login: true });
            localStorage.setItem('user', jsondata._id);
            localStorage.setItem('username', jsondata.user_name);
            this.toggle();
          }
          else {
            this.setState({
              username: '',
              password: '',
              error: true
            });
          }
        }
        );
    }
  }

  componentDidMount() {
    var value = localStorage.getItem("user");
    if (!((value === '') || (value === null))) {
      this.setState({ login: true });
      this.props.user('Hi ' + localStorage.getItem("username"));
    }
    else {
      this.props.user('Hi!');
    }
  }

  dropdowntoggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.login();
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ error: false });
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  logout() {
    localStorage.setItem("user", '');
    localStorage.setItem("username", '');
    localStorage.clear();
    this.setState({ login: false });
    this.props.user('Hi!');
  }

  render() {
    return (
      <div>
        {!this.state.login && <Button onClick={this.toggle}>{'Login'} </Button>}
        {this.state.login && <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdowntoggle}>
          <DropdownToggle className="rounded-circle" >
            <img src={require('../Images/user.png')} alt="user" />
          </DropdownToggle>
          <DropdownMenu right style={{ right: 'auto' }}>
            <DropdownItem href="/Profile" className="profile-menu"><img src={require('../Images/person.svg')} style={{ height: 15 }} alt="profile" /> {' '}
              Profile
              </DropdownItem>
            <DropdownItem href="/" className="profile-menu" onClick={this.logout}><img src={require('../Images/power-standby.svg')} style={{ height: 15 }} alt="logout" /> {' '}
              Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>}
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalBody>
            <label className="text-center"><h1 className="text-center title">Eripsa</h1></label>
            <form >
              <img src={require('../Images/user.jpg')} className="center" alt="login" />
              <div>
                {this.state.error && <div className="ErrorMessage">Username or password worng!!!</div>}
                <div className="input-group input">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input type="text" className="form-control" name="username" id="username" placeholder="Username" value={this.state.username} onKeyPress={this.handleKeyPress} onChange={this.onChange} />
                </div>
              </div>
              <br />

              <div className="input-group input">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input type="Password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onKeyPress={this.handleKeyPress} onChange={this.onChange} />
              </div>

              <br />
              <input type="button" className="btn btn-secondary btn-block input" value="Login" id="button" onClick={this.login} />
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Login;
