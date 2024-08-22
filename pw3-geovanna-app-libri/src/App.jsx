import './App.css'

import CardBooks from './components/CardBooks'
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
