import React, { useEffect } from "react";
import "./App.css";
import Display from "./Display";
import {connect} from 'react-redux';
import {getData} from '../state/actionCreators';
import Form  from './Form'
export function App({data, getData}){
    
  useEffect(()=>{
    getData()
  }, [data])
  
    return (
      <div className="App">
        {/* {console.log(data)}+
         */}
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <div>
         {data.map(item=>{
           return   <Display item={item} key={item.id} />
         })}
         
          <Form />
        </div>
      </div>
    );
  
}
function  mapStateToProps(state){
  return{
    data: state.data
  }  
  
}

export default connect(mapStateToProps, {getData})(App);
