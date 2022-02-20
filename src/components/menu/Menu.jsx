import React from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";
import IconsCustom from '../icons/IconsCustom';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-menu menu">
                <NavLink exact to="/home" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon= "Logo" />
                        <span className="text1"> Home </span>
                    </div>
                </NavLink>
                <NavLink exact to="/promotion" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="FastfoodOutlinedIcon" />
                        <span className="text1"> Promos </span>
                    </div>
                </NavLink>
                <NavLink exact to="/food" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="RestaurantOutlinedIcon" />
                        <span className="text1"> Comidas </span>
                    </div>
                </NavLink>
                <NavLink exact to="/location" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="StorefrontOutlinedIcon" />
                        <span className="text1"> Locales </span>
                    </div>
                </NavLink>
                <NavLink exact to="/cart" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item menu-item-last container-centralized">
                        <IconsCustom icon="ShoppingCartOutlinedIcon" />
                        <span className="text1"> Carrito </span>
                    </div>
                </NavLink>
                <NavLink exact to="/user" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item menu-item-last container-centralized">
                        <IconsCustom icon="AccountCircleOutlinedIcon" />
                        <span className="text1"> Cuenta </span>
                    </div>
                </NavLink>
            
            </div>
        );
    }  
}
    
export default Menu;
