import React from 'react';
import IconsCustom from '../components/icons/IconsCustom';
import Input from '../components/input/Input';
import LocationInfo from '../components/locationInfo/LocationInfo';
import { Locations } from '../mocks/Locations';

class LocationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(Locations);
        return (
            <article className={`container-pages `}>
                <div className="container-pages-with-inputs divider">
                <Input placeholder="name" name="name" minLength={3} type="text" hasIconLeft={false} >
                    <IconsCustom icon="NavigationOutlinedIcon" className="right" />
                </Input>
                </div>
                <div>
                    <div id="map" className="map image image-centralized" />  
                </div>

                {Locations.map((item, index) => (
                    <div key={index} className="longDivider">
                        <h3> {item.type} </h3>
                        {item.places.map((location, i) => (
                            <LocationInfo key={i} className="divider" title={location.title} direction={location.direction} phone={location.phone} isOpen={location.isOpen} />
                        ))}
                    </div>
                ))}
            </article>
        );
    }  
}
    
export default LocationPage;
