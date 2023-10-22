import axios from "axios";

export const GET_USERS = 'GET_USERS';

export const getUsers = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      dispatch({ type: GET_USERS, payload: users });
    } catch (error) {
      console.error(error);
    }
  };

export const DELETE_USER = 'DELETE_USER';

export const deleteUser = (Usu_Id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3001/users/${Usu_Id}`)
    const users = response.data;
    dispatch({type: DELETE_USER, payload: users})
  } catch (error) {
    console.error(error);
  }
}

export const CREATE_USER ='CREATE_USER';

export const createUser = ({Usu_Nombre,Usu_Apellido,Usu_Telefono,Usu_Correo,Usu_Contraseña,Usu_Genero,Usu_Estado, Rol_Id}) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/users`, {
      Usu_Nombre,Usu_Apellido,Usu_Telefono,Usu_Correo,Usu_Contraseña,Usu_Genero,Usu_Estado, Rol_Id
    });
    const users = response.data;
    console.log('Esto es usersssss', users)
    dispatch({type: CREATE_USER, payload: users});
  } catch (error) {
    console.error (error);
  }
}

export const EDIT_USER = 'EDIT_USER';

export const editUser = ({Usu_Id, Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado}) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3001/users/${Usu_Id}`, {
      Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado
    })
    const users = response.data;
    console.log('Soy users en actions ***', users );
    dispatch({type: EDIT_USER, payload: users})
  } catch (error) {
    console.error(error);
  }
}

export const BAN_USER = 'BAN_USER';

export const banUser = (Usu_Id) => async (dispatch) => {
  console.log('Se está llamando la función de bannear', Usu_Id);
  try {
    const response = await axios.put(`http://localhost:3001/users/${Usu_Id}/ban`)

    const users = response.data;
    console.log('Soy users en actions ***', users );
    dispatch({type: BAN_USER, payload: users})
  } catch (error) {
    console.error(error);
  }
}