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
                        Home
                    </div>
                </NavLink>
                <NavLink exact to="/food" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="HelpOutlineOutlinedIcon" />
                        Comidas
                    </div>
                </NavLink>
                <NavLink exact to="/promotion" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="NotificationsOutlinedIcon" />
                        Promos
                    </div>
                </NavLink>
                <NavLink exact to="/location" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <IconsCustom icon="SearchOutlinedIcon" />
                        Locales
                    </div>
                </NavLink>
                <NavLink exact to="/cart" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item menu-item-last container-centralized">
                        <IconsCustom icon="PaymentOutlinedIcon" />
                        Carrito
                    </div>
                </NavLink>
            </div>
        );
    }  
}
    
export default Menu;
