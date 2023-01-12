import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

const TodoCard = ({ title, body, done, id })=> {
 const [editMode, setEditMode] = useState(false)
 const [editValue, setEditValue] = useState(body)

 const changeHandler = e => {
  setEditValue(e.target.value)
 }

 const saveHandler = () => {
  const editContent = {}
  editContent.body = editValue
  axios.patch(`http://localhost:3001/todos/${id}`, {
   body: JSON.stringify(editContent)
  }).then(setEditMode(!editMode))
  

 }

 return (
  <Grid item>
   <Card sx={{ minWidth: 275 }}>
    <CardContent>
     <Typography sx={{fontSize: 18}} color="text.primary">
     {title}
     </Typography>
     {editMode
     ?
     <>
      <TextField onChange={e => changeHandler(e)} multliline='true' value={editValue} label="body" id="fullWidth" />
      <CheckIcon onClick={saveHandler}/>
     </>
     :
     <>
      <Typography sx={{fontSize: 14}} color="text.secondary">
       {body} <EditIcon onClick={() => setEditMode(!editMode)}/>
      </Typography>
      
     </>
     }
    </CardContent>
   </Card>
  </Grid>
 )
}

export default TodoCard