import { queryConstants } from '../constants/queryConstants';

export function getData(state = {}, action){
    switch(action.type){
        case queryConstants.DATA_REQUEST:
            return {
                fetching: true,
                data: action.data
            };
        case queryConstants.DATA_SUCCESS:
            return {
                fetched: true,
                data: action.data
            };
        case queryConstants.DATA_FAILURE:
            return {};
        default:
            return state;
    }
}