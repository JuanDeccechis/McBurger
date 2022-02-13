import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleNothing(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        const { isDisabled, handleClick, content, isBig, isPrimary, className } = this.props;
        return (
            <button className={`${isBig ? "big" : "small"}
            ${isPrimary ? "primary" : "secondary"}
            ${isDisabled ? "disabled" : ''}
            ${className ? className : ''}`} onClick={isDisabled ? this.handleNothing : handleClick}>
                {content}
            </button>
        );
    }  
}
    
export default Button;
