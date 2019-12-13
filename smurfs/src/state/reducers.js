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