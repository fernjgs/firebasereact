import { useState, useEffect } from 'react'
import { getItems, deleteItem } from '../api/services/people'


const Delete = () => {
    const [id, setId] = useState('');
    const [invitados, setInvitados] = useState([3]);


    const query = () => {
        getItems().then(invitados => {
            setInvitados(invitados);
        });
    }

    useEffect(() => {
        query();
    }, []);


    return (
        <div>
            <h1>Borrado</h1>
            <p>
                <input type="text" placeholder='Id de invitado' onChange={e => setId(e.target.value)} />
                <button onClick={async () => {
                    await deleteItem(id);
                    query();
                }} >Borrar</button>
            </p>
            <div>
                {
                    invitados?.map(invitados => <p key={invitados.id} >{invitados.name}-{invitados.id}</p>)
                }
            </div>
        </div>
    )
}

export default Delete
