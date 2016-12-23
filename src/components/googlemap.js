import React, {Component} from 'react';


export default class GoogleMap extends Component { 

    // stoping rerendering of react component.
    shouldComponentUpdate(){
        return false;
    }
    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map,{
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });
    }
    render(){
        return (
            <div>
            <h3>Show google map!</h3>
            <div id="map" ref="map" />
            </div>);
    }
}

