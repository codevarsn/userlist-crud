import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserForm = ({ setForm, getUsers, userSelected, setUserSelected }) => {
  const { handleSubmit, register, reset } = useForm();
  const inputNull = { fist_name: "", last_name: "", email: "", password: "", birthday: "" }

  useEffect(() => {
    if (userSelected) {
      reset(userSelected)
    } else {
      reset(inputNull)
    }
  }, [userSelected])

  const closeForm = () => {
    setForm(false)
    setUserSelected(null)

  }

  const submit = (data) => {
    if (userSelected) {
      axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers()
          closeForm()
        })
    } else {
      axios.post(`https://users-crud.academlo.tech/users/`, data)
        .then(() => {
          getUsers()
          closeForm()
        })

    }
  }


  return (
    <div className='warning__container'>
      <div className='form'>
        <button className='btn_close' onClick={() => closeForm()}>X</button>
        <h3>Formulario</h3>
        <form onSubmit={handleSubmit(submit)}>
          <input placeholder='First name' type="text" id="first_name" {...register("first_name")} />
          <input placeholder='Last name' type="text" id="last_name" {...register("last_name")} />
          <input placeholder='Email' type="email" id="email" {...register("email")} />
          <input placeholder='Password' type="password" id="password" {...register("password")} />
          <input placeholder='Birthday' type="date" id="birthday" {...register("birthday")} />
          <button className='btn__cu' type='submit'>{userSelected ? "actualizar" : "crear usuario"}</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;