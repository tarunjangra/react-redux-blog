import { CREATE_TODO } from '../actions/index';

const INITIAL_STATE = {
    all: [],
};


export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case CREATE_TODO:
            return {...state, all: action.payload.data }
        default:
            return state;
    }
}