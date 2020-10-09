import {
  ALL_DATA_SUCCESS
} from './constants';

let initialState = {
  contacts: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
     case 'ALL_DATA_SUCCESS':
        return { ...state, contacts: action.data }; break;

     default:
        return state;
   }
};
export default reducer;