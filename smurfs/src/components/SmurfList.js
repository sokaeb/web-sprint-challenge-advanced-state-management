import React from 'react';
import { connect } from 'react-redux';


function SmurfList(props) {
    return(
        <div>

        </div>

    );
}

function mapStateToProps(state){
    return{
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, {})(SmurfList);