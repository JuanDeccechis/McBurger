import './Button.css';
import React from 'react'

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
        const { isDisabled, handleClick, content, isBig, className } = this.props;
        return (
            <button className={`${isBig ? "big" : "small"}
            ${className ? className : ''}
            ${isDisabled ? "disabled" : ""}`} onClick={isDisabled ? this.handleNothing : handleClick}>
                {content}
            </button>
        );
    }  
}
    
export default Button;
