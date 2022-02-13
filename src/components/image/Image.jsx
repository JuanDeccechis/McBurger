import React from 'react';
import './Image.css';

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
        const { alt, value, handleClick, className, isBig, isFood, isLeft } = this.props;
        return (
            <div className={`image ${isLeft ? '' : 'image-centralized'} 
            ${isBig ? "big" : "small"}
            ${isFood ? "food" : "promotion"}
            ${className ? className : ''}`} 
            onClick={handleClick ? handleClick : this.handleNothing}
            alt={alt} >
                {value && 
                    <div className={`image-sticker container-centralized ${isBig ? '' : 'image-sticker-small'}`}>
                        {isBig ?
                            <h3> ${value} </h3>
                            :
                            <span className="text1"> ${value} </span>
                        }
                    </div>
                }
            </div>
        );
    }  
}
    
export default Image;
