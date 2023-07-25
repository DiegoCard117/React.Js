import './App.css'

import { useState } from 'react'

function App() {
  const [name, setName] = useState("Diego")
  const [number, setNumber] = useState(1)

  const mais1 = () => {
    //setNumber(number + 1)
    //Previous value - maneira mais correta
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
  }
  return (
    <>
      <h1>Meu nome é {name}</h1>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}/>
      <div>
        <p>Numero: {number}</p>
        <button onClick={mais1}>Mais 1</button>
      </div>
    </>
  )
}

export default App
