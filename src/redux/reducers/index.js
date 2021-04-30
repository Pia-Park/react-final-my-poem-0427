import { combineReducers } from 'redux';
import notes from './notes';
import inputs from './input';

export default combineReducers({
  notes,
  inputs,
})