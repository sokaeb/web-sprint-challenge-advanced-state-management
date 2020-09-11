import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS });
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(res => {
                dispatch({
                    type: FETCH_SMURFS_SUCCESS, payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FETCH_SMURFS_ERROR,
                    payload: {message: "No Smurfs Found"}
                });
            });
    }
}