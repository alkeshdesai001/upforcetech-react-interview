import React from 'react';
import { useSelector } from 'react-redux';

import usePagination from '../../hooks/usePagination';

import CustomTable from '../../components/CustomTable/CustomTable';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';

import './CustomTablePage.scss';

const CustomTablePage = (props) => {
  const { darkMode } = useSelector((state) => state.settings);
  const { loading, shipmentData } = useSelector((state) => state.shipment);

  const [page, rowsPerPage, count, setPage, setRowsPerPage] = usePagination();

  if (loading) {
    return (
      <div className='center'>
        <LoadingSpinner />
      </div>
    );
  }

  const columns = [
    'Name',
    'Origin',
    'Destination',
    'Mode',
    'Status',
    'Services',
    'Type',
    'Total',
  ];

  const tableData = () => {
    const tableData = [];
    shipmentData.map((data) => {
      let name = data.name || '-';
      let origin = data.origin || '-';
      let destination = data.destination || '-';
      let mode = data.mode || '-';
      let status = data.status || '-';
      let services = data.services || '-';
      let type = data.type || '-';
      let total = data.total || '-';

      let tableRow = [
        name,
        origin,
        destination,
        mode,
        status,
        services,
        type,
        total,
      ];

      return tableData.push(tableRow);
    });
    return tableData;
  };

  const options = {
    count: count,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [5, 10, 15],
    setRowsPerPage: setRowsPerPage,
    page: page,
    setPage: setPage,
  };

  return (
    <div>
      <CustomTable
        darkMode={darkMode}
        title={'Shipment Data'}
        data={tableData()}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default CustomTablePage;
