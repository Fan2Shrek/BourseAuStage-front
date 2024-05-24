import './calendar.scss';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const Calendar = ({
  label = null,
  id,
  required = false,
}) => {
  return <>
    {label && <label
      htmlFor={id}
    >
      {label}
      {required && <span className='input__required'>*</span>}
    </label>}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        id={id}
      />
    </LocalizationProvider>
  </>
};

export default Calendar;
