import { fetchPhotos } from '../actions/index';
import { store }  from '../index';

export function onPhotosEnter() {
    store.dispatch(fetchPhotos());
}