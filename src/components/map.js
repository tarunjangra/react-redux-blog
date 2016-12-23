import React, {Component} from 'react';
import GoogleMap from './googlemap';


export default class GMap extends Component { 
    render(){
        return (<div>
        <GoogleMap lng={150.644} lat={-34.397} />
        </div>);
    }
}

