import { queryConstants } from '../constants/queryConstants';
import { alertActions } from './alertActions';
import { dataService } from '../services/dataService';

export const queryActions = {
    fetchData
}

function fetchData() {
    return dispatch => {
        dispatch(request());

        dataService.fetchData().then(data => {
            dispatch(success(data));


        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request() { return { type: queryConstants.DATA_REQUEST }};
    function success(data) { return { type: queryConstants.DATA_SUCCESS, data }};
    function failure(error) { return { type: queryConstants.DATA_FAILURE, error }};
}
