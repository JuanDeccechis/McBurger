import React from 'react';
import './FoodInfo.css';
import Title from '../title/Title';

class FoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { value } = this.props;
        return (
            <div className="container-food-info">
                <Title text={"Doble combo"} value={value} />
                <div className="titles-space-between divider">
                    <span>
                        <span className="text1">Calorias: </span>
                        <b className="text1 text1-bold">120 cal</b>
                    </span>
                    <span>
                        <span className="text1">Grasas: </span>
                        <b className="text1 text1-bold">40 g</b>
                    </span>
                </div>
                <div className="titles-space-between">
                    <span>
                        <span className="text1">Proteinas: </span>
                        <b className="text1 text1-bold">80 g</b>
                    </span>
                    <span>
                        <span className="text1">Hidratos: </span>
                        <b className="text1 text1-bold">40 g</b>
                    </span>
                </div>
            </div>
        );
    }  
}
    
export default FoodInfo;
