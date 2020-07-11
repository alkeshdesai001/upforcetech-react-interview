import { GET_SHIPMENT_DATA, SET_LOADING } from '../ActionTypes';

const initialState = {
  loading: false,
  shipmentData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SHIPMENT_DATA: {
      return {
        ...state,
        shipmentData: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
