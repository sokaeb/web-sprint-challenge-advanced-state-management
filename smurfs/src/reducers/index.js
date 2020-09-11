

const initialState = {
    smurfs: [],
    loadingCharacters: false,
    errorMessage: "",
};

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    };
};