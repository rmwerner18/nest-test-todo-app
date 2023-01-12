import React, { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios'

const TodoCardContainer = () => {
 const [todos, setTodos] = useState([])

 useEffect(() => {
  const fetchTodos = async () => {
   const response = await axios.get('http://localhost:3001/todos')
   setTodos(response.data)
  }
  fetchTodos()
 }, [])

 const displayTodos = () => {
  return todos.map(todo => <TodoCard title={todo.title} body={todo.body} done={todo.done} id={todo.id} key={todo.id}/>)
 }

 return (
  <Container>
   <Grid container spacing={2}>
   {displayTodos()}
   </Grid>
  </Container>
 )
}

export default TodoCardContainer