import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../redux/actions";
import { useState, useEffect } from "react";
import "./Users.css";
import NavBar from "../../../NavBar/NavBar";
import Modal from "../../../ModalEdit/ModalEdit";
import ModalBan from '../../../ModalDelete/ModalDelete';
import { DataGrid } from "@mui/x-data-grid";
import edit from '../../../../assets/img/editar.png';
import deleteU from '../../../../assets/img/eliminar.png';

const Users = () => {
 const [open, setOpen] = useState(false);
 const [openBan, setOpenBan] = useState(false);
 const [userState, setUser] = useState("");
 const users = useSelector((state) => state?.users)  ;
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
 }, [dispatch]); // Update the users whenever getUsers action is dispatched

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
  { field: "Correo", headerName: "Correo", width: 200 },
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
   <NavBar />
   <div className="container-all_user">
    <DataGrid rows={rows} columns={columns} checkboxSelection />
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
