import React from 'react';
import IconsCustom from '../components/icons/IconsCustom';
import Input from '../components/input/Input';
import LocationInfo from '../components/locationInfo/LocationInfo';
import { Locations } from '../mocks/Locations';

class LoadingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <article className="portrait">
                <div className="center">
                    <div className="image animated burger" />

                    <div className="image animated chips4" />
                    <div className="image animated chips3" />
                    <div className="image animated chips3 chips3-left" />
                    <div className="image animated chips1-top" />
                    <div className="image animated chips1-top chips1-top-right" />
                    <div className="image animated chips5" />
                    
                    {/*
                    */}
                </div>
            </article>
        )
    }  
}
    
export default LoadingPage;
