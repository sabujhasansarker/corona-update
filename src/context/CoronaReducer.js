import { GET_DATA, FILTER_DATA, CLEAR_FILTER } from "./Type";
export default (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        totalData: action.payload
      };
    case FILTER_DATA:
      return {
        ...state,
        filter: action.payload
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null
      };
    default:
      return state;
  }
};
