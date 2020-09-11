import axios from 'axios';
import React, { useState } from 'react';
// import { postSmurfs } from '../actions';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState(initialFormValues);
    
    const newSmurfPost = (smurf) => {
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {})
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setNewSmurf(initialFormValues)
            });
    };

    const onSubmit = evt => {
        const newSmurfy = {
            name: newSmurf.name.trim(),
            age: newSmurf.age,
            height: newSmurf.height.trim(),
        };
        newSmurfPost(newSmurfy)
    }

    // const onSubmit = evt => {
    //     evt.preventDefault()
    //     postSmurfs(newSmurf)
    //     setNewSmurf(initialFormValues)
    // }

    const onInput = (value, data ) => {
        setNewSmurf({
            ...newSmurf,
            [value]: data,
        });
    };

    const onInputChange = evt => {
        const { name, value } = evt.target;
        onInput(name, value);
    };

    return(
        <form className="formContainer" onSubmit={onSubmit}>
            <h3>Add a Smurf to Your Village</h3>
            <div className="formInputs">
                <label>Smurf Name&nbsp;
                    <input
                        value={props.smurfs.name}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Age&nbsp;
                    <input
                        value={props.smurfs.age}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Height&nbsp;
                    <input
                        value={props.smurfs.height}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <button>Add Smurf</button>
        </form>
    )
}


function mapStateToProps(state){
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {})(SmurfForm);
