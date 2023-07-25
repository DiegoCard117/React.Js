import './App.css'

import { useState } from 'react'

function App() {
  const [name, setName] = useState("Diego")
  const [number, setNumber] = useState(1)

  const mais1 = () => {
    let menu = document.querySelector(".menu")
    //setNumber(number + 1)
    //Previous value - maneira mais correta
    setNumber((prevNumber) => prevNumber + 1)
    //testes abaixo
    menu?.classList.toggle("disable")
    if (document.body.style.backgroundColor != "white") {
      //document.body.style.backgroundColor = "white"
      //document.body.style.color = "black"
      
    } else {
      //document.body.style.backgroundColor = "#242424"
      //document.body.style.color = "white"
    }
  }
  return (
    <>
      <nav className='menu'>
        <ul>
          <li>menu</li>
          <li>text</li>
          <li>teste</li>
        </ul>
      </nav>
      <h1>{name}</h1>
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
