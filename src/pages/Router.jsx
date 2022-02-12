
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CartPage from "./CartPage";
import FoodPage from "./FoodPage";
import HomePage from "./HomePage";
import LocationPage from "./LocationPage";
import PromotionPage from "./PromotionPage";
import UsPage from "./UsPage";
import Menu from '../components/menu/Menu';


class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container-pages">
                <BrowserRouter basename="/McBurger">
                    <Menu />
                    <Switch>
                        <Route path="/home" component={(props) => <HomePage {...props} /> } />
                        <Route path="/food" component={(props) => <FoodPage {...props} /> } />
                        <Route path="/promotion" component={(props) => <PromotionPage {...props} /> } />
                        <Route path="/location" component={(props) => <LocationPage {...props} /> } />
                        <Route path="/cart" component={(props) => <CartPage {...props} /> } />
                        <Route path="/us" component={(props) => <UsPage {...props} /> } />
                        <Route path="/"> <Redirect to="/home" /> </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
