import { combineReducers } from 'redux'; 
import SessionErrorsReducer from './session_errors_reducer'; 
// import PlaybackErrorsReducer from './playback_errors_reducer'; 

const ErrorsReducer = combineReducers({ 
  session: SessionErrorsReducer, 
  // playback: PlaybackErrorsReducer, // how would I implement this (bonus feature) 
}); 

export default ErrorsReducer; 
