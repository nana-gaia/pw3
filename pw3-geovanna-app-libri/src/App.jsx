import './App.css'
import './components/CardBooks.jsx'
import CardBooks from './components/CardBooks.jsx'
import cavernas from './assets/cavernas_aco.jpg'

function App() {
  return (
    <>
      <CardBooks>
        titulo={titulo}
        autor={autor}
        nome={nome}
        <img src={cavernas}></img>
      </CardBooks>
    </>
  )
}

export default App
