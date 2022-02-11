import React, { Component } from 'react';
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
    
    render() {
        const { title, value, description, dateExprirePromotion, isDetail, isCarrito, quantity } = this.props;
        if (isCarrito || (dateExprirePromotion && !isDetail)) {
            return (
                <div className={`container-item container-carrito`}>
                    <div className="container-photo-description">

                        <Image alt="foto" className="Combo" isBig={false} isLeft={true} isFood={dateExprirePromotion ? false : true}/>
                        <div className="photo-description">
                            <Title className="control-overflow" text={title} />
                            <div className="item-description divider">
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
                            <b className="text1 text1-bold"> ${value} </b>
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
                ${isDetail ? '' : 'container-item-without-detail'} `}>
                    <Image alt="foto" className="Combo" isBig={true} isFood={dateExprirePromotion ? false : true}/>
                    
                    <Title className="titles-item-space" text={title} value={value} />
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
                                <Button isDisabled={false} content="Agregar" isBig={true} isPrimary={true} className="centralized" />
                            </div>
                        </>
                    }
                    
                </div>
            );
        }
    }  
}
    
export default Item;
