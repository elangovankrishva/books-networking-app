import React, { Component } from "react";
import "./styles.css";

import Header from "./components/Header";
// import Router from "./components/Router";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  search = val => {
    console.log('app searc---->'+val)
    this.setState({ search: val });
  };

  render() {
    console.log('test--->'+this.state.search)
    return (
      <div className="App">
        <Header handleSearch={this.search} />
        <Products searchProduct={this.state.search} />
      </div>
    );
  }
}
export default App;
