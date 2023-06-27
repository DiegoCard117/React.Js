import { useState } from "react"

export function Button() {
    //let contador = 0
    const [contador, setContador] = useState(0)

    function incremento() {
        setContador(contador + 1)
    }
    
    return (
        <button onClick={incremento}>
            {contador}
        </button>
    )
}

