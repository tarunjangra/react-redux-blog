import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

const ROOT_URL='https://reduxblog.herokuapp.com/api';
const API_KEY='?key=izapapikeyvlalue';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: DELETE_POST,
        payload: request
    }
}

export function fetchPhotos(){
    const request = axios.get('http://jsonplaceholder.typicode.com/photos?albumId=1');
    return {
        type: FETCH_PHOTOS,
        payload: request
    }
}