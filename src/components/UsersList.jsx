
import React from 'react';

const UsersList = ({ usersList, setForm, selectUser, getUsers, getWarning }) => {



  return (
    <div className='listUser' >
      <div className='sumary'>
        <h1>Listado de Usuarios</h1>
        <p><strong>Usuarios Registrados: </strong>{usersList.length}</p>
        <button onClick={() => setForm(true)}>+ Nuevo Usuario</button>
      </div>
      <div className='card_container'>
        {
          usersList.map((user) => (
            <div className='card' key={user.id}>
              <div className='card'>
                <h4>{user.first_name}, {user.last_name}</h4>
                <div className='info__user'>
                  <p><strong>Email:</strong><br />{user.email}</p>
                  <p><strong>Fecha de Nacimiento</strong><br />{user.birthday}</p>
                </div>
                <div className='icons'>
                  <div onClick={() => selectUser(user)}>
                    <i className='bx bx-edit'></i>
                  </div>
                  <div onClick={() => getWarning(user)}>
                    <i className='bx bxs-trash'></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default UsersList;