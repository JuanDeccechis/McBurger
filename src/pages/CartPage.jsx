import React, { Component } from 'react';
import CarritoFooter from '../components/carritoFooter/CarritoFooter';
import Item from '../components/item/Item';
import { Cart } from '../mocks/Cart';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(id) {
        console.log(id);
    }
    
    render() {
        console.log(Cart);
        return (
            <>
                <article className={`container-pages container-page-cart `}>
                    <h2> Carrito </h2> 
                    {Cart.items.map((cartItem, index) => (
                        <div key={index}>
                            <Item className="divider" handleClick={() => this.handleClick(cartItem.id)} title={cartItem.title} value={cartItem.value} description={cartItem.globalDescription ? cartItem.globalDescription : cartItem.description} isDetail={false} dateExprirePromotion={cartItem.expirationDate} quantity={cartItem.quantity} isCarrito={true} />
                        </div>
                    ))}
                </article>
                <CarritoFooter value={2700} />
            </>
        );
    }  
}
    
export default CartPage;
