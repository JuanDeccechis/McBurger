import React from 'react';
import Card from '../components/card/Card';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScroll: 0,
            seccionActual: 0,
        };
    }
    

    componentDidMount() {
        let objectToScroll = document.querySelector("article");
        objectToScroll.addEventListener("scroll", this.scrollFun);
    }

    componentWillUnmount() {
        let objectToScroll = document.querySelector("article");
        objectToScroll.removeEventListener("scroll", this.scrollFun);
    }

    scrollFun = () => {
        const { prevScroll } = this.state;
        let objectToScroll = document.querySelector("article");
        let  scrOfY = 0;
        let caso = 0;
        if( objectToScroll.scrollTop )  {
            scrOfY = objectToScroll.scrollTop;
        }
        if (scrOfY > prevScroll) {
            //caso = this.getCasoDesc(scrOfY);
            caso = this.getCasoDesc(scrOfY);
        }
        else {
            caso = this.getCasoAsc(scrOfY);
        }
        this.setState({ prevScroll: scrOfY });
        if (caso != 0) {
            this.setState({ seccionActual: caso });
        }
        switch (caso) {
            case 1:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.add("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".carne").classList.remove("oculto");
                break;
            case 2:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.add("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".lechuga").classList.remove("oculto");
                break;
            case 3:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.add("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".berenjena").classList.remove("oculto");
                break;
            case 4:
                document.querySelector(".panArriba").classList.add("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panArriba").classList.remove("oculto");
                break;
            case 11:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                break;
            case 12:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.add("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                window.setTimeout(() => {
                    document.querySelector(".panArriba").classList.add("oculto");
                }, 1000);
                break;
            case 13:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.add("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                window.setTimeout(() => {
                    document.querySelector(".berenjena").classList.add("oculto");
                }, 1000);
                break;
            case 14:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.add("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                window.setTimeout(() => {
                    document.querySelector(".lechuga").classList.add("oculto");
                }, 1000);
                break;
            case 15:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.add("animaSubidaCarne");
                window.setTimeout(() => {
                    document.querySelector(".carne").classList.add("oculto");
                }, 1000);
                break;
            default:
                break;
        }
    }

    getCasoDesc = (altura) => {
        const { seccionActual } = this.state;
        if (altura >= window.innerHeight * 3.0) {
            if (seccionActual !== 4) {
                return 4;
            }
            else {
                return 0;
            }
        }
        if (altura >= window.innerHeight * 2.0) {
            if (seccionActual !== 3) {
                return 3;
            }
            else {
                return 0;
            }
        }
        if (altura >= window.innerHeight * 1.0) {
            if (seccionActual !== 2) {
                return 2;
            }
            else {
                return 0;
            }
        }
        if (altura < window.innerHeight * 1.0) {
            if (seccionActual !== 1) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }

    getCasoAsc = (altura) => {
        const { seccionActual } = this.state;
        if (altura < 100) {
            if (seccionActual !== 15) {
                return 15;
            }
            else {
                return 0;
            }
        }
        if (altura < window.innerHeight * 1.0) {
            if (seccionActual !== 14) {
                return 14;
            }
            else {
                return 0;
            }
        }
        if (altura < window.innerHeight * 2.0) {
            if (seccionActual !== 13) {
                return 13;
            }
            else {
                return 0;
            }
        }
        if (altura < window.innerHeight * 3.0) {
            if (seccionActual !== 12) {
                return 12;
            }
            else {
                return 0;
            }
        }
        if (altura >= window.innerHeight * 3.0) {
            if (seccionActual !== 11) {
                return 11;
            }
            else {
                return 0;
            }
        }
    }

    
    render() {
        const { seccionActual } = this.state;
        return (
            <article className={`container-pages `}>
home page
            <div>
                <div className="section section-burger">
                    <Card title="Nuestras Comidas" description="Experimenta un mundo de sabor con nuestras delicias. Contamos con la materia prima de mayor calidad" />
                </div>
            </div>
            <div>
                <div className="section section-lettuce">
                    <Card title="Nuestras Comidas" description="Experimenta un mundo de sabor con nuestras delicias. Contamos con la materia prima de mayor calidad" />
                </div>
            </div>
            <div>
                <div className="section section-eggplants">
                    <Card title="Nuestras Comidas" description="Experimenta un mundo de sabor con nuestras delicias. Contamos con la materia prima de mayor calidad" />
                </div>
            </div>
            <div>
                <div className="section section-bread">
                    <Card title="Nuestras Comidas" description="Experimenta un mundo de sabor con nuestras delicias. Contamos con la materia prima de mayor calidad" />
                </div>
            </div>
            <div className="out">
                <div className="oculto parts panArriba"/>
                <div className="oculto parts berenjena"/>
                <div className="oculto parts lechuga"/>
                <div className="oculto parts carne"/>
                <div className="parts panAbajo"/>
            </div>


            </article>
        );
    }  
}
    
export default HomePage;
