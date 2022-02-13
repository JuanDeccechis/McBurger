import React from 'react';
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
        const { options } = this.props;
        event.preventDefault();
        if ((sectionId > -1) && (sectionId < 5)) {
            document.querySelector(`#slider-categories-${sectionId}`).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector(`#food-category-${options[sectionId]}`).scrollIntoView({
                behavior: 'smooth'
            });
            this.setState({ currentSection: sectionId });
            this.setFocus(sectionId);
        }
    }

    setFocus(sectionId) {
        console.log(sectionId);
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
        const { hasArrows, isMobile, options, className } = this.props;
        const { currentSection } = this.state;
        return (
            <div className={`container-slider-data-categories ${className ? className : ''}`}>
                {hasArrows && isMobile &&
                    <div className="container-slider-arrow" >
                        <a href="/home" onClick={(event) => this.handleScrollLink(event, currentSection-1)}>
                            <IconsCustom icon="arrowLeft" />
                        </a>
                    </div>
                }
                <div className={`${isMobile ? 'container-slider-data' : ''}`}>

                    <div className={`slider-data ${isMobile ? '' : 'centralized'}`}>
                        {options.map((option, index) => (
                            <div id={`slider-categories-${index}`} key={index} className="text1 slider-data-item text-centralized" onClick={(event) => this.handleScrollLink(event, index)}> 
                                <b className="text1 text1-bold"> {option} </b> 
                            </div>
                        ))}
                    </div>
                </div>
                {hasArrows && isMobile &&
                    <div className="container-slider-arrow" >
                        <a href="/home" onClick={(event) => this.handleScrollLink(event, currentSection+1)}>
                            <IconsCustom icon="arrowRight" />
                        </a>
                    </div>
                }
                
            </div>
        );
    }  
}
    
export default SliderCategories;
