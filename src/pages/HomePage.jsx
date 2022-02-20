import React from 'react';
import Card from '../components/card/Card';
import AnimatedMenu from '../components/menu/AnimatedMenu';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScroll: 0,
            seccionActual: 0,
        };
    }
    

    componentDidMount() {
        const { isMobile } = this.props;
        if (!isMobile) {
            let objectToScroll = document.querySelector("article");
            objectToScroll.addEventListener("scroll", this.scrollFun);
        }
    }

    componentWillUnmount() {
        const { isMobile } = this.props;
        if (!isMobile) {
            let objectToScroll = document.querySelector("article");
            objectToScroll.removeEventListener("scroll", this.scrollFun);
        }
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
        let cards = 0;
        switch (caso) {
            case 1:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.add("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.add("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");
                document.querySelector(".carne").classList.remove("oculto");
                document.querySelector(".panAbajo").classList.remove("oculto");
                break;
            case 2:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.add("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");
                document.querySelector(".lechuga").classList.remove("oculto");

                cards = document.querySelectorAll(".card-lettuce");
                cards[0].classList.add("animaEntradaCardLechuga");
                cards[0].classList.remove("oculto");
                break;
            case 3:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.add("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");
                document.querySelector(".berenjena").classList.remove("oculto");

                cards = document.querySelectorAll(".card-eggplants");
                cards[0].classList.add("animaEntradaCardBerenjena");
                cards[0].classList.remove("oculto");
                break;
            case 4:
                document.querySelector(".panArriba").classList.add("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("oculto");

                //.classList.add("mostrarCardPanArriba");
                cards = document.querySelectorAll(".card-bread");
                cards[0].classList.add("animaEntradaCardPan");
                cards[0].classList.remove("oculto");
                break;
            case 11:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");
                break;
            case 12:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.add("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");

                window.setTimeout(() => {
                    document.querySelector(".panArriba").classList.add("oculto");
                }, 1000);
                break;
            case 13:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.add("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");

                //.classList.add("borrarCardPanArriba");
                cards = document.querySelectorAll(".card-bread");
                cards[0].classList.remove("animaEntradaCardPan");
                cards[0].classList.add("oculto");

                window.setTimeout(() => {
                    document.querySelector(".berenjena").classList.add("oculto");
                }, 1000);
                break;
            case 14:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.add("animaSubidaLechuga");
                document.querySelector(".carne").classList.remove("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaSubidaPanAbajo");

                cards = document.querySelectorAll(".card-eggplants");
                cards[0].classList.remove("animaEntradaCardBerenjena");
                cards[0].classList.add("oculto");

                window.setTimeout(() => {
                    document.querySelector(".lechuga").classList.add("oculto");
                }, 1000);
                break;
            case 15:
                document.querySelector(".panArriba").classList.remove("animaCaidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaCaidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaCaidaLechuga");
                document.querySelector(".carne").classList.remove("animaCaidaCarne");
                document.querySelector(".panAbajo").classList.remove("animaCaidaPanAbajo");
                document.querySelector(".panArriba").classList.remove("animaSubidaPanArriba");
                document.querySelector(".berenjena").classList.remove("animaSubidaBerenjena");
                document.querySelector(".lechuga").classList.remove("animaSubidaLechuga");
                document.querySelector(".carne").classList.add("animaSubidaCarne");
                document.querySelector(".panAbajo").classList.add("animaSubidaPanAbajo");

                cards = document.querySelectorAll(".card-lettuce");
                cards[0].classList.remove("animaEntradaCardLechuga");
                cards[0].classList.add("oculto");

                window.setTimeout(() => {
                    document.querySelector(".carne").classList.add("oculto");
                    document.querySelector(".panAbajo").classList.add("oculto");
                }, 1000);
                break;
            default:
                break;
        }
    }

    getCasoDesc = (altura) => {
        const { seccionActual } = this.state;
        if (altura >= (window.innerHeight * 3.0 - 1)) {
            if (seccionActual !== 4) {
                return 4;
            }
            else {
                return 0;
            }
        }
        if (altura > (window.innerHeight * 2.0 - 1)) {
            if (seccionActual !== 3) {
                return 3;
            }
            else {
                return 0;
            }
        }
        if (altura > (window.innerHeight * 1.0 - 1)) {
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

    handleRedirect(destination) {
        if (destination === "/session") {
            destination = "/promotion";
            localStorage.setItem("isLogged", "true");

        }
        this.props.history.push(destination);
    }
    
    render() {
        const { seccionActual } = this.state;
        const { isMobile } = this.props;
        if (isMobile) {
            return (
                <article className={`container-pages ${isMobile ? '' : 'container-home-page'} `}>
                <div>
                    <div id="home-section-1" className="section section-burger">
                        <Card isMobile={isMobile} background="section-burger" title="McBurger" buttonText="Iniciar sesion" primaryAction={() => this.handleRedirect("/session")} secondButtonText="Registrarme" secondaryAction={() => this.handleRedirect("/session")} description="Te damos la bienvenida a nuestra familia, donde puedes degustar la pasion que dejamos en la cocina." />
                    </div>
                </div>
                <div>
                    <div id="home-section-2" className="section section-lettuce">
                        <Card isMobile={isMobile} background="section-lettuce" title="Nuestras Comidas" buttonText="Ver comidas" primaryAction={() => this.handleRedirect("/food")} description="Experimenta un mundo de sabor con nuestras delicias. Contamos con la materia prima de mayor calidad." />
                    </div>
                </div>
                <div>
                    <div id="home-section-3" className="section section-eggplants">
                        <Card isMobile={isMobile} background="section-eggplants" title="Nuestras Promos" buttonText="Ver promos" primaryAction={() => this.handleRedirect("/promotion")} description="Disfruta los mejores combos de sabor: calidad, cantidad y variedad a precios super, con nuestras promociones." />
                    </div>
                </div>
                <div>
                    <div id="home-section-4" className="section section-bread">
                        <Card isMobile={isMobile} background="section-bread" title="Nosotros" buttonText="Contactanos" primaryAction={() => this.handleRedirect("/us")} description="Convertite en parte del mejor equipo de trabajo, y dejanos comentarios para seguir mejorando tanto nuestra comida como nuestra atencion." />
                    </div>
                </div>
                {!isMobile &&
                    <div className="out">
                        <div className="oculto parts panArriba"/>
                        <div className="oculto parts berenjena"/>
                        <div className="oculto parts lechuga"/>
                        <div className="oculto parts carne"/>
                        <div className="parts panAbajo"/>
                    </div>
                }
                </article>
            );
        }
        else {
            return (
                <div className="container-pages-no-scrolled home-with-extra-menu">
                    <span>
                    <AnimatedMenu />

                    </span>
                    <article className={`container-pages ${isMobile ? '' : 'container-home-page'} `}>
                    <div>
                        <div id="home-section-1" className="section section-burger">
                            <Card isMobile={isMobile} background="section-burger" title="McBurger" buttonText="Iniciar sesion" primaryAction={() => this.handleRedirect("/session")} secondButtonText="Registrarme" secondaryAction={() => this.handleRedirect("/session")} description="Te damos la bienvenida a nuestra familia, donde puedes degustar la pasion que dejamos en la cocina." />
                        </div>
                    </div>
                    <div>
                        <div id="home-section-2" className="section section-lettuce">
                            <Card isMobile={isMobile} background="section-lettuce" title="Nuestras Comidas" className="card-lettuce oculto" buttonText="Ver comidas" primaryAction={() => this.handleRedirect("/food")} description="Experimenta un mundo de sabor con nuestras delicias. Contamos con la materia prima de mayor calidad." />
                        </div>
                    </div>
                    <div>
                        <div id="home-section-3" className="section section-eggplants">
                            <Card isMobile={isMobile} background="section-eggplants" title="Nuestras Promos" className="card-eggplants oculto" buttonText="Ver promos" primaryAction={() => this.handleRedirect("/promotion")} description="Disfruta los mejores combos de sabor: calidad, cantidad y variedad a precios super, con nuestras promociones." />
                        </div>
                    </div>
                    <div>
                        <div id="home-section-4" className="section section-bread">
                            <Card isMobile={isMobile} background="section-bread" title="Nosotros" className="card-bread oculto" buttonText="Contactanos" primaryAction={() => this.handleRedirect("/us")}  description="Convertite en parte del mejor equipo de trabajo, y dejanos comentarios para seguir mejorando tanto nuestra comida como nuestra atencion." />
                        </div>
                    </div>
                    {!isMobile &&
                        <div className="out">
                            <div className="oculto parts panArriba"/>
                            <div className="oculto parts berenjena"/>
                            <div className="oculto parts lechuga"/>
                            <div className="oculto parts carne"/>
                            <div className="oculto parts panAbajo"/>
                        </div>
                    }
                    </article>
                </div>
            );
        }
    }  
}
    
export default HomePage;
