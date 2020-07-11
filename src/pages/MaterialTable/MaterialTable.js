import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setLoading,
  getShipmentData,
} from '../../store/Actions/ShipmentAction';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';

import './MaterialTable.scss';

const MaterialTable = (props) => {
  const { loading, shipmentData } = useSelector((state) => state.shipment);
  console.log(
    'LOGGER: MaterialTable -> loading, shipmentData',
    loading,
    shipmentData
  );
  const dispatch = useDispatch();

  const setLoadingHandler = useCallback(() => dispatch(setLoading()), [
    dispatch,
  ]);

  const getShipmentDataHandler = useCallback(
    () => dispatch(getShipmentData()),
    [dispatch]
  );

  useEffect(() => {
    setLoadingHandler();
    getShipmentDataHandler();
  }, [setLoadingHandler, getShipmentDataHandler]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>MaterialTable</h1>
    </div>
  );
};

export default MaterialTable;
