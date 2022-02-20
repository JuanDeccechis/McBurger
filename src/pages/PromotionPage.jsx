import React from 'react';
import Item from '../components/item/Item';
import { Promotions } from '../mocks/Promotions';

class PromotionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(id) {
        let path = `/detail`;
        this.props.history.push(path);
    }
    
    render() {
        const { isMobile } = this.props;
        return (
            <article className={`container-pages promotion-pages`}>
                {Promotions.map((promotion, index) => (
                    <div key={index} className={`${isMobile ? '' : 'inline'}`}>
                        <Item className="divider" handleClick={() => this.handleClick(promotion.id)} title={promotion.title} value={promotion.value} description={promotion.globalDescription} isDetail={false} dateExprirePromotion={promotion.expirationDate} image={promotion.image} />
                    </div>
                ))}

            </article>
        );
    }  
}
    
export default PromotionPage;
