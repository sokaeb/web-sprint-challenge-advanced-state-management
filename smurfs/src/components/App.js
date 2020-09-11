import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import SmurfList from './SmurfList';

function App(props) {
  const { fetchSmurfs, loadingSmurfs, errorMessage } = props;

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>
          {!loadingSmurfs ? (<SmurfList /> ) : (<div>Finding Smurfs...</div>)}
          {errorMessage !== "" ? <div>{errorMessage}</div> : null}
        </div>
      </div>
    );
}

function mapStateToProps(state){
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessag: state.errorMessage,
  };
}

export default connect(mapStateToProps, {})(App);
