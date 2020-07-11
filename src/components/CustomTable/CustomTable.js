import React from 'react';

import Pagination from '../Pagination/Pagination';

import './CustomTable.scss';

const CustomTable = (props) => {
  const { darkMode, columns, data, options } = props;

  let bgColor = darkMode ? '#444' : '#fff';
  let textColor = darkMode ? '#fff' : '#000';

  return (
    <>
      <table
        className='customTable'
        style={{ background: bgColor, color: textColor }}
      >
        <thead className='tableHeader'>
          <tr>
            {columns.map((col, i) => (
              <th className={`col${i + 1} header${i + 1}`} key={col}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='tableData'>
          {data.map((row) => (
            <tr key={`${row[0]}`}>
              {row.map((data, i) =>
                i !== 5 ? (
                  <td className={`col${i + 1} data${i + 1}`} key={data}>
                    {data}
                  </td>
                ) : (
                  <td className={`col${i + 1} data${i + 1}`} key={data}>
                    <ul>
                      {data.map((type) => (
                        <li key={type.type}>{type.type}</li>
                      ))}
                    </ul>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='8'>
              <Pagination options={options} darkMode={darkMode} />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CustomTable;
