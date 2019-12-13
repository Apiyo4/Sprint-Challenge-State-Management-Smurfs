import * as types from './actionTypes';
import axios from 'axios';

export const getData = ()=> (dispatch)=>{
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
    //    console.log(res.data)
    const data = res.data;
    dispatch({
        type:types.SET_DATA,
        payload: data,
    })
    })
    .catch(er=>{
        debugger
    })
}

