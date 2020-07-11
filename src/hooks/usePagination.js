import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setLoading,
  getShipmentData,
  setPage,
  setRowsPerPage,
} from '../store/Actions/ShipmentAction';

const usePagination = (props) => {
  const { paginationData } = useSelector((state) => state.shipment);
  const { page, rowsPerPage, totalCount } = paginationData;
  const dispatch = useDispatch();

  const setLoadingHandler = useCallback(() => dispatch(setLoading()), [
    dispatch,
  ]);

  const setPageHandler = useCallback((value) => dispatch(setPage(value)), [
    dispatch,
  ]);
  const setRowsPerPageHandler = useCallback(
    (value) => dispatch(setRowsPerPage(value)),
    [dispatch]
  );

  const getShipmentDataHandler = useCallback(
    ({ page, rowsPerPage }) =>
      dispatch(getShipmentData({ page: page + 1, rowsPerPage })),
    [dispatch]
  );

  useEffect(() => {
    setLoadingHandler();
    getShipmentDataHandler({ page, rowsPerPage });
  }, [setLoadingHandler, getShipmentDataHandler, page, rowsPerPage]);

  return [page, rowsPerPage, totalCount, setPageHandler, setRowsPerPageHandler];
};

export default usePagination;
