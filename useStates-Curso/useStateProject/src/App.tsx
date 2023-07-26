import './App.css'

import { useState } from 'react'

function App() {
  const [name, setName] = useState("Diego")
  const [number, setNumber] = useState(0)

  const mais1 = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const menuOpen = () => {
    const menu = document.querySelector(".menu")
    menu?.classList.toggle("disable")
  }

  return (
    <>
      <nav 
      className='menu'>
        <ul>
          <li>menu</li>
          <li>text</li>
          <li>teste</li>
        </ul>
      </nav>
        <button onClick={menuOpen}>Menu</button>
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
