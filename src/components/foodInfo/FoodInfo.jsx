import React, { Component } from 'react';
import './FoodInfo.css'

class FoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { value } = this.props;
        return (
            <div className="container-food-info">
                <h3>Doble combo</h3>
                <div className="titles-space-between divider">
                    <span>
                        <span>Calorias: </span>
                        <b>120 cal</b>
                    </span>
                    <span>
                        <span>Grasas: </span>
                        <b>40 g</b>
                    </span>
                </div>
                <div className="titles-space-between">
                    <span>
                        <span>Proteinas: </span>
                        <b>80 g</b>
                    </span>
                    <span>
                        <span>Hidratos: </span>
                        <b>40 g</b>
                    </span>
                </div>
            </div>
        );
    }  
}
    
export default FoodInfo;
