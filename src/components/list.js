import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';


class List extends Component {

  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return <li className="list-group-item" key={post.id}>
        <span className="pull-xs-right">{post.categories}</span>
        <strong><Link to={"/posts/"+post.id}>{post.id}:{post.title}</Link></strong>
      </li>
    });
  }

  render() {
    return <div>
    <div className="pull-xs-right">

    <div class="btn-group pull-right" role="group">
       <Link to="/posts/new" className="btn btn-default btn-primary">Add post</Link>
       <Link to="/photos" className="btn btn-default">Photos</Link>
    </div>
   
    </div>
    <h3>Posts:</h3>
    <ul className="list-group">
    {this.renderPosts()}
    </ul>
    </div>;
  }
}

/**
 * 
 
function  mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPosts },dispatch);
}

export default connect(null,mapDispatchToProps)(List);
*/

export default connect((state) => {
  return {posts: state.posts.all}
},{fetchPosts})(List);