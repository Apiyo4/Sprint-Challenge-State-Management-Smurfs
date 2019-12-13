import * as types from './actionTypes';
import axios from 'axios';

export const getData = ()=> (dispatch)=>{
    axios.get('')
    .then(res=>{
        debugger
    })
    .catch(er=>{
        debugger
    })
}

