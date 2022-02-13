import React from 'react';
import './IconsCustom.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import LunchDiningOutlinedIcon from '@material-ui/icons/LunchDiningOutlined';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";

class IconsCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { icon, handleClick, className } = this.props;
        switch (icon) {
            case "AccountCircleOutlinedIcon":
                return (
                    <AccountCircleOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "AddCircleOutlineOutlinedIcon":
                return (
                    <AddCircleOutlineOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "AlternateEmailOutlinedIcon":
                return (
                    <AlternateEmailOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "CheckCircleOutlinedIcon":
                return (
                    <CheckCircleOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "DeleteForeverOutlinedIcon":
                return (
                    <DeleteForeverOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "ExpandMoreOutlinedIcon":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "FaceOutlinedIcon":
                return (
                    <FaceOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "FastfoodOutlinedIcon":
                return (
                    <FastfoodOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "HelpOutlineOutlinedIcon":
                return (
                    <HelpOutlineOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "HomeOutlinedIcon":
                return (
                    <HomeOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "LockOpenOutlinedIcon":
                return (
                    <LockOpenOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "LockOutlinedIcon":
                return (
                    <LockOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "NotificationsActiveOutlinedIcon":
                return (
                    <NotificationsActiveOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "NotificationsOutlinedIcon":
                return (
                    <NotificationsOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "PaymentOutlinedIcon":
                return (
                    <PaymentOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "RemoveCircleOutlineOutlinedIcon":
                return (
                    <RemoveCircleOutlineOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "RestaurantOutlinedIcon":
                return (
                    <RestaurantOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "SearchOutlinedIcon":
                return (
                    <SearchOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "ShoppingCartOutlinedIcon":
                return (
                    <ShoppingCartOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "StarBorderOutlinedIcon":
                return (
                    <StarBorderOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "StorefrontOutlinedIcon":
                return (
                    <StorefrontOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "VisibilityOutlinedIcon":
                return (
                    <VisibilityOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "VisibilityOffOutlinedIcon":
                return (
                    <VisibilityOffOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            
            case "arrowDown":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "arrowLeft":
                return (
                    <ChevronLeftOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "arrowRight":
                return (
                    <ChevronRightOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "arrowUp":
                return (
                    <ExpandLessOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            case "NavigationOutlinedIcon":
                return (
                    <NavigationOutlinedIcon className={`icon icon-color ${className ? className : ''} rotate-percentage`} onClick={handleClick} /> 
                );
            default:
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
        }

    }
}

export default IconsCustom;