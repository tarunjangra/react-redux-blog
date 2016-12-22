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
        <strong>{post.id}:<Link to={"/posts/"+post.id}>{post.title}</Link></strong>
      </li>
    });
  }

  render() {
    return <div>
    <div className="pull-xs-right">
    <Link to="/posts/new" className="btn btn-primary">Add post</Link>
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