import React from 'react';
import Item from '../components/item/Item';
import SliderCategories from '../components/sliderCategories/SliderCategories';
import SliderProducts from '../components/sliderProducts/SliderProducts';
import { Foods, FoodCategories } from '../mocks/Foods';
import { Promotions } from '../mocks/Promotions';

class FoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleShowDetail(id) {
        console.log(id);
        let path = `/detail`;
        this.props.history.push(path);
    }
    
    render() {
        const { isMobile } = this.props;
        console.log(isMobile);
        return (
            <>
                <article className={`container-pages container-page-food`}>
                    <SliderProducts isMobile={isMobile} history={this.props.history} title="Nuestras promos" items={Promotions} />
                        {Foods.map((item, index) => (
                            <div key={index} className="longDivider">
                                <h3 id={`food-category-${item.type}`}> {item.type} </h3>
                                {item.list.map((food, i) => (
                                    <Item key={i} className="divider" handleClick={() => this.handleShowDetail(food.id)} title={food.title} value={food.value} description={food.description} isDetail={false} />
                                    ))}
                            </div>
                        ))}

                </article>
                    <SliderCategories className="divider container-foods" hasArrows={true} isMobile={isMobile} options={FoodCategories} />
                </>
        );
    }  
}
    
export default FoodPage;
