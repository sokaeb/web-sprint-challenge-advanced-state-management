import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

// export const POST_SMURFS = 'POST_SMURFS';
// export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
// export const POST_SMURFS_ERROR = 'POST_SMURFS_ERROR';


export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                // console.log(res)
                dispatch({
                    type: FETCH_SMURFS_SUCCESS, 
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_SMURFS_ERROR,
                    payload: {message: "No Smurfs Found"}
                })
                console.log(err);
            })
    }
}

// export const postSmurfs = (newData) => {
//     return (dispatch) => {
//         dispatch({ type: POST_SMURFS });
//         axios
//             .post('http://localhost:3333/smurfs', newData)
//             .then(res => {
//                 dispatch({
//                     type: POST_SMURFS, 
//                     payload: res.data
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: POST_SMURFS_ERROR,
//                     payload: {message: "Uh oh! Can't post new Smurf!"}
//                 })
//                 console.log(err)
//             })
//     }
// }

