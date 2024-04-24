import { useState, useEffect } from "react"
import { batchOperation, createItem, deleteItem, getItems, updateItem } from "./api/services/people"
import { setUserId } from "firebase/analytics";




const App = () => {
  const [userName, setUserName] = useState();
  const [persons, setPersons] = useState();
  const [userId, setUserId] = useState();



  useEffect(() => {
    getItems().then(res => setPersons(res))
  }, [])
  console.log(persons)
  return (
    <div>
      <input type="text" placeholder="Usernme" onChange={(e) => setUserName(e.target.value)} />
      <input type="text" placeholder="id placeholder" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={() => {
        createItem({ userName })

      }}>Guardar datos</button>
      <button onClick={() => {
        deleteItem(userId)
      }} >Borrar</button>
      <button onClick={() => {
        updateItem(userId, { userName })
      }}>Update</button>

      <button onClick={() => {
        batchOperation(userId)
      }} >Batch Update</button>

      <div>
        {
          persons?.map(person =>
            <div key={person.id}>
              <p>{person.userName}</p>
              <p>{person.id}</p>
            </div>

          )
        }
      </div>

    </div>
  )
}

export default App
