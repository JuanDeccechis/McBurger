import React from 'react';
import './Item.css';
import Button from '../button/Button';
import Image from '../image/Image';
import Title from '../title/Title';
import IconsCustom from '../icons/IconsCustom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick() {
        const { handleClick } = this.props;
        if (handleClick) {
            handleClick();
        }
    }

    clickImage() {
    }
    
    render() {
        const { title, value, className, handleAddItem, description, dateExprirePromotion, isDetail, isCarrito, quantity } = this.props;
        if (isCarrito || (dateExprirePromotion && !isDetail)) {
            return (
                <div className={`container-item container-carrito ${className ? className : ''}`} onClick={() => this.onClick()}>
                    <div className="container-photo-description">

                        <Image alt="foto" handleClick={() => this.clickImage()} className="Combo" isBig={false} isLeft={true} isFood={dateExprirePromotion ? false : true}/>
                        <div className="photo-description">
                            <Title className="control-overflow" text={title} />
                            <div className="item-description divider text-control-overflow">
                                <span className="text1"> {description} </span>
                            </div>
                        </div>
                    </div>
                    {isCarrito ?
                        <div className="footer carrito-options">
                            <IconsCustom icon="DeleteForeverOutlinedIcon" />
                            <div className="carrito-change-quantity">
                                <IconsCustom icon="RemoveCircleOutlineOutlinedIcon" />
                                <b className="text1 text1-bold"> {quantity} </b>
                                <IconsCustom icon="AddCircleOutlineOutlinedIcon" />
                            </div>
                            <b className="text1 text1-bold icon"> ${value} </b>
                        </div>
                    :
                        <div className="space-around footer">
                            <b className="text1 text1-bold"> ${value} </b>
                            <b className="text1 text1-bold">Valido hasta {dateExprirePromotion}</b>
                        </div>
                    }
                </div>
            )
        }
        else {
            return (
                <div className={`container-item 
                ${dateExprirePromotion ? 'promotion' : 'container-food'}
                ${isDetail ? '' : 'container-item-without-detail'}
                ${className ? className : ''} `}
                onClick={() => this.onClick()}>
                    <Image alt="foto" value={value} handleClick={() => this.clickImage()} className="Combo" isBig={true} isFood={dateExprirePromotion ? false : true}/>
                    
                    <Title className={`titles-item-space ${dateExprirePromotion ? 'title-space-between' : 'title-centralized'}`} text={title} />
                    {isDetail &&
                        <>
                            <div className="item-description">
                                <span className="text1"> {description} </span>
                            </div>
                            {dateExprirePromotion &&
                                <div className={`divider ${isDetail ? 'text-centralized' : 'titles-item-space'}`}>
                                    <b className="text1 text1-bold">Valido hasta {dateExprirePromotion}</b>
                                </div>
                            }
                            <div className="divider desktop-centralized">
                                <Button handleClick={handleAddItem} isDisabled={false} content="Agregar" isBig={true} isPrimary={true} className="centralized" />
                            </div>
                        </>
                    }
                    
                </div>
            );
        }
    }  
}
    
export default Item;
