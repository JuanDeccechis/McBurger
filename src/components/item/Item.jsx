import React, { Component } from 'react';
import './Item.css';
import Button from '../button/Button';
import Image from '../image/Image';
import Title from '../title/Title';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { title, value, description, date, isDetail } = this.props;
        return (
            <div className={`container-item 
            ${date ? 'promotion' : 'food'}
            ${isDetail ? '' : 'short-item'}`}>
                <Image alt="foto" className="Combo" isBig={true} isFood={date ? false : true}/>
                <Title className="titles-item-space" text={title} value={value} />
                {isDetail &&
                    <>
                        <div className="item-description">
                            <span className="text1"> {description} </span>
                        </div>
                        {date &&
                            <div className="divider text-centralized">
                            <b className="text1 text1-bold">Valido hasta {date}</b>
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
    
export default Item;
