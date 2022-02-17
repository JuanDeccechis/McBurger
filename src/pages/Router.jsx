
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CartPage from "./CartPage";
import FoodPage from "./FoodPage";
import HomePage from "./HomePage";
import LocationPage from "./LocationPage";
import PromotionPage from "./PromotionPage";
import UsPage from "./UsPage";
import Menu from '../components/menu/Menu';
import ItemDetailPage from './ItemDetailPage';
import ItemDetailPageProductAdded from './ItemDetailPageProductAdded';


class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { isMobile } = this.props;
        return (
                <BrowserRouter basename="/McBurger">
                    <Switch>
                        <Route path="/home" component={(props) => <HomePage isMobile={isMobile} {...props} /> } />
                        <Route path="/food" component={(props) => <FoodPage isMobile={isMobile} {...props} /> } />
                        <Route path="/promotion" component={(props) => <PromotionPage isMobile={isMobile} {...props} /> } />
                        <Route path="/location" component={(props) => <LocationPage isMobile={isMobile} {...props} /> } />
                        <Route path="/cart" component={(props) => <CartPage isMobile={isMobile} {...props} /> } />
                        <Route path="/us" component={(props) => <UsPage isMobile={isMobile} {...props} /> } />
                        <Route path="/detailAdded" component={(props) => <ItemDetailPageProductAdded isMobile={isMobile} {...props} /> } />
                        <Route path="/detail" component={(props) => <ItemDetailPage isMobile={isMobile} {...props} /> } />
                        <Route path="/" component={(props) => <Redirect to="/home" isMobile={isMobile} {...props} /> } />
                    </Switch>
                    <Menu />
                </BrowserRouter>
        );
    }
}

export default Router;
