import React from 'react';
import './SliderProducts.css';
import Title from '../title/Title';
import SliderItem from '../sliderItem/SliderItem';

class SliderProductsWithoutNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
        };
    }

    

    handleAddItem(id) {
        console.log(id);
        console.log("slider product added");
        localStorage.setItem("showMessage", "true");
        let path = `/detailAdded`;
        this.props.history.push(path);
    }

    handleShowDetail(id) {
        console.log(id);
        let path = `/detail`;
        this.props.history.push(path);
    }
    
    render() {
        const { title, items, isMobile } = this.props;
        const { currentSection } = this.state;
        return (
            <div className={`container-slider-products-info`}>
                <Title text={`${title ? title : 'Otros productos'}`} />

                <div className={`container-slider-products-data ${isMobile ? 'short-divider' : 'divider'}`} /*onScroll={(event) => this.viewScroll(event)}>*/>
                    <div className="slider-products-data">
                        {items.map((item, index) => (
                            <SliderItem id={`sliderProduct${index}`} handleImageClick={() => this.handleShowDetail()} handleAddItem={() => this.handleAddItem(item.id)} key={index} isMobile={isMobile} title={item.title} dateExprirePromotion={item.expirationDate} value={item.value} onClick={() => this.setFocus(index)} image={item.image} />
                        ))}
                    </div>
                </div>  
                



            </div>
        );
    }  
}
    
export default SliderProductsWithoutNumbers;
