import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Photos extends Component {
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
})(Photos);