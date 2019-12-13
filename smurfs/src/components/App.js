import React, { useEffect } from "react";
import "./App.css";
import Display from "./Display";
import {connect} from 'react-redux';
import {getData} from '../state/actionCreators';
export function App({getData}){
  //  console.log(props)
  useEffect(()=>{
    getData()
  }, [])
  
    return (
      <div className="App">
        {/* {console.log(data)}+
         */}
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <Display />
        </div>
      </div>
    );
  
}
// function  mapStateToProps(state){
//   return{
//     data: state.data
//   }  
  
// }

export default connect(state=>state, {getData})(App);
