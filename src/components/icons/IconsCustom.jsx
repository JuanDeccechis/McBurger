import React, { Component } from 'react';
import './IconsCustom.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";

class IconsCustom extends Component {
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
            break;
            case "AddCircleOutlineOutlinedIcon":
                return (
                    <AddCircleOutlineOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "AlternateEmailOutlinedIcon":
                return (
                    <AlternateEmailOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "CheckCircleOutlinedIcon":
                return (
                    <CheckCircleOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "DeleteForeverOutlinedIcon":
                return (
                    <DeleteForeverOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "ExpandMoreOutlinedIcon":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "FaceOutlinedIcon":
                return (
                    <FaceOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "HelpOutlineOutlinedIcon":
                return (
                    <HelpOutlineOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "HomeOutlinedIcon":
                return (
                    <HomeOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "LockOpenOutlinedIcon":
                return (
                    <LockOpenOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "LockOutlinedIcon":
                return (
                    <LockOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "NotificationsActiveOutlinedIcon":
                return (
                    <NotificationsActiveOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "NotificationsOutlinedIcon":
                return (
                    <NotificationsOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "PaymentOutlinedIcon":
                return (
                    <PaymentOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "RemoveCircleOutlineOutlinedIcon":
                return (
                    <RemoveCircleOutlineOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "SearchOutlinedIcon":
                return (
                    <SearchOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "StarBorderOutlinedIcon":
                return (
                    <StarBorderOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "VisibilityOutlinedIcon":
                return (
                    <VisibilityOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "VisibilityOffOutlinedIcon":
                return (
                    <VisibilityOffOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            
            case "arrowDown":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
            case "arrowLeft":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''} rotate-horizontal`} onClick={handleClick} /> 
                );
            break;
            case "arrowRight":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''} rotate-vertical-horizontal`} onClick={handleClick} /> 
                );
            break;
            case "arrowUp":
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''} rotate-vertical`} onClick={handleClick} /> 
                );
            break;
            case "NavigationOutlinedIcon":
                return (
                    <NavigationOutlinedIcon className={`icon icon-color ${className ? className : ''} rotate-percentage`} onClick={handleClick} /> 
                );
            break;
            default:
                return (
                    <ExpandMoreOutlinedIcon className={`icon icon-color ${className ? className : ''}`} onClick={handleClick} /> 
                );
            break;
        }

    }
}

export default IconsCustom;