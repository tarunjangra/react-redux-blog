import React, {Component} from 'react';
import GoogleMap from './googlemap';


export default class GMap extends Component { 
    constructor(props){
        super(props);
        this.state = {lat: -34.443, lng: 150.644};
    }
    render(){
        return <div>
        <h4>Google Map:</h4>
        <hr />
        <button className="btn btn-warning" onClick={()=>this.setState({lag: 40.407, lat: -74.032})}>Change Location</button>
        <hr />
        <GoogleMap lng={150.644} lat={-34.397} />
        </div>;
    }
}