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
                        <IconsCustom icon="HomeOutlinedIcon" />
                        <span className="text1"> Home </span>
                    </div>
                </NavLink>
                <NavLink exact to="/food" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="HelpOutlineOutlinedIcon" />
                        <span className="text1"> Comidas </span>
                    </div>
                </NavLink>
                <NavLink exact to="/promotion" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="NotificationsOutlinedIcon" />
                        <span className="text1"> Promos </span>
                    </div>
                </NavLink>
                <NavLink exact to="/location" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="SearchOutlinedIcon" />
                        <span className="text1"> Locales </span>
                    </div>
                </NavLink>
                <NavLink exact to="/cart" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item menu-item-last container-centralized">
                        <IconsCustom icon="PaymentOutlinedIcon" />
                        <span className="text1"> Carrito </span>
                    </div>
                </NavLink>
            </div>
        );
    }  
}
    
export default Menu;
