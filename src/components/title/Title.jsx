import React from 'react';
import './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { text, value, className } = this.props;
        return (
            <div className= {`${className ? className : ''}`}>
                <h3>{text}</h3>
                {value &&
                    <h3>${value}</h3>
                }
            </div>
        );
    }  
}
    
export default Title;
