import React from 'react';
import './AnimatedMenu.css';
import IconsCustom from '../icons/IconsCustom';


class AnimatedMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previousSelected: 0,
            previousClassRotate: 0,
        }
    }

    handleScrollLink(event, sectionId, itemSelected) {
        event.preventDefault();
        let rotatingDesc = document.querySelector(".rotate-menu-1");
        let rotatingAsc = document.querySelector(".rotate-menu--1");
        let rotatingDesc2 = document.querySelector(".rotate-menu-2");
        let rotatingAsc2 = document.querySelector(".rotate-menu--2");
        if (!(rotatingAsc || rotatingDesc || rotatingAsc2 || rotatingDesc2)) {
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
            if (itemSelected !== 0) {
                this.handleRotate(itemSelected);
            }
        }
        else {
            console.log("click no tomado");
        }
    }

    handleRotate(itemSelected) {
        const { previousSelected, previousClassRotate } = this.state;
        let rotateContainer = document.querySelector(".container-animated-menu");
        let st = window.getComputedStyle(rotateContainer, null);
        let tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform");
        var values = tr.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');

        var a = values[0]; // 0.866025
        var b = values[1]; // 0.5
        var c = values[2]; // -0.5
        var d = values[3]; // 0.866025
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        rotateContainer.style.setProperty('--previous-rotation-value', angle + 'deg');
        let rotateItems = document.querySelectorAll(".animated-menu-item");
        let classRotate = 0;
        switch (true) {
            case (itemSelected === 7):
                classRotate = 1;
            break;
            case (itemSelected === -7):
                classRotate = -1;
            break;
            case (itemSelected === 6):
                classRotate = 2;
            break;
            case (itemSelected === -6):
                classRotate = -2;
            break;
            case (itemSelected === 2):
                classRotate = -2;
            break;
            case (itemSelected === -2):
                classRotate = 2;
            break;
            case (itemSelected === 1):
                classRotate = -1;
            break;
            case (itemSelected === -1):
                classRotate = 1;
            break;
            default:
                classRotate = 0;
            break;
        }
        console.log(classRotate);
        if (classRotate !== 0) {
            rotateContainer.classList.remove(`rotado-${previousClassRotate}`);
            for (let index = 0; index < rotateItems.length; index++) {
                rotateItems[index].classList.remove(`rotado-inverted-items-menu-${previousClassRotate}`);
            }
            window.setTimeout(() => {
                rotateContainer.classList.add(`rotate-menu-${classRotate}`);
                for (let index = 0; index < rotateItems.length; index++) {
                    rotateItems[index].classList.add(`rotate-inverted-items-menu-${classRotate}`);
                }
                this.setState({ previousSelected : (previousSelected + itemSelected), previousClassRotate : classRotate });
                window.setTimeout(() => {
                    rotateContainer.classList.add(`rotado-${classRotate}`);
                    rotateContainer.classList.remove(`rotate-menu-${classRotate}`);
                    for (let index = 0; index < rotateItems.length; index++) {
                        rotateItems[index].classList.add(`rotado-inverted-items-menu-${classRotate}`);
                        rotateItems[index].classList.remove(`rotate-inverted-items-menu-${classRotate}`);
                    };
                }, 2000);
            }, 0); 
        }
    }

    render() {
        const { previousSelected } = this.state;
        return (
            <div className="container-animated-menu rotado-0 rotate-menu-0">
                <div className="animated-menu burger-bread"></div>
                <a href="#home-section-1" className="animated-menu-item section-burger animated-item-1 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-1", 0 - previousSelected )}>
                    <div className="menu-item">
                        <span className="text1"> Login </span>
                    </div>
                </a>
                <a href="#home-section-2" className="animated-menu-item section-lettuce animated-item-2 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-2", 1 - previousSelected)}>
                    <div className="menu-item" >
                        <span className="text1"> Comidas </span>
                    </div>
                </a>
                <a href="#home-section-3" className="animated-menu-item section-eggplants animated-item-3 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-3", 2 - previousSelected)}>
                    <div className="menu-item">
                        <span className="text1"> Promos </span>
                    </div>
                </a>
                <a href="#home-section-4" className="animated-menu-item section-bread animated-item-4 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-4", 3 - previousSelected)}>
                    <div className="menu-item">
                        <span className="text1"> Nosotros </span>
                    </div>
                </a>


                <a href="#home-section-1" className="animated-menu-item section-burger animated-item-5 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-1", -4 - previousSelected)}>
                    <div className="menu-item">
                        <span className="text1"> Login </span>
                    </div>
                </a>
                <a href="#home-section-2" className="animated-menu-item section-lettuce animated-item-6 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-2", -3 - previousSelected)}>
                    <div className="menu-item">
                        <span className="text1"> Comidas </span>
                    </div>
                </a>
                <a href="#home-section-3" className="animated-menu-item section-eggplants animated-item-7 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-3", -2 - previousSelected)}>
                    <div className="menu-item">
                        <span className="text1"> Promos </span>
                    </div>
                </a>
                <a href="#home-section-4" className="animated-menu-item section-bread animated-item-8 rotado-inverted-items-menu-0 rotate-inverted-items-menu-0" onClick={(event) => this.handleScrollLink(event, "#home-section-4", -1 - previousSelected)}>
                    <div className="menu-item">
                        <span className="text1"> Nosotros </span>
                    </div>
                </a>

            </div>
        );
    }  
}
    
export default AnimatedMenu;