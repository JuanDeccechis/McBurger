import React from 'react';
import Button from '../components/button/Button';
import FoodInfo from '../components/foodInfo/FoodInfo';
import Item from '../components/item/Item';
import SliderProducts from '../components/sliderProducts/SliderProducts';
import SliderProductsWithoutNumbers from '../components/sliderProducts/SliderProductsWithoutNumbers';
import { Foods } from '../mocks/Foods';
import { Promotions } from '../mocks/Promotions';

class ItemDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            isRollback: false
        };
    }

    componentDidMount() {
        let showMessage = localStorage.getItem("showMessage");
        if (showMessage === "true") {
            this.addProduct();
        }
    }

    handleClick(id) {
        this.addProduct();
    }
    
    addProduct = () => {
        let _this = this;
        this.setState({ showMessage:true });
        window.setTimeout(() => {
            _this.setState({ showMessage:false });
            localStorage.setItem("showMessage", "false");
        }, 3000);
    }

    rollbackBuy() {
        this.setState({ isRollback: true });
    }

    render() {
        const { isMobile } = this.props;
        const { showMessage, isRollback } = this.state;
        return (
            <article className={`container-pages `}>
                <div className="detail-page-container">
                    <Item className="divider" handleAddItem={() => this.handleClick(Foods[0].list[0].id)} image={Foods[0].list[0].image} title={Foods[0].list[0].title} value={Foods[0].list[0].value} description={Foods[0].list[0].description} isDetail={true} />
                    {isMobile ?
                        <FoodInfo item={Foods[0].list[0]} />
                    :
                        <div className="widthAuto">
                            <FoodInfo item={Foods[0].list[0]} />
                            <FoodInfo item={Foods[0].list[0]} isIngredients={true} />

                        </div>
                    }
                </div>
                <div className="divider"></div>
                <SliderProductsWithoutNumbers isMobile={isMobile} history={this.props.history} items={Promotions} />
                {showMessage && 
                    <div className="message-popup">
                        {isRollback ?
                            <div className="message-container-message">
                                <h3> Producto eliminado del carrito </h3>
                            </div>
                        :
                            <div className="message-container-message">
                                <h3> Producto agregado al carrito </h3>
                                <Button isDisabled={false} className="divider" handleClick={() => this.rollbackBuy()} content="Deshacer" isPrimary={true} isBig={true} />
                            </div>
                        }
                    </div>
                }
            </article>
        );
    }  
}
    
export default ItemDetailPage;
