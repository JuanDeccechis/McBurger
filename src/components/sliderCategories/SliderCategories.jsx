import React, { Component } from 'react';
import './SliderCategories.css';
import IconsCustom from '../icons/IconsCustom';

class SliderCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
            selectedSection: 0,
        };
    }

    componentDidMount() {
        this.setFocus(0);
    }

    handleScrollLink(event, sectionId) {
        event.preventDefault();
        if ((sectionId > -1) && (sectionId < 5)) {
            document.querySelector(`#slider-categories-${sectionId}`).scrollIntoView({
                behavior: 'smooth'
            });
            this.setState({ currentSection: sectionId });
            this.setFocus(sectionId);
        }
    }

    setFocus(sectionId) {
        const { selectedSection } = this.state;
        let sections = document.querySelectorAll(".slider-data-item");
        let previousSection = sections[selectedSection];
        if (previousSection) {
            previousSection.classList.remove("selected");
        }
        let section = sections[sectionId];
        section.classList.add("selected");
        this.setState({ selectedSection: sectionId, currentSection: sectionId });
    }
    
    render() {
        const { hasArrows, isMobile } = this.props;
        const { currentSection } = this.state;
        return (
            <div className="container-slider-data-categories">
                {hasArrows && isMobile &&
                    <div className="container-slider-arrow" >
                        <a onClick={(event) => this.handleScrollLink(event, currentSection-1)}>
                            <IconsCustom icon="arrowLeft" />
                        </a>
                    </div>
                }
                <div className={`${isMobile ? 'container-slider-data' : ''}`}>

                    <div className={`slider-data ${isMobile ? '' : 'centralized'}`}>
                        <div id="slider-categories-0" className="text1 slider-data-item text-centralized" onClick={() => this.setFocus(0)}> 
                            <b className="text1 text1-bold"> Carne </b> 
                        </div>
                        <div id="slider-categories-1" className="text1 slider-data-item text-centralized" onClick={() => this.setFocus(1)}>
                            <b className="text1 text1-bold"> Pollo </b>
                        </div>
                        <div id="slider-categories-2" className="text1 slider-data-item text-centralized" onClick={() => this.setFocus(2)}> 
                            <b className="text1 text1-bold"> Ensaladas </b>
                        </div>
                        <div id="slider-categories-3" className="text1 slider-data-item text-centralized" onClick={() => this.setFocus(3)}>
                            <b className="text1 text1-bold"> Papas </b>
                        </div>
                        <div id="slider-categories-4" className="text1 slider-data-item text-centralized" onClick={() => this.setFocus(4)}>
                            <b className="text1 text1-bold"> Nuggets </b>
                        </div>
                    </div>
                </div>
                {hasArrows && isMobile &&
                    <div className="container-slider-arrow" >
                        <a onClick={(event) => this.handleScrollLink(event, currentSection+1)}>
                            <IconsCustom icon="arrowRight" />
                        </a>
                    </div>
                }
                
            </div>
        );
    }  
}
    
export default SliderCategories;
