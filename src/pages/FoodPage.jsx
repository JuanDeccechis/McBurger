import React, { Component } from 'react';
import Item from '../components/item/Item';
import SliderCategories from '../components/sliderCategories/SliderCategories';
import { Foods, FoodCategories } from '../mocks/Foods';

class FoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(id) {
        console.log(id);
    }
    
    render() {
        return (
            <article className={`container-pages `}>
                <h2> Comidas </h2> 
                <SliderCategories hasArrows={true} isMobile={true} options={FoodCategories} />
                {Foods.map((item, index) => (
                    <div key={index} className="longDivider">
                        <h3> {item.type} </h3>
                        {item.list.map((food, i) => (
                            <Item key={i} className="divider" handleClick={() => this.handleClick(food.id)} title={food.title} value={food.value} description={food.description} isDetail={false} />
                        ))}
                    </div>
                ))}

            </article>
        );
    }  
}
    
export default FoodPage;
