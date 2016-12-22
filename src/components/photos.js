import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPhotos } from '../actions/index';
import { bindActionCreators } from 'redux';

class Photos extends Component {

    componentWillMount() {
        this.props.fetchPhotos();
    }

    renderPhotos(){
        return this.props.photos.map((photo) => {
            return (
                    <li className="list-group-item pull-left">
                        <img src={photo.thumbnailUrl} />
                    </li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group">
                {this.renderPhotos()}
            </ul>
        );
    }
}


export default connect((state) => {
  return {photos: state.photos.all}
},function(dispatch){
    return bindActionCreators({fetchPhotos},dispatch);
})(Photos);