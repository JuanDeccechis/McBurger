import React from 'react';
import './Card.css';
import Title from '../title/Title';
import Image from '../image/Image';
import Button from '../button/Button';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { className, value, image, title, description, handleAddItem } = this.props;
        return (
            <>
                <div className={`container-item container-food container-item-without-detail card-item
                ${className ? className : ''} `}
                onClick={() => this.onClick()}>
                    <Image alt="foto" value={value} handleClick={() => this.clickImage()} className={image ? image : "Combo"} isBig={true} isFood={true}/>
                </div>
        
                <div className={`container-item container-food container-item-without-detail card-item
                ${className ? className : ''} `}>
                    <Title className={`titles-item-space title-centralized`} text={title} />

                    <>
                        <div className="item-long-description">
                            <span className="text1"> {description} </span>
                        </div>
                        <div className="divider desktop-centralized">
                            <Button handleClick={handleAddItem} isDisabled={false} content="Agregar" isBig={true} isPrimary={true} className="centralized" />
                        </div>
                    </>  

                </div>

            </>
        );
    }  
}
    
export default Card;
