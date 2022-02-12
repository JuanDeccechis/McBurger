import React, { Component } from 'react';
import './LocationInfo.css';
import Title from '../title/Title';

class LocationInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { value, className, title, direction, phone, isOpen } = this.props;
        return (
            <div className={`container-location-info ${className ? className : ''}`}>
                <Title text={title} value={value} />
                <div className="titles-space-between divider">
                    <span>
                        <span className="text1">Direccion: </span>
                        <b className="text1 text1-bold"> {direction} </b>
                    </span>
                </div>
                <div className="titles-space-between">
                    <span>
                        <span className="text1">Telefono: </span>
                        <b className="text1 text1-bold"> {phone} </b>
                    </span>
                    <span>
                        <b className="text1 text1-bold"> {isOpen ? 'Abierto' : 'Cerrado'} </b>
                    </span>
                </div>
            </div>
        );
    }  
}
    
export default LocationInfo;
