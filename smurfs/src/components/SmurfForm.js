import React, { useState } from 'react';
import { postSmurfs } from '../actions';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

export default function SmurfForm() {
    const [newSmurf, setNewSmurf] = useState(initialFormValues)
    
    const onSubmit = evt => {
        evt.preventDefault()
        postSmurfs(newSmurf)
        setNewSmurf(initialFormValues)
    }

    const onInputChange = evt => {
        setNewSmurf(evt.target.value)
    }

    return(
        <form className="formContainer" onSubmit={onSubmit}>
            <h3>Add a Smurf to Your Village</h3>
            <div className="formInputs">
                <label>Smurf Name&nbsp;
                    <input
                        value={newSmurf.name}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Age&nbsp;
                    <input
                        value={newSmurf.age}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Height&nbsp;
                    <input
                        value={newSmurf.height}
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

