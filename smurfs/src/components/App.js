import React, { useEffect } from "react";
import "./App.css";

import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import { fetchSmurfs } from '../actions/index';

const App = (props) => {
  const { fetchSmurfs, loadingSmurfs, errorMessage } = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <div className="smurfList">
          {!loadingSmurfs ? (<SmurfList />) : (<div>Finding Smurfs...</div>)}
        </div>
        <div className="smurfForm">
          <SmurfForm />
        </div>
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </div>
    );
}

function mapStateToProps(state){
  return {
    smurfs: state.smurfs,
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
