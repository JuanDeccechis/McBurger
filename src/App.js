import './App.css';
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

const mobileMax = 425;
const tabletMax = 992;

function App() {
    const isMobile = window.innerWidth <= tabletMax;
    return (
        <div className="App">
            {/*<Button isDisabled={true} content="comidas" isBig={true} />
            <Button content="comidas" isBig={false} />
            <Button content="locales" isBig={true} />
            <button>carrito</button>
            <Button isDisabled={false} content="nosotros" isPrimary={false} isBig={true} />
            <Input placeholder="name" name="name" minLength={3} maxLength={12} type="text" hasIconLeft={true} >
                <IconsCustom icon="VisibilityIcon" className="right" />
    </Input>
            <Image alt="foto" className="Combo" isBig={false} isFood={false}/>
            <IconsCustom icon="NavigationOutlinedIcon" />
            <Item title="Pollo con cheddar" value={700} description="doble queso cheddar" isDetail={true}/>
            <Item title="Pollo con cheddar" value={700} description="doble queso cheddar" isDetail={false}/>
            <Item title="Pollo con cheddar" value={700} description="doble queso cheddar" date="08/03" isDetail={true}/>
            <FoodInfo />
            <LocationInfo />
            <SliderCategories hasArrows={true} isMobile={true} />
            <SliderCategories hasArrows={true} isMobile={false} />
            <IngredientsInfo />
            <Item title="Pollo con cheddar" value={700} description="doble queso cheddar" dateExprirePromotion="08/03" isDetail={false}/>
            <Item title="Pollo con cheddar" quantity={2} value={700} description="doble queso cheddar" dateExprirePromotion="08/03" isDetail={false} isCarrito={false} />
            <Item title="Pollo con cheddar" quantity={2} value={700} description="doble queso cheddar" dateExprirePromotion="08/03" isDetail={false} isCarrito={true} />
            <SliderItem title="Bacon full" dateExprirePromotion="08/03" value={1400} />
            <SliderProducts isMobile={true} title="Bacon full" dateExprirePromotion="11/03" value={750} isMobile={isMobile}/>
        <CarritoFooter title="Total" value={123}/>
    */}
        <Router isMobile={true} />
        </div>
    );
}

export default App;