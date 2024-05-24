import './calendar.scss';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        inputFormat="DD/MM/YYYY"
        renderInput={(params) => (
          <TextField {...params} variant="outlined" className="custom-date-picker" />
        )}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
