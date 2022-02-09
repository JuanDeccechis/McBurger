import './Image.css';
import React from 'react'

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleNothing(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        const { alt, handleClick, className, isBig, isFood } = this.props;
        return (
            <div className={`image ${isBig ? "big" : "small"}
            ${isFood ? "food" : "promotion"}
            ${className ? className : ''}`} 
            onClick={handleClick ? handleClick : this.handleNothing}
            alt={alt} />
        );
    }  
}
    
export default Image;
