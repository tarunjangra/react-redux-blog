import React, {Component} from 'react';


export default class GoogleMap extends Component { 
    shouldComponentUpdate(){
        return false;
    }
    componentDidMount() {
        new google.maps.Map(this.ref.map,{
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });
    }
    render(){
        <div id="map" ref="map" />
    }
}

