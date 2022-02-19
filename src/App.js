import './App.css';
import './AnimatedScroll.css';
import './AnimatedPortrait.css';
import React from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Image from './components/image/Image';
import IconsCustom from './components/icons/IconsCustom';
import CarritoFooter from './components/carritoFooter/CarritoFooter';
import FoodInfo from './components/foodInfo/FoodInfo';
import LocationInfo from './components/locationInfo/LocationInfo';
import Item from './components/item/Item';
import SliderCategories from './components/sliderCategories/SliderCategories';
import IngredientsInfo from './components/ingredientsInfo/IngredientsInfo';
import SliderItem from './components/sliderItem/SliderItem';
import SliderProducts from './components/sliderProducts/SliderProducts';
import Menu from './components/menu/Menu';
import Router from './pages/Router';
import LoadingPage from './pages/LoadingPage';


const mobileMax = 600;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            isMobile: window.innerWidth <= mobileMax,
            isLoading: true,
        }
    }

    componentDidMount(){
        localStorage.setItem("isLogged", "false");
        window.addEventListener('resize', this.reportWindowSize);
        if (window.innerWidth <= mobileMax) {
            window.setTimeout(() => {this.setState({ isLoading: false })}, 10000);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.reportWindowSize);
    }

    reportWindowSize = (event) => {
        this.setState({ 
            width: window.innerWidth, 
            isMobile: window.innerWidth <= mobileMax, 
        });
    }

    render() {
        const { isMobile, isLoading } = this.state;
        return (
            <div className="App">
                {isLoading && isMobile ?
                    <LoadingPage />
                :
                    <Router isMobile={isMobile} />
                }
            </div>
        );
    }
}

export default App;