import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import './Pagination.scss';

const PaginationComp = (props) => {
  const { darkMode, options } = props;

  const {
    count,
    rowsPerPage,
    rowsPerPageOptions,
    setRowsPerPage,
    page,
    setPage,
  } = options;

  let bgColor = darkMode ? '#444' : '#fff';
  let textColor = darkMode ? '#fff' : '#000';

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiInputBase: {
          root: {
            backgroundColor: `${bgColor} !important`,
            color: `${textColor} !important`,
          },
        },
        MuiPaginationItem: {
          root: {
            backgroundColor: `${bgColor} !important`,
            color: `${textColor} !important`,
          },
        },
      },
    });

  return (
    <div className='pagination'>
      <MuiThemeProvider theme={getMuiTheme()}>
        <div>
          Rows per page:
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            value={rowsPerPage}
            style={{ minWidth: 50, textAlign: 'center' }}
            onChange={(e) => setRowsPerPage(e.target.value)}
          >
            {rowsPerPageOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>
        <Pagination
          variant='outlined'
          shape='rounded'
          count={Math.ceil(count / rowsPerPage)}
          page={page + 1}
          onChange={(event, value) => setPage(value - 1)}
        />
      </MuiThemeProvider>
    </div>
  );
};
export default PaginationComp;
