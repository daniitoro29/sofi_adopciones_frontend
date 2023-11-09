import {  useDispatch } from "react-redux";
import { getUsers } from "../../../../redux/actions";
import { useState, useEffect, useContext } from "react";
import "./Users.css";
import Modal from "../../../ModalEdit/ModalEdit";
import ModalBan from '../../../ModalDelete/ModalDelete';
import { DataGrid } from "@mui/x-data-grid";
import edit from '../../../../assets/img/editar.png';
import deleteU from '../../../../assets/img/eliminar.png';
import { UserContext } from '../../../../Context/context';

const Users = () => {
 const [open, setOpen] = useState(false);
 const [openBan, setOpenBan] = useState(false);
 const [userState, setUser] = useState("");
 const { users } = useContext(UserContext);
 const [actualUser, setActualUser] = useState({})
 const [form, setForm] = useState({
  id: "",
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
 }, [users]); 

 const handleDelete = (user) => {
setOpenBan(true);
setActualUser (users.find((u) => u.Usu_Id === user.id))
 };

 const handlerEdit = (user) => {
  const userResult = users?.find((u) => u.Usu_Id === user.id);
  setOpen(true);
  setUser(userResult.Usu_Id);
  setForm({
   nombre: userResult.Usu_Nombre,
   apellido: userResult.Usu_Apellido,
   telefono: userResult.Usu_Telefono,
   correo: userResult.Usu_Correo,
   contraseña: userResult.Usu_Contraseña,
   genero: userResult.Usu_Genero,
   estado: userResult.Usu_Estado,
   rol: userResult.Rol_Id
  });
 };

 const columns = [
  { field: "Nombre", headerName: "Nombre", width: 150 },
  { field: "Apellido", headerName: "Apellido", width: 150 },
  { field: "Teléfono", headerName: "Teléfono", width: 150 },
  { field: "Correo", headerName: "Correo", width: 250 },
  { field: "Género", headerName: "Género", width: 150 },
  { field: "Estado", headerName: "Estado", width: 150 },
  {
   field: "Acciones",
   headerName: "Acciones",
   width: 200,
   renderCell: (params) => (
    <div className="container-icons">
    <img src={edit} alt="editar" onClick={() => handlerEdit(params.row)}/>  
    <img src={deleteU} alt="editar" onClick={() => handleDelete(params.row)}/>
    </div>
   ),
  },
 ];

 const rows = users.length > 0 && users?.map((user) => ({
  id: user.Usu_Id,
  Nombre: user.Usu_Nombre,
  Apellido: user.Usu_Apellido,
  Teléfono: user.Usu_Telefono,
  Correo: user.Usu_Correo,
  Género: user.Usu_Genero,
  Estado: user.Usu_Estado,
 }));

 return (
  <>
   <div className="container-all_user">
      <h1>Listado de usuarios</h1>
    <DataGrid rows={rows} columns={columns} />
   </div>
   {open && (
    <Modal form={form} setOpen={setOpen} open={open} setForm={setForm} userState={userState} />
   )}
   {
    openBan && (
       < ModalBan openBan={openBan} setOpenBan={setOpenBan} actualUser={actualUser}/>
    )
   }
  </>
 );
};

export default Users;
