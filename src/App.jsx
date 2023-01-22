import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import UserForm from './components/UserForm'
import Warning from './components/Warning/Warning'

function App() {

  const [usersList, setUsersList] = useState([])
  const [form, setForm] = useState(false)
  const [userSelected, setUserSelected] = useState(null)
  const [warning, setWarning] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  

  useEffect(() => {
    getUsers()
  }, [])

  const selectUser = (user) => {
    setForm(true)
    setUserSelected(user)
  }

  const getWarning = (user) =>{
    setWarning(true)
    setUserToDelete(user)
  }
  
  const cancelDelete = () => {
    setWarning(false)
    setUserToDelete(null)
  }

  const deleteUser = (userToDelete) =>{
    axios.delete(`https://users-crud.academlo.tech/users/${userToDelete?.id}/`)
    .then(() => {
        getUsers()
        setWarning(false)     
      })

  }

  const getUsers = () => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUsersList(res.data))
  }

  console.log(userToDelete)


  return (
    <div className="App">
      {form &&
        <UserForm
          setForm={setForm}
          getUsers={getUsers}
          userSelected={userSelected}
          setUserSelected={setUserSelected} />
      }
      <UsersList
        usersList={usersList}
        setForm={setForm}
        selectUser={selectUser}
        getUsers={getUsers}
        getWarning={getWarning}
      />
      {
        warning &&
        <Warning
        userToDelete={userToDelete}
        cancelDelete={cancelDelete}
        deleteUser={deleteUser}
        />
      }
      <footer>
          <p>by <strong>Mariano echavarria</strong> | G21 - Academlo 2023</p>
        </footer>
    </div>
  )
}

export default App
