import React from 'react';
import { useSelector } from 'react-redux';

import usePagination from '../../hooks/usePagination';

import MUIDataTable from '../../components/MuiDataTable/MUIDataTable';
import LoadingSpinner from '../../components/Shared/LoadingSpinner/LoadingSpinner';

import './MaterialTablePage.scss';

const MaterialTablePage = (props) => {
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
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'origin',
      label: 'Origin',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'destination',
      label: 'Destination',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'mode',
      label: 'Mode',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'type',
      label: 'Type',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'total',
      label: 'Total',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const tableData = () => {
    const tableData = [];
    shipmentData.map((data) => {
      let name = data.name || '-';
      let origin = data.origin || '-';
      let destination = data.destination || '-';
      let mode = data.mode || '-';
      let status = data.status || '-';
      let type = data.type || '-';
      let total = data.total || '-';

      let tableRow = [name, origin, destination, mode, status, type, total];

      return tableData.push(tableRow);
    });
    return tableData;
  };

  const options = {
    serverSide: true,
    selectableRows: false,
    filterType: 'multiselect',
    print: false,
    download: false,
    count: count,
    rowsPerPageOptions: [5, 10, 15],
    rowsPerPage: rowsPerPage,
    onChangeRowsPerPage: setRowsPerPage,
    page: page,
    onChangePage: setPage,
  };

  return (
    <div>
      <MUIDataTable
        darkMode={darkMode}
        title={'Shipment Data'}
        data={tableData()}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default MaterialTablePage;
