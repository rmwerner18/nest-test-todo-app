import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

const TodoCard = ({ title, body, done })=> {
 const [editMode, setEditMode] = useState(true)
 const [editValue, setEditValue] = useState(body)

 return (
  <Grid item>
   <Card sx={{ minWidth: 275 }}>
    <CardContent>
     <Typography sx={{fontSize: 18}} color="text.primary">
     {title}
     </Typography>
     {editMode
     ?
     <TextField multliline value={editValue} label="body" id="fullWidth" />
     :
     <Typography sx={{fontSize: 14}} color="text.secondary">
      {body}
     </Typography>
     }
    </CardContent>
   </Card>
  </Grid>

  // {
  //   editMode
  //   ?
  //   <input type='text' className='todo-body'></input>
  //   :
  //   <p className='todo-body'>{body}</p>
  //  }

  // <div className={`todo-card ${done ? 'done' : null}`}>
  // </div> 
  // <h1 className='todo-title'>{title}</h1>
 )
}

export default TodoCard