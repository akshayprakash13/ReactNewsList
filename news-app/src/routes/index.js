import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../screens/home";
import Header from '../components/Header';
import Toast from '../components/Toast';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Toast />
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}
