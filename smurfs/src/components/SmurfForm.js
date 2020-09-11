import React, { useState } from 'react';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

export default function SmurfForm() {
    const [formValues, setFormValues] = useState(initialFormValues)

    const submit = () => {
        const newSmurf = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            height: formValues.height.trim(),
        }
        postNewSmurf(newSmurf)
    }

}

