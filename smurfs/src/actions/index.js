import axios from 'axios';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS });
        axios
            .get('/smurfs')
            .then(res => {
                console.log(res)
            })
    }
}