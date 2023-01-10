import { Typography } from '@mui/material'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Container from './components/Container/Container'
import DetailsPage from './pages/DetailsPage'

function App() {
  

  return (
    <Container>
      <Typography className="title" variant='h4' component='h1'>Rick and Morty characters</Typography>
      <Routes>
        <Route path='/:page?' element={<HomePage/>} />
        <Route path='/character/:id' element={<DetailsPage/>} />
      </Routes>
    </Container>
  )
}

export default App
