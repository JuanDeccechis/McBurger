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
        let path = `/promotion`;
        this.props.history.push(path);
    }

    finishBuy = () => {
        localStorage.setItem("showMessageCart", "true");
        this.props.handleFinishBuy();
    }

    render() {
        const { value, isMobile } = this.props;
        return (
            <div className={`container-carrito-footer ${isMobile ? 'carrito-footer-horizontal-alinineation' : ''}`}>
                <Title text={"Total"} className="title-space-between" value={value} />
                <div className="container-carrito-footer-buttons">
                    <Button handleClick={this.goPromotions} content="Seguir Comprando" isBig={true} isPrimary={true} className="divider" />
                    <Button handleClick={this.finishBuy} content="Finalizar Compra" isBig={true} isPrimary={false} className="divider"/>

                </div>
            </div>
        );
    }  
}
    
export default CarritoFooter;
