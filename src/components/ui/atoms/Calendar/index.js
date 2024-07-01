import './calendar.scss';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import 'dayjs/locale/fr';

import cn from '../../../../utils/classnames';

const Calendar = ({
  label = null,
  id,
  required = false,
  value = null,
  name = '',
  errored = false,
  onChange = () => {},
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={'calendar__label'}
        >
          {label}
          {required && <span className='calendar__required'>*</span>}
        </label>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <DatePicker
          id={id}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="DD/MM/YYYY"
          defaultValue={value}
          onChange={onChange}
          name={name}
          className={cn({
            'calendar__error': errored
          })}
          {...props}
        />
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
