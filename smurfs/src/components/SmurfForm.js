import React, { useState } from 'react';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

export default function SmurfForm() {
    const [formValues, setFormValues] = useState(initialFormValues)
    
    const onSubmit = evt => {
        evt.preventDefault()
        const newSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height,
        }
        // postNewSmurf(newSmurf)
    }

    const onInputChange = evt => {
        setFormValues(evt.target.value)

    }

    return(
        <form className="formContainer" onSubmit={onSubmit}>
            <h3>Add a Smurf to Your Village</h3>
            <div className="formInputs">
                <label>Smurf Name&nbsp;
                    <input
                        value={formValues.name}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Age&nbsp;
                    <input
                        value={formValues.age}
                        name='name'
                        type='text'
                        onChange={onInputChange}
                    />
                </label>

                <label>Smurf Height&nbsp;
                    <input
                        value={formValues.height}
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

