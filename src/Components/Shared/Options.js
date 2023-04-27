/* import React from 'react'
import MenuItem from '@mui/@material-ui/MenuItem';
import FormHelperText from '@mui/@material-ui/FormHelperText';
import FormControl from '@mui/@material-ui/FormControl';
import Select from '@mui/@material-ui/Select';

const Options = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
  )
}

export default Options */