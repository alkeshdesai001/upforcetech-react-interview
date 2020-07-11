import { GET_SHIPMENT_DATA, SET_LOADING } from '../ActionTypes.js';
import axios from '../../components/Axios/Axios';

export const setLoading = () => ({ type: SET_LOADING });

const tableData = (payload) => ({ type: GET_SHIPMENT_DATA, payload });

export const getTableData = (params) => (dispatch) => {
  const url = '/shipment';
  axios.get(url).then((res) => dispatch(tableData(res.data)));
};
