import React from 'react';

const Smurf = (props) => {
    const { smurf } = props;

    return(
        <div>
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}

export default Smurf;