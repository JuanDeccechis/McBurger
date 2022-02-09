import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Image from './components/image/Image';
import IconsCustom from './components/icons/IconsCustom';


function App() {
    return (
        <div className="App">
            <Button isDisabled={true} content="comidas" isBig={true} />
            <Button content="comidas" isBig={false} />
            <Button content="locales" isBig={true} />
            <button>carrito</button>
            <Button isDisabled={false} content="nosotros" className="secondary" isBig={true} />
            <Input placeholder="name" name="name" minLength={3} maxLength={12} type="text" hasIconLeft={true} >
                <IconsCustom icon="VisibilityIcon" className="right" />
            </Input>
            <Image alt="foto" className="Combo" isBig={false} isFood={false}/>
            <IconsCustom icon="NavigationOutlinedIcon" />
        </div>
    );
}

export default App;