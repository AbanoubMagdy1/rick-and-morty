import React from 'react'
import { Box, CircularProgress } from '@mui/material'

function Loader() {
  return (
    <Box sx={{m: '6rem auto', width: 'fit-content'}}>
        <CircularProgress size={80}/>
    </Box>
  )
}

export default Loader