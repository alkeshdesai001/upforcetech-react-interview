import {
  GET_SHIPMENT_DATA,
  SET_LOADING,
  SET_PAGE,
  SET_ROWS_PER_PAGE,
} from '../ActionTypes.js';
import axios from '../../components/Axios/Axios';

export const setLoading = () => ({ type: SET_LOADING });

const shipmentData = (payload) => ({ type: GET_SHIPMENT_DATA, payload });

export const getShipmentData = (params) => (dispatch) => {
  let url = `/shipments`;
  if (params && params.page && !params.rowsPerPage) {
    url = `/shipments?_page=${params.page}`;
  } else if (params && !params.page && params.rowsPerPage) {
    url = `/shipments?_limit=${params.rowsPerPage}`;
  } else if (params && params.page && params.rowsPerPage) {
    url = `/shipments?_page=${params.page}&_limit=${params.rowsPerPage}`;
  }

  axios.get(url).then((res) => dispatch(shipmentData(res)));
};

export const setPage = (pageNum) => ({ type: SET_PAGE, payload: pageNum });

export const setRowsPerPage = (rows) => ({
  type: SET_ROWS_PER_PAGE,
  payload: rows,
});
