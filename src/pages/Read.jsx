import { useEffect, useState } from "react"
import { getItems } from "../api/services/people"


const Read = () => {

    const [invitados, setInvitados] = useState();

    useEffect(() => {
        getItems().then(invitados => {
            setInvitados(invitados);
        });
    }, []);

    return (
        <div>
            <h1>Lectura</h1>
            <div>
                {
                    invitados?.map(invitados => <p key={invitados.id}>{invitados.name}</p>)
                }
            </div>
        </div>
    )
}

export default Read
