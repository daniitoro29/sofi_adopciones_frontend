import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../../redux/actions";
import { useState, useEffect } from "react";
import "../User/User.css";
import { getUsers } from "../../redux/actions";

const User = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userState, setUser] = useState("");
  const users = useSelector((state) => state.users);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    contraseña: "",
    genero: "",
    estado: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, [users]);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleDelete = (user) => {
    dispatch(deleteUser(user.Usu_Id));
  };

  const handlerEdit = (user) => {
    const userResult = users.filter((u) => u.Usu_Id === user.Usu_Id)[0];
    setIsEdit(true);
    setUser(userResult.Usu_Id);
    setForm({
      nombre: userResult.Usu_Nombre,
      apellido: userResult.Usu_Apellido,
      telefono: userResult.Usu_Telefono,
      correo: userResult.Usu_Correo,
      contraseña: userResult.Usu_Contraseña,
      genero: userResult.Usu_Genero,
      estado: userResult.Usu_Estado,
    });
  };

  const handlerUpdate = () => {
    dispatch(
      editUser({
        Usu_Id: userState,
        Usu_Nombre: form.nombre,
        Usu_Apellido: form.apellido,
        Usu_Telefono: form.telefono,
        Usu_Correo: form.correo,
        Usu_Contraseña: form.contraseña,
        Usu_Genero: form.genero,
        Usu_Estado: form.estado,
      })
    );
    setIsEdit(false);
  };

  return (
    <>
      <div className="title-User">
        <a href="/home">
          <img
            src="https://peluditosconfuturo.org/wp-content/uploads/2015/01/logo2.png"
            alt="log"
          />
        </a>
        <h2>Usuarios Registrados</h2>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Genero</th>
              <th>Estado</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          {Array.isArray(users) &&
            users.map((user) => {
              return (
                <tbody key={user.Usu_Id}>
                  <tr>
                    <td>{user.Usu_Nombre}</td>
                    <td>{user.Usu_Apellido}</td>
                    <td>{user.Usu_Telefono}</td>
                    <td>{user.Usu_Correo}</td>
                    <td>{user.Usu_Genero}</td>
                    <td>{user.Usu_Estado}</td>
                    <td>
                      <button
                        className="buttonUser"
                        onClick={() => handlerEdit(user)}
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button
                        className="buttonUser"
                        onClick={() => handleDelete(user)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
      {isEdit && (
        <>
          <form className="containter-form">
            <div>
              <label className="containter-form_label">Nombre: </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="containter-form_label">Apellido: </label>
              <input
                type="text"
                name="apellido"
                value={form.apellido}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="containter-form_label">Teléfono: </label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="containter-form_label">Correo: </label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="containter-form_label">Contraseña: </label>
              <input
                type="password"
                name="contraseña"
                value={form.contraseña}
                onChange={changeHandler}
              />
            </div>

          <div>
            <label className="containter-form_label">Género: </label>
            <select name="genero" value={form.genero} onChange={changeHandler}>
              <option value="">Seleccione una opción</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="containter-form_label">Estado: </label>
            <select name="estado" value={form.estado} onChange={changeHandler}>
              <option value="">Seleccione una opción</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          </form>
          <button className="buttonUser" type="submit" onClick={handlerUpdate}>
            Actualizar
          </button>
        </>
      )}
    </>
  );
};

export default User;
