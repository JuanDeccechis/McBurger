import React, { Component } from 'react';
import './CarritoFooter.css'
import Button from '../button/Button';

class CarritoFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.goPromotions = this.goPromotions.bind(this);
    }
    
    goPromotions() {
        console.log("promotions");
        console.log(this);
    }

    render() {
        const { value } = this.props;
        return (
            <div className="container-carrito-footer">
                <div className="titles-space-between">
                    <h3>Total</h3>
                    <h3>{value}</h3>
                </div>
                <div className="divider" />
                <Button handleClick={this.goPromotions} content="Seguir Comprando" isBig={true} isPrimary={true}></Button>
                <div className="divider" />
                <Button content="Finalizar Compra" isBig={true} isPrimary={false}></Button>
            </div>
        );
    }  
}
    
export default CarritoFooter;
