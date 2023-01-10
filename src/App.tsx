import { Typography } from '@mui/material'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Container from './components/Container/Container'

function App() {
  

  return (
    <Container>
      <Typography className="title" variant='h2' component='h1'>Rick and Morty characters</Typography>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </Container>
  )
}

export default App
