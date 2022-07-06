import { ListItem, List, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

const Task = ({ taskText, onClick }) => {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemText primary={taskText} />
      </ListItem>
      <DeleteIcon fontSize='large' style={{ opacity: 0.7 }} onClick={onClick} />
    </List>
  )
}

export default Task
