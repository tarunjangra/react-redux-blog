import React from 'react';
import {Route, IndexRoute} from 'react-router'
import App  from './components/app';
import List from './components/list';
import NewPost from './components/new-post';
import PostShow from './components/post-show';
import ReSelect from './components/reselect';

const Greeting = () => {
  return <div>Hay There!</div>;
}

export default (
<Route path="/" component={App} >
  <IndexRoute component={List} />
  <Route path="/posts/new" component={NewPost} />
  <Route path="/posts/:id" component={PostShow} />
  <Route path="/reselect" component={ReSelect} />
</Route>
);
