import React, { Component } from "react";
import './SpecialIcon.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


class SpecialIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 4,
        };
    }

    componentDidMount() {
        
    }

    render(){
        const { value, showNotifications } = this.state;
        return(
            <div className="notificationIcon-relative">

                { value === 0 ?
                    <div className="notificationIcon-container">
                        <ShoppingCartOutlinedIcon className="icon icon-color" />
                    </div>
                    :
                    <div className="notificationIcon-container notificationIcon-not-empty" >
                        <ShoppingCartOutlinedIcon className={`icon icon-color ${showNotifications ? 'active' : ''}`}/>
                    <span className="notificationIcon-badge-value">{value}</span>
                </div>
                }
            </div>
        )
    }
}

export default (SpecialIcon);
