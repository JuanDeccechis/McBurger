import React from 'react';
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
        const { handleAddItem, handleImageClick, title, dateExprirePromotion, value, isMobile, id } = this.props;
        console.log("item slider");
        console.log(isMobile);
        return (
            <div id={id} className={`container-item container-slider-item`}>
                <Title className="control-overflow with-padding" text={title} />
                <Image alt="foto" handleClick={handleImageClick} className="Combo short-divider" isBig={!isMobile} isFood={dateExprirePromotion ? false : true}/>
                <div className="titles-space-between short-divider">
                    <b className="text1 text1-bold"> ${value} </b>
                    <Button handleClick={handleAddItem} isDisabled={false} content="Agregar" isBig={false} isPrimary={true}/>
                </div>

            </div>
        );
    }  
}
    
export default SliderItem;
