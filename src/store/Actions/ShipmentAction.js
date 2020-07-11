import { GET_SHIPMENT_DATA, SET_LOADING } from '../ActionTypes.js';
import axios from '../../components/Axios/Axios';

export const setLoading = () => ({ type: SET_LOADING });

const shipmentData = (payload) => ({ type: GET_SHIPMENT_DATA, payload });

export const getShipmentData = (params) => (dispatch) => {
  const url = '/shipments';
  axios.get(url).then((res) => dispatch(shipmentData(res.data)));
};
