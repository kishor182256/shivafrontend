import React from 'react'
import { Button } from '@material-ui/core'; 

const Buttons = ({className, type, value, children}) => {
  return (
    <Button 
    className={className} 
    type={type} 
    value={value}
    variant="contained"
    > {children} </Button>
  )
}

export default Buttons