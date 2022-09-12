import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const [selectedDate, setSelectedDate] = useState(null)
  const actions = [{ label: "AHG", value: 1 },
  { label: "GDC", value: 2 }]
  
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>, unused: any ) => {
    const value = event.target.value;

  };

  const output = (event: React.MouseEvent<HTMLButtonElement>)=> {
    //console.log(value)
  }
  
  return (
    <div className="App">
    <h1>Jackal Delivery</h1>
      <div className="DT">
        <div className="DTHead">
          <h4>Date and Time</h4>
        </div>
        <div className ='spacer1'>
          <h5>  </h5>
        </div>
        <div className = "DatePicker">
          <DatePicker selected={date} 
          onChange ={date=>setSelectedDate(selectedDate)} 
          showTimeSelect timeFormat="HH:mm"
          />
        </div>
      </div>
      <div className='locSelect'>
        <div className = "Location">
          <h4>Location</h4>
        </div>
        <div className ='spacer1'>
          <h5>  </h5>
        </div>
        <div className='select'>
          <Select options={actions} onChange={selectChange}
          />
        </div>
        <div className ='spacer2'>
          <h5>  </h5>
        </div>
      </div>
      <button onClick={output}>Schedule</button>
    </div>
  );
}

export default App;