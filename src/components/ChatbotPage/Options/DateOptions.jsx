// export default Options;
import React from "react";
import "./Options.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateOptions = (props) => {
    const [dateState, setDateState] = React.useState(null);

  const doneHandler = () => {
    console.log(dateState);
    props.actionProvider.handleElementDetails(dateState);
    
  };

  const handleDateChange = (date) => {
    // console.log(date.$d);
    setDateState(date.$d);
  };

  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={dateState}
          onChange={handleDateChange}
          slotProps={{
            textField: {
              helperText: 'MM/DD/YYYY',
            },
          }}
        />
      </LocalizationProvider>
        <button className='date-button ok-button' onClick={doneHandler}>Okay</button>
    </div>);
};

export default DateOptions;
