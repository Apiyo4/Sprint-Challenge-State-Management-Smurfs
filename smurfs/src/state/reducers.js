import {SET_DATA, INPUT_CHANGES, SUBMIT } from './actionTypes';



const initialState = [];


export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
}
const initialForm = {
   name: '',
   age: 0,
   height: '0'
}
export function formReducer(form=initialForm, action){
  switch(action.type){
    case INPUT_CHANGES:
      return {
        ...form,
        [action.payload.name]: action.payload.value,

      };
     
    case SUBMIT:
      return initialForm;
    default:
      return form;
  }
}