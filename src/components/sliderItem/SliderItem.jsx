import React, { Component } from 'react';
import './SliderItem.css';
import Title from '../title/Title';
import Image from '../image/Image';
import Button from '../button/Button';

class SliderItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { title, dateExprirePromotion, value, isMobile, id } = this.props;
        return (
            <div id={id} className={`container-item container-slider-item`}>
                <Title className="control-overflow with-padding" text={title} />
                <Image alt="foto" className="Combo short-divider" isBig={!isMobile} isFood={dateExprirePromotion ? false : true}/>
                <div className="titles-space-between short-divider">
                    <b className="text1 text1-bold"> ${value} </b>
                    <Button isDisabled={false} content="Agregar" isBig={false} isPrimary={true}/>
                </div>

            </div>
        );
    }  
}
    
export default SliderItem;