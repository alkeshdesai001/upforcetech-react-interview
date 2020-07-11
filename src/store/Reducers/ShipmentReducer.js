import {
  GET_SHIPMENT_DATA,
  SET_LOADING,
  SET_PAGE,
  SET_ROWS_PER_PAGE,
} from '../ActionTypes';

const initialState = {
  loading: false,
  shipmentData: [],
  paginationData: {
    page: 0,
    rowsPerPage: 5,
    totalCount: 5,
    nextDisabled: false,
  },
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
      let count = parseInt(action.payload.headers['x-total-count']);
      let totalCount = count ? count : action.payload.data.length;
      return {
        ...state,
        shipmentData: [...action.payload.data],
        paginationData: {
          ...state.paginationData,
          totalCount: totalCount,
          nextDisabled: totalCount < state.paginationData.rowsPerPage,
        },
        loading: false,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        paginationData: {
          ...state.paginationData,
          page: action.payload,
        },
      };
    }
    case SET_ROWS_PER_PAGE: {
      return {
        ...state,
        paginationData: {
          ...state.paginationData,
          rowsPerPage: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
