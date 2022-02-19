import React from 'react';
import './FoodInfo.css';
import Title from '../title/Title';

class FoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { item, isIngredients } = this.props;
        if (isIngredients) {
            return (
                <div className="container-food-info">
                    <Title className="title-space-between" text={"Ingredientes"} />
                    <div className="flex-wrap divider">
                        {item.ingredients.map((ingredient, index) => (
                            <div key={index} className="ingredient-inline">
                                <span className="text1"> {ingredient} </span>
                            </div>

                        ))}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container-food-info">
                    <Title className="title-space-between" text={item.title} value={item.value} />
                    <div className="titles-space-between divider">
                        <span>
                            <span className="text1"> {item.information[0].text}: </span>
                            <b className="text1 text1-bold"> {item.information[0].value} </b>
                        </span>
                        <span>
                            <span className="text1"> {item.information[1].text}: </span>
                            <b className="text1 text1-bold"> {item.information[1].value} </b>
                        </span>
                    </div>
                    <div className="titles-space-between">
                        <span>
                            <span className="text1"> {item.information[2].text}: </span>
                            <b className="text1 text1-bold"> {item.information[2].value} </b>
                        </span>
                        <span>
                            <span className="text1"> {item.information[3].text}: </span>
                            <b className="text1 text1-bold"> {item.information[3].value} </b>
                        </span>
                    </div>
                </div>
            );
        }
    }  
}
    
export default FoodInfo;
