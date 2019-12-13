import * as types from './actionTypes';



const initialState = [];


export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_DATA:
      return action.payload;
    default:
      return state;
  }
}
const initialForm = {
   name: '',
   age: '',
   height: ''
}
export function formReducer(form=  initialForm, action){
  switch(action.type){
    case types.INPUT_CHANGES:
      return {
        ...form,
        [action.payload.name]: action.payload.value,
      }
    default:
      return form;
  }
}