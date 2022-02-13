import React from 'react';
import './IngredientsInfo.css';
import Title from '../title/Title';

class IngredientsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { value } = this.props;
        return (
            <div className="container-ingredients-info">
                <Title text={"Ingredientes"} value={value} />
                <div className="titles-space-between divider references">
                        <div className="text1 ingredientItem"> Carne vacuna </div>
                        <div className="text1 ingredientItem"> Queso cheddar </div>
                        <div className="text1 ingredientItem"> Lechuga </div>
                        <div className="text1 ingredientItem"> Tomate </div>
                        <div className="text1 ingredientItem"> Ketchup </div>
                </div>
            </div>
        );
    }  
}
    
export default IngredientsInfo;
