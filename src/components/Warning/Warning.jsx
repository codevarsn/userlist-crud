import React from 'react';

const Warning = ({ userToDelete, cancelDelete, deleteUser }) => {




  return (
    <div className='warning__container'>
      <div className='warning'>
        <h4>
        quieres eliminar al usuario <br /> {userToDelete?.first_name}
        </h4>
        <p>Esta accion es permanente</p><br />
        <button onClick={() => deleteUser(userToDelete)}>eliminar</button>
        <button onClick={() => cancelDelete()}>cancelar</button>
      </div>
    </div>
  );
};

export default Warning;