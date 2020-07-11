import React from 'react';
import Switch from '@material-ui/core/Switch';

const Toggle = ({ checked, onChange }) => (
  <div>
    <Switch
      checked={checked}
      onChange={onChange}
      name='toggle'
      color='default'
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
  </div>
);

export default Toggle;
