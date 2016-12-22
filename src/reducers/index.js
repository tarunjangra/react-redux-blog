import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import PhotoReducer from './reducer_photos';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  photos: PhotoReducer,
  form: formReducer
});

export default rootReducer;
