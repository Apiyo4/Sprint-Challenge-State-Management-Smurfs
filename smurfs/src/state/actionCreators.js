import {SET_DATA, INPUT_CHANGES, SAVE_DATA, SUBMIT}  from './actionTypes';
import axios from 'axios';

export const getData = ()=> (dispatch)=>{
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
    //    console.log(res.data)
    const data = res.data;
    dispatch({
        type: SET_DATA,
        payload: data,
    })
    })
    .catch(er=>{
        console.log(er)
    })
}
export const inputChange = (name, value) => {
    return {
      type: INPUT_CHANGES,
      payload: {
        name,
        value,
      },
    };
  };

export const addSmurf = (smurf) => dispatch=>{
  axios.post('http://localhost:3333/smurfs',  smurf)
  .then(res=>{
  //    console.log(res.data)
  const data = res.data;
  dispatch({
      type: SAVE_DATA,
      payload: data,
  })
  })
  .catch(er=>{
      console.log(er)
  })
};



export const submit = () => {
  return { type: SUBMIT };
};