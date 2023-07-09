import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import "../Form/Form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    contraseña: "",
    genero: "",
    estado: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleSend = () => {
    dispatch(
      createUser({
        Usu_Nombre: form.nombre,
        Usu_Apellido: form.apellido,
        Usu_Telefono: form.telefono,
        Usu_Correo: form.correo,
        Usu_Contraseña: form.contraseña,
        Usu_Genero: form.genero,
        Usu_Estado: form.estado,
      })
    );
  };

  return (
    <>
      <div className="general-container_form">
        <div className="title-User">
          <a href="/home">
            <img
              src="https://peluditosconfuturo.org/wp-content/uploads/2015/01/logo2.png"
              alt="log"
            />
          </a>
          <h2>Registrarse</h2>
        </div>
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
              <option value="0tro">Otro</option>
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
        <button className="buttonForm" type="submit" onClick={handleSend}>
          Registrarse
        </button>
      </div>
    </>
  );
};

export default Form;
