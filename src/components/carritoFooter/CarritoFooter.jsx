import React from 'react';
import './CarritoFooter.css';
import Button from '../button/Button';
import Title from '../title/Title';

class CarritoFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    goPromotions = () => {
        
    }

    render() {
        const { value } = this.props;
        return (
            <div className="container-carrito-footer">
                <Title text={"Total"} value={value} />
                <div className="container-carrito-footer-buttons">
                    <Button handleClick={this.goPromotions} content="Seguir Comprando" isBig={true} isPrimary={true} className="divider" />
                    <Button content="Finalizar Compra" isBig={true} isPrimary={false} className="divider"/>

                </div>
            </div>
        );
    }  
}
    
export default CarritoFooter;
