import React, {Component} from 'react';
import GoogleMap from './googlemap';


export default class GMap extends Component { 
    render(){
        return (<div>

    <h4>Google Map:</h4>
    <hr />
        <GoogleMap lng={150.644} lat={-34.397} />
        </div>);
    }
}

