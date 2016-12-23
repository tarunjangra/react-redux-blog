import React, {Component} from 'react';


export default class extends Component { 

    // stoping rerendering of react component.
    shouldComponentUpdate(){
        return false;
    }
    componentWillReceiveProps(nextProps){
        this.map.panTo({lat: nextProps.lat, lng: nextProps.lng});
    }
    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map,{
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });
        return true;
    }
    render(){
        return (<div id="map" ref="map" />);
    }
}

