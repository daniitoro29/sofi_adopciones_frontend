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
    dispatch({type: CREATE_USER, payload: users});
  } catch (error) {
    console.error (error);
  }
}

export const EDIT_USER = 'EDIT_USER';

export const editUser = ({Usu_Id, Rol_Id, Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado}) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3001/users/${Usu_Id}`, {
      Rol_Id, Usu_Nombre, Usu_Apellido,Usu_Telefono, Usu_Correo, Usu_Contraseña, Usu_Genero, Usu_Estado
    })
    const users = response.data;
    dispatch({type: EDIT_USER, payload: users})
  } catch (error) {
    console.error(error);
  }
}

export const BAN_USER = 'BAN_USER';

export const banUser = (Usu_Id) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3001/users/${Usu_Id}/ban`)

    const users = response.data;
    dispatch({type: BAN_USER, payload: users})
  } catch (error) {
    console.error(error);
  }
}


// Mascotas

export const CREATE_PET ='CRREATE_PET ';

export const createPet= ({Mas_Nombre,
  Mas_Especie,
  Mas_Genero,
  Mas_Raza,
  Mas_Tamano,
  Mas_Descripcion,
  Mas_Foto,
  Mas_Fecha_Rescate,
  Mas_Lugar_Rescate,
  Mas_Edad,
  Mas_Estado_Adopcion,
  Vol_Id}) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/pets`, {
      Mas_Nombre,
 Mas_Especie,
 Mas_Genero,
 Mas_Raza,
 Mas_Tamano,
 Mas_Descripcion,
 Mas_Foto,
 Mas_Fecha_Rescate,
 Mas_Lugar_Rescate,
 Mas_Edad,
 Mas_Estado_Adopcion,
 Vol_Id
    });
    const pets = response.data;
    dispatch({type: CREATE_PET, payload: pets});
  } catch (error) {
    console.error (error);
  }
}




export const EDIT_PET = 'EDIT_PET';

export const editPet = ({Mas_Id, Mas_Nombre,
  Mas_Especie,
  Mas_Genero,
  Mas_Raza,
  Mas_Tamano,
  Mas_Descripcion,
  Mas_Foto,
  Mas_Fecha_Rescate,
  Mas_Lugar_Rescate,
  Mas_Edad,
  Mas_Estado_Adopcion}) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3001/pets/${Mas_Id}`, {
      Mas_Id, Mas_Nombre,
    Mas_Especie,
    Mas_Genero,
    Mas_Raza,
    Mas_Tamano,
    Mas_Descripcion,
    Mas_Foto,
    Mas_Fecha_Rescate,
    Mas_Lugar_Rescate,
    Mas_Edad,
    Mas_Estado_Adopcion
    })
    const pets = response.data;
    dispatch({type: EDIT_PET, payload: pets})
  } catch (error) {
    console.error(error);
  }
}

export const DELETE_PET = 'DELETE_PET';

export const deletePet = (Mas_Id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3001/pets/${Mas_Id}`)
    const pets = response.data;
    dispatch({type: DELETE_PET, payload: pets})
  } catch (error) {
    console.error(error);
  }
}

export const GET_PETS = 'GET_PETS';

export const getPets= () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/pets');
      const pets = response.data;
      dispatch({ type: GET_PETS, payload: pets });
    } catch (error) {
      console.error(error);
    }
  };


// Voluntarios

export const GET_VOLUNTEERS = 'GET_VOLUNTEERS';

export const getVolunteers = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/voluntarios');
      const volunteers = response.data;
      dispatch({ type: GET_VOLUNTEERS, payload: volunteers });
    } catch (error) {
      console.error(error);
    }
  };