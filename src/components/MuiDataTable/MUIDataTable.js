import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const MUIDataTableComp = (props) => {
  const { darkMode, title, data, columns, options } = props;

  let bgColor = darkMode ? '#444' : '#fff';
  let textColor = darkMode ? '#fff' : '#000';
  // let iconColor = darkMode ? '#eee' : '#777';

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiPaper: {
          root: {
            backgroundColor: `${bgColor} !important`,
            color: `${textColor} !important`,
          },
        },
        MUIDataTableSelectCell: {
          root: {
            backgroundColor: `${bgColor} !important`,
          },
        },
        MUIDataTableHeadCell: {
          root: {
            backgroundColor: `${bgColor} !important`,
            color: `${textColor} !important`,
          },
        },
        MuiTableCell: {
          root: {
            color: `${textColor} !important`,
          },
        },
        // MuiIconButton: {
        //   root: {
        //     color: `${iconColor} !important`,
        //   },
        // },
      },
    });

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  );
};

export default MUIDataTableComp;
