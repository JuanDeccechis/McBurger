import React from 'react';
import Button from '../components/button/Button';
import CarritoFooter from '../components/carritoFooter/CarritoFooter';
import Item from '../components/item/Item';
import { Cart } from '../mocks/Cart';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            buyFinished: false
        };
    }

    componentDidMount() {
        let showMessage = localStorage.getItem("showMessageCart");
        console.log(showMessage === "true");
        console.log(this.props.showMessage);
        if (showMessage === "true") {
            this.hideMessage();
        }
    }

    hideMessage = () => {
        let _this = this;
        this.setState({ showMessage:true });
        window.setTimeout(() => {
            _this.setState({ showMessage:false });
            if (localStorage.getItem("isLogged") === "true") {
                this.setState({ buyFinished : true });
            }
            localStorage.setItem("showMessageCart", "false");
        }, 3000);
    }

    handleFinishBuy = () => {
        this.hideMessage();
    }

    handleClick(id) {
        console.log(id);
    }

    loggin = () => {
        let path = "/user";
        this.props.history.push(path);
    }
    
    render() {
        const { isMobile } = this.props;
        const { showMessage, buyFinished } = this.state;
        console.log(Cart);
        if (isMobile) {
            return (
                <>
                    <article className={`container-pages container-page-cart ${isMobile ? '' : 'cart-pages'} `}>
                        {!buyFinished && Cart.items.map((cartItem, index) => (
                            <div key={index} className="inline">
                                <Item className="divider" handleClick={() => this.handleClick(cartItem.id)} title={cartItem.title} value={cartItem.value} description={cartItem.globalDescription ? cartItem.globalDescription : cartItem.description} isDetail={false} dateExprirePromotion={cartItem.expirationDate} quantity={cartItem.quantity} image={cartItem.image} isCarrito={true} />
                            </div>
                        ))}
                        {showMessage && 
                            <div className="message-popup">
                                {localStorage.getItem("isLogged") === "true" ?
                                    <div className="message-container-message">
                                        <h3> Compra finalizada con exito! </h3>
                                    </div>
                                :
                                    <div className="message-container-message">
                                        <h3> Debes iniciar sesion previo a finalizar la compra </h3>
                                        <Button isDisabled={false} className="divider" handleClick={() => this.loggin()} content="Iniciar" isPrimary={true} isBig={true} />
                                    </div>
                                }
                            </div>
                        }
                    </article>
                    <CarritoFooter value={2700} history={this.props.history} handleFinishBuy={this.handleFinishBuy} isMobile={isMobile} />
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
                            {!buyFinished && Cart.items.map((cartItem, index) => (
                                <div key={index} className={/* ${isMobile ? '' : ''} `*/''}>
                                    <Item className="divider" handleClick={() => this.handleClick(cartItem.id)} title={cartItem.title} value={cartItem.value} description={cartItem.globalDescription ? cartItem.globalDescription : cartItem.description} isDetail={false} dateExprirePromotion={cartItem.expirationDate} quantity={cartItem.quantity} isCarrito={true} />
                                </div>
                            ))}
                            <CarritoFooter value={2700} history={this.props.history} handleFinishBuy={this.handleFinishBuy} isMobile={isMobile} />
                        </div>
                    </div>
                    {showMessage && 
                    <div className="message-popup">
                        {localStorage.getItem("isLogged") === "true" ?
                            <div className="message-container-message">
                                <h3> Compra finalizada con exito! </h3>
                            </div>
                        :
                            <div className="message-container-message">
                                <h3> Debes iniciar sesion previo a finalizar la compra </h3>
                                <Button isDisabled={false} className="divider" handleClick={() => this.loggin()} content="Iniciar" isPrimary={true} isBig={true} />
                            </div>
                        }
                    </div>
                }
                </article>
            );
        }
    }  
}
    
export default CartPage;
