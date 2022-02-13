import React from 'react';
import Item from '../components/item/Item';
import { Promotions } from '../mocks/Promotions';

class PromotionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(id) {
        console.log(id);
    }
    
    render() {
        console.log(Promotions);
        return (
            <article className={`container-pages `}>
                <h2> Promos </h2> 
                {Promotions.map((promotion, index) => (
                    <div key={index}>
                        <Item className="divider" handleClick={() => this.handleClick(promotion.id)} title={promotion.title} value={promotion.value} description={promotion.globalDescription} isDetail={false} dateExprirePromotion={promotion.expirationDate} />
                    </div>
                ))}

            </article>
        );
    }  
}
    
export default PromotionPage;
