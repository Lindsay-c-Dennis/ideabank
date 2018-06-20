import _ from 'lodash';
import { FETCH_IDEAS } from '../actions'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_IDEAS:
            return _.mapKeys(action.payload.data, 'id')
            
        default:
            return state;
    }
}