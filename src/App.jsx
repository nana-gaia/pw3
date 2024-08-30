import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'

// importar paginas 
import Home from './components/pages/Home'
import ListBook from './components/pages/ListBook'
import CreateBook from './components/pages/CreateBook'


function App() {
  return (
    <>
     <BrowserRouter>
     <Container>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<ListBook/>}/>
          <Route path='/' element={<CreateBook/>}/>
          <Route/>
          <Route/>
        </Route>
      </Routes>
     </Container>
     </BrowserRouter>
    </>
  )
}

export default App
