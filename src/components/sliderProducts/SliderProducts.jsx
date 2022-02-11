import React, { Component } from 'react';
import './SliderProducts.css';
import Title from '../title/Title';
import SliderItem from '../sliderItem/SliderItem';
import IconsCustom from '../icons/IconsCustom';

class SliderProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
        };
    }

    componentDidMount() {
        this.setFocus(0);
    }

    handleScrollLink(event, sectionId) {
        event.preventDefault();
        if ((sectionId > -1) && (sectionId < 6)) {
            document.querySelector(`#slider-categories-${sectionId}`).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector(`#sliderProduct${sectionId}`).scrollIntoView({
                behavior: 'smooth'
            });
            let log = document.querySelector(`.container-slider-products-data`);
            console.log(sectionId);
            console.log(log.scrollLeft);
            this.setState({ currentSection: sectionId });
            this.setFocus(sectionId);
        }
    }

    setFocus(sectionId) {
        const { selectedSection } = this.state;
        let sections = document.querySelectorAll(".slider-product-number-item");
        let previousSection = sections[selectedSection];
        if (previousSection) {
            previousSection.classList.remove("selected");
        }
        let section = sections[sectionId];
        section.classList.add("selected");
        this.setState({ selectedSection: sectionId, currentSection: sectionId });
    }

    viewScroll(event) {
        let scrollValue = event.target.scrollLeft;
        switch (true) {
            case scrollValue < 5:
                this.setFocus(0);
            break;
            case 5 <= scrollValue < 10:
                this.setFocus(1);
            break;
            case 10 <= scrollValue < 15:
                this.setFocus(2);
            break;
            case 15 <= scrollValue < 29:
                this.setFocus(3);
            break;
            case 29 <= scrollValue < 49:
                this.setFocus(4);
            break;
            case 49 <= scrollValue < 333:
                this.setFocus(5);
            break;
            case 333 <= scrollValue < 650:
                this.setFocus(6);
            break;
            default:
                this.setFocus(0);
            break;
        }
    }
    
    render() {
        const { title, dateExprirePromotion, value, isMobile } = this.props;
        const { currentSection } = this.state;
        return (
            <div className={`container-slider-products-info`}>
                <Title text={"Otros productos"} />

                <div className={`container-slider-products-data ${isMobile ? 'short-divider' : 'divider'}`} /*onScroll={(event) => this.viewScroll(event)}>*/>
                    <div className="slider-products-data">
                        <SliderItem id="sliderProduct0" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(0)} />
                        <SliderItem id="sliderProduct1" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(1)} />
                        <SliderItem id="sliderProduct2" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(2)} />
                        <SliderItem id="sliderProduct3" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(3)} />
                        <SliderItem id="sliderProduct4" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(4)} />
                        <SliderItem id="sliderProduct5" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(5)} />
                    </div>
                </div>  
                

                <div className={`container-slider-data-categories container-slider-product-data-categories ${isMobile ? 'short-divider' : 'container-slider-products-categories-top'}`}>
                    <div className="container-slider-arrow container-slider-product-arrow" >
                        <a onClick={(event) => this.handleScrollLink(event, currentSection-1)}>
                            <IconsCustom icon="arrowLeft" />
                        </a>
                    </div>
                    <div className={`container-slider-data ${isMobile ? 'container-slider-product-data' : ''}`}>

                        <div className={`slider-data slider-product-data ${isMobile ? '' : 'centralized'}`}>
                            <div id="slider-categories-0" className="text1 slider-product-number-item text-centralized" onClick={(event) => this.handleScrollLink(event, 0)}> 
                                <b className="text1 text1-bold"> 1 </b> 
                            </div>
                            <div id="slider-categories-1" className="text1 slider-product-number-item text-centralized" onClick={(event) => this.handleScrollLink(event, 1)}> 
                                <b className="text1 text1-bold"> 2 </b>
                            </div>
                            <div id="slider-categories-2" className="text1 slider-product-number-item text-centralized" onClick={(event) => this.handleScrollLink(event, 2)}> 
                                <b className="text1 text1-bold"> 3 </b>
                            </div>
                            <div id="slider-categories-3" className="text1 slider-product-number-item text-centralized" onClick={(event) => this.handleScrollLink(event, 3)}> 
                                <b className="text1 text1-bold"> 4 </b>
                            </div>
                            <div id="slider-categories-4" className="text1 slider-product-number-item text-centralized" onClick={(event) => this.handleScrollLink(event, 4)}> 
                                <b className="text1 text1-bold"> 5 </b>
                            </div>
                            <div id="slider-categories-5" className="text1 slider-product-number-item text-centralized" onClick={(event) => this.handleScrollLink(event, 5)}> 
                                <b className="text1 text1-bold"> 6 </b>
                            </div>
                        </div>
                    </div>
                    <div className="container-slider-arrow container-slider-product-arrow" >
                        <a onClick={(event) => this.handleScrollLink(event, currentSection+1)}>
                            <IconsCustom icon="arrowRight" />
                        </a>
                    </div>
                </div>

                {/*!isMobile &&
                    <div className={`container-slider-products-data ${isMobile ? 'short-divider' : 'divider'}`}>
                        <div className="slider-products-data">
                            <SliderItem id="sliderProduct0" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(0)} />
                            <SliderItem id="sliderProduct1" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(1)} />
                            <SliderItem id="sliderProduct2" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(2)} />
                            <SliderItem id="sliderProduct3" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(3)} />
                            <SliderItem id="sliderProduct4" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(4)} />
                            <SliderItem id="sliderProduct5" isMobile={isMobile} title={title} dateExprirePromotion={dateExprirePromotion} value={value} onClick={() => this.setFocus(5)} />
                        </div>
                    </div>
                */}
            </div>
        );
    }  
}
    
export default SliderProducts;
