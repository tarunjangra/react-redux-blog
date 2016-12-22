import { fetchPhotos } from '../actions/index';

export function onPhotosEnter() {
    store.dispatch(fetchPhotos());
}