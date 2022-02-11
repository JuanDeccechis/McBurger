import React, { Component } from 'react';
import './LocationInfo.css';
import Title from '../title/Title';

class LocationInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { value } = this.props;
        return (
            <div className="container-location-info">
                <Title text={"McBurger 9 de Julio"} value={value} />
                <div className="titles-space-between divider">
                    <span>
                        <span className="text1">Calorias: </span>
                        <b className="text1 text1-bold">120 cal</b>
                    </span>
                </div>
                <div className="titles-space-between">
                    <span>
                        <span className="text1">Proteinas: </span>
                        <b className="text1 text1-bold">80 g</b>
                    </span>
                    <span>
                        <b className="text1 text1-bold">Abierto</b>
                    </span>
                </div>
            </div>
        );
    }  
}
    
export default LocationInfo;
