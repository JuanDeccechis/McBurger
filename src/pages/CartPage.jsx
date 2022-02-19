import React from 'react';
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
        const { isMobile } = this.props;
        console.log(Cart);
        if (isMobile) {
            return (
                <>
                    <article className={`container-pages container-page-cart ${isMobile ? '' : 'cart-pages'} `}>
                        {Cart.items.map((cartItem, index) => (
                            <div key={index} className="inline">
                                <Item className="divider" handleClick={() => this.handleClick(cartItem.id)} title={cartItem.title} value={cartItem.value} description={cartItem.globalDescription ? cartItem.globalDescription : cartItem.description} isDetail={false} dateExprirePromotion={cartItem.expirationDate} quantity={cartItem.quantity} image={cartItem.image} isCarrito={true} />
                            </div>
                        ))}
                    </article>
                    <CarritoFooter value={2700} history={this.props.history} isMobile={isMobile} />
                </>
            );
        } else {
            return (
                <article className={`container-pages container-page-cart ${isMobile ? '' : 'cart-pages'} `}>
                    
                    <div className="location-page-container">
                        <div className="short-divider">
                            <div className="background image publicity" />  
                        </div>
                        <div>
                            {Cart.items.map((cartItem, index) => (
                                <div key={index} className={/* ${isMobile ? '' : ''} `*/''}>
                                    <Item className="divider" handleClick={() => this.handleClick(cartItem.id)} title={cartItem.title} value={cartItem.value} description={cartItem.globalDescription ? cartItem.globalDescription : cartItem.description} isDetail={false} dateExprirePromotion={cartItem.expirationDate} quantity={cartItem.quantity} isCarrito={true} />
                                </div>
                            ))}
                            <CarritoFooter value={2700} history={this.props.history} isMobile={isMobile} />
                        </div>
                    </div>
                </article>
            );
        }
    }  
}
    
export default CartPage;
