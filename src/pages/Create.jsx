import { createItem } from '../api/services/people'
import { useState } from 'react'


const Create = () => {
    const [nombre, setNombre] = useState('')

    return (
        <div>
            <h1>Crear</h1>
            <p>
                <input type="text" placeholder='Nombre de invitado' onChange={e => setNombre(e.target.value)} />
                <button onClick={() => createItem({ nombre })}>Crear</button>
            </p>
        </div>
    )
}

export default Create
