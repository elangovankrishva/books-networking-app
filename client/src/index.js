import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import UserProfile from "./components/UserProfile";
import AddProduct from "./components/AddProduct";
import App from './App';
// import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-mfizz/dist/font-mfizz.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={App} />
            <Route path="/Profile" component={UserProfile} />
            <Route path="/product_details/:productId" exact component={ProductDetails} />
            <Route path="/addproduct" exact component={AddProduct} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister(); 
