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
        const { className, isMobile, value, image, title, buttonText, description, primaryAction, secondaryAction, secondButtonText } = this.props;
        return (
            <>
                <div className={`container-item container-food container-item-without-detail card-item
                ${className ? className : ''} `}
                onClick={() => this.onClick()}>
                    <Image alt="foto" value={value} handleClick={() => this.clickImage()} className={image ? image : "Combo"} isBig={true} isFood={true}/>
                </div>
        
                <div className={`container-item container-food container-item-without-detail card-item
                ${(secondButtonText && isMobile) ? 'card-item-with-buttons' : ''}
                ${className ? className : ''} `}>
                    <Title className={`titles-item-space title-centralized`} text={title} />

                    <>
                        <div className="item-long-description">
                            <span className="text1"> {description} </span>
                        </div>
                        {secondButtonText ?
                        <div className={`container-carrito-footer-buttons`}>
                            <Button handleClick={primaryAction} isDisabled={false} content={buttonText} isBig={true} isPrimary={true} className="divider" />
                            <Button handleClick={secondaryAction} isDisabled={false} content={secondButtonText} isBig={true} isPrimary={false} className="divider" />
                        </div>
                        :
                            <div className={`desktop-centralized`}>
                                <Button handleClick={primaryAction} isDisabled={false} content={buttonText} isBig={true} isPrimary={true} className="divider" />
                            </div>
                        }
                    </>  

                </div>

            </>
        );
    }  
}
    
export default Card;
