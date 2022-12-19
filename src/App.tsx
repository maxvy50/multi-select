import React, { useState } from 'react';
import Select, { SelectOption } from './Select';

const options: SelectOption[] = [
  {label: 'First Option', value: 1},
  {label: 'Second Option', value: 2},
  {label: 'Third Option', value: 3},
  {label: '4th Option', value: 4},
  {label: '5th Option', value: 5},
  {label: '6th Option', value: 6},
  {label: '7th Option', value: 7},
  {label: '8th Option', value: 8},
  {label: '9th Option', value: 9},
  {label: '10th Option', value: 10},
]


function App() {

  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  const [valuesArray, setValuesArray] = useState<SelectOption[]>([options[0]]);

  return (
    <>
      <Select options={options} value={value} onChange={v => {setValue(v)}}/>
      
      <hr/>
      
      <Select isMultiple={true}
              options={options} 
              value={valuesArray} 
              onChange={v => {setValuesArray(v)}}/>
    </>  
  );
}

export default App;
