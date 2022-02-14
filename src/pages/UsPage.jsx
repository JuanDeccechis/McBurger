import React from 'react';
import Button from '../components/button/Button';
import IconsCustom from '../components/icons/IconsCustom';
import Input from '../components/input/Input';
import TextArea from '../components/textArea/TextArea';

class UsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSection: 0,
            fileAttached: false,
        };
    }

    componentDidMount() {
        this.setFocus(0);
    }

    setFocus(sectionId) {
        const { selectedSection } = this.state;
        let sections = document.querySelectorAll(".us-option");
        let previousSection = sections[selectedSection];
        if (previousSection) {
            previousSection.classList.remove("us-selected-option");
        }
        let section = sections[sectionId];
        section.classList.add("us-selected-option");
        this.setState({ selectedSection: sectionId });
    }
    
    attachFile() {
        this.setState({ fileAttached: true });
    }

    render() {
        const { isMobile } = this.props;
        const { selectedSection, fileAttached } = this.state;
        if (isMobile) {
            return (
                <article className={`container-pages us-form`}>
                    <div className="container-slider-data-categories">                    
                        <div className={`slider-data ${isMobile ? '' : 'centralized'}`}>
                            <div id={`slider-categories-0`} className="text1 us-option text-centralized" onClick={() => this.setFocus(0)}> 
                                <b className="text1 text1-bold"> Enviar comentario </b> 
                            </div>
                            <div id={`slider-categories-1`} className="text1 us-option text-centralized" onClick={() => this.setFocus(1)}> 
                                <b className="text1 text1-bold"> Solicitar empleo </b> 
                            </div>
                        </div>
                    </div>
                    <div className={`divider`} >
                        <Input placeholder="Nombre" name="Nombre" minLength={3} type="text" hasIconLeft={false} >
                        </Input>
                        <Input placeholder="Apellido" name="Apellido" minLength={3} type="text" hasIconLeft={false} >
                        </Input>
                        <Input placeholder="E-mail" name="E-mail" minLength={3} type="text" hasIconLeft={false} >
                        </Input>
                        <Input placeholder="Telefono" name="Telefono" minLength={3} type="text" hasIconLeft={false} >
                        </Input>
                        <Input placeholder="Ciudad" name="Ciudad" minLength={3} type="text" hasIconLeft={false} >
                            <IconsCustom icon="NavigationOutlinedIcon" className="right" />
                        </Input>
                        <TextArea placeholder="Comentario" name="Comentario" minLength={3} type="text" hasIconLeft={false} >
                        </TextArea>
                        
                    {selectedSection === 0 ?
                        <Button isDisabled={false} content="Enviar comentario" isPrimary={true} isBig={true} />            
                    :
                        <div>
                            <div className="us-inline">
                                <Button isDisabled={false} handleClick={() => this.attachFile()} content="Adjuntar CV" isPrimary={true} isBig={false} />
                                {fileAttached &&
                                    <span className="text1 us-file-attached">Curriculum-Vitae.pdf</span>
                                }
                            </div>

                            <Button isDisabled={!fileAttached} className="divider" content="Postularme" isPrimary={true} isBig={true} />
                        </div>
                    }
                    </div>
                </article>
            );
        }
        else {
            return (
                    <article className={`container-pages us-page-container`}>
                        <div>
                            <div id="map" className="background image publicity" />  
                        </div>
                        <div className="us-form">
                            <div className="container-slider-data-categories">                    
                                <div className={`slider-data ${isMobile ? '' : 'centralized'}`}>
                                    <div id={`slider-categories-0`} className="text1 us-option text-centralized" onClick={() => this.setFocus(0)}> 
                                        <b className="text1 text1-bold"> Enviar comentario </b> 
                                    </div>
                                    <div id={`slider-categories-1`} className="text1 us-option text-centralized" onClick={() => this.setFocus(1)}> 
                                        <b className="text1 text1-bold"> Solicitar empleo </b> 
                                    </div>
                                </div>
                            </div>
                            <div className={`divider`} >
                                <Input placeholder="Nombre" name="Nombre" minLength={3} type="text" hasIconLeft={false} >
                                </Input>
                                <Input placeholder="Apellido" name="Apellido" minLength={3} type="text" hasIconLeft={false} >
                                </Input>
                                <Input placeholder="E-mail" name="E-mail" minLength={3} type="text" hasIconLeft={false} >
                                </Input>
                                <Input placeholder="Telefono" name="Telefono" minLength={3} type="text" hasIconLeft={false} >
                                </Input>
                                <Input placeholder="Ciudad" name="Ciudad" minLength={3} type="text" hasIconLeft={false} >
                                    <IconsCustom icon="NavigationOutlinedIcon" className="right" />
                                </Input>
                                <TextArea placeholder="Comentario" name="Comentario" minLength={3} type="text" hasIconLeft={false} >
                                </TextArea>
                                
                            {selectedSection === 0 ?
                                <Button isDisabled={false} content="Enviar comentario" isPrimary={true} isBig={true} />            
                            :
                                <div>
                                    <div className="us-inline">
                                        <Button isDisabled={false} handleClick={() => this.attachFile()} content="Adjuntar CV" isPrimary={true} isBig={false} />
                                        {fileAttached &&
                                            <span className="text1 us-file-attached">Curriculum-Vitae.pdf</span>
                                        }
                                    </div>

                                    <Button isDisabled={!fileAttached} className="divider" content="Postularme" isPrimary={true} isBig={true} />
                                </div>
                            }
                            </div>
                        </div>
                    </article>
            );
        }
    }  
}
    
export default UsPage;
