// import axios from 'axios'; // WAY ONE
import React, { useState } from 'react';
import { postSmurfs } from '../actions'; // WAY TWO
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState(initialFormValues);
    const { postSmurfs } = props;
    

    // WAY ONE
    // const newSmurfPost = (smurf) => {
    //     axios
    //         .post('http://localhost:3333/smurfs', smurf)
    //         .then(res => {
    //             setNewSmurf(smurf)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         .finally(() => {
    //             setNewSmurf(initialFormValues)
    //         });
    // };

    // WAY ONE
    // const onSubmit = evt => {
    //     const newSmurfy = {
    //         name: newSmurf.name.trim(),
    //         age: newSmurf.age,
    //         height: newSmurf.height.trim(),
    //     };
    //     newSmurfPost(newSmurfy)
    // }

    // WAY ONE
    // const onInput = (value, data ) => {
    //     setNewSmurf({
    //         ...newSmurf,
    //         [value]: data,
    //     });
    // };

    // WAY ONE
    // const onInputChange = evt => {
    //     const { name, value } = evt.target;
    //     onInput(name, value);
    // };


    // WAY TWO
    const onSubmit = evt => {
        evt.preventDefault()
        postSmurfs(newSmurf)
        setNewSmurf(initialFormValues)
    }

    // WAY TWO
    const onInputChange = evt => {
       setNewSmurf({
           ...newSmurf,
           [evt.target.name]: evt.target.value
       })
    };

    return(
    <>
        <form className="formContainer" onSubmit={onSubmit}>
            <h3>Add a Smurf to Your Village</h3>
            <div className="formInputs">
                <label>Smurf Name&nbsp;
                    <input
                        // value={props.smurfs.name} // WAY ONE
                        value={newSmurf.name}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Age&nbsp;
                    <input
                        // value={props.smurfs.age}
                        value={newSmurf.age}
                        name='age'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Height&nbsp;
                    <input
                        // value={props.smurfs.height}
                        value={newSmurf.height}
                        name='height'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <button>Add Smurf</button>
        </form>
    </>
    )
}


function mapStateToProps(state){
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
