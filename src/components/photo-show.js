import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPhoto, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PhotoShow extends Component {
     static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }
    onDeleteHandler(){
        this.props.deletePost(this.props.params.id)
        .then(() => {
            this.context.router.push('/');
        });
    }
    render(){

        const {post} = this.props; // is equal to "const post = this.props.post"

        if(!post){
            return <div>Loading...</div>;
        }
        return <div>
        <h4>{this.props.post.title}</h4>
        <hr />
        <h3>{this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteHandler.bind(this)}>Delete</button>
        </div>;
    }
}

export default connect((state) => {
    return {post: state.posts.post}
},{fetchPost,deletePost})(PostShow);