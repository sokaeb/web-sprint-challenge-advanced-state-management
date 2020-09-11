import React, { useEffect } from "react";
import "./App.css";

import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import { fetchSmurfs } from '../actions';

function App(props) {
  const { fetchSmurfs, loadingSmurfs, errorMessage } = props;

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
          {!loadingSmurfs ? (<SmurfList /> ) : (<div>Finding Smurfs...</div>)}
          {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </div>
    );
}

function mapStateToProps(state){
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
