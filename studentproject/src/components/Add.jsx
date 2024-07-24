import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
    "sname":',',
    "adm":',',
    "department":'',
    "semester":'',
  })
  //let valueAdd=()=>{
    //setCounter(counter+1);
 
  function valueCap(e){
   // console.log(e)
   setForm({...form,[e.target.name]:e.target.value})
   return

  }
     (
     <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <div>
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Name"
      name='sname'
      value={form.sname}
      onChange={valueCap}
    /><br></br>
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Admission"
      name='adm'
      value={form.adm}
    /><br></br>
        <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Department"
      name='department'
      value={form.department}
    /><br></br>
        <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Semester"
      name='semester'
      value={form.semester}
    /><br></br>
    <Button variant="text" onClick={valueAdd}>submit</Button><br></br>
    <small>button is clicked {counter} times</small>
    </div>
    </Box>
 )
}


export default Add