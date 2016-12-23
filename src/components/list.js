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
        <Link to={"/posts/"+post.id}><strong>{post.title}</strong></Link>
        <span className="pull-right">{post.categories}</span>
      </li>
    });
  }

  render() {
    return <div>
    <h4>Posts:</h4>
    <hr />
     <Link to="/posts/new" className="btn btn-default btn-warning">Add post</Link>
     <hr />
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