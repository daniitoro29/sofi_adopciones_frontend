import { useState, useContext} from "react";
import "./AllPets.css";
import Modal from "../../../ModalEditPet/ModalEditPet";
import ModalBan from '../../../ModalPetsDelete/ModalPetsDelete';
import { DataGrid } from "@mui/x-data-grid";
import edit from '../../../../assets/img/editar.png';
import deleteU from '../../../../assets/img/eliminar.png';
import { UserContext } from '../../../../Context/context';


const AllPets = () => {
    const [open, setOpen] = useState(false);
    const [openBan, setOpenBan] = useState(false);
    const { pets } = useContext(UserContext);


       
    console.log('Esto es lo que me está llegando en pets ****', pets);


    const [actualPet, setActualPet] = useState({});
    const [form, setForm] = useState({
        id: "",
        nombre: "",
        especie: "",
        genero: "",
        raza: "",
        tamano: "",
        descripcion: "",
        foto: "",
        fecha_rescate: "",
        lugar_rescate: "",
        edad: "",
        estado_adopcion: "",
        vol_id: ""
    });

 

    const handleDelete = (pet) => {
        setOpenBan(true);
        setActualPet(pets?.find((u) => u.Mas_Id === pet.id))
    };



    const handlerEdit = (pet) => {
        const petResult = pets?.find((u) => u.Mas_Id === pet.id);
        setOpen(true);
        setActualPet(petResult.Mas_Id);
        setForm({
            id: petResult.Mas_Id,
            nombre: petResult.Mas_Nombre,
            especie: petResult.Mas_Especie,
            genero: petResult.Mas_Genero,
            raza: petResult.Mas_Raza,
            tamano: petResult.Mas_Tamano,
            descripcion: petResult.Mas_Descripcion,
            foto: petResult.Mas_Foto,
            fecha_rescate: petResult.Mas_Fecha_Rescate,
            lugar_rescate: petResult.Mas_Lugar_Rescate,
            edad: petResult.Mas_Edad,
            estado_adopcion: petResult.Mas_Estado_Adopcion,
            vol_id: petResult.Vol_Id
        });

    };

    const columns = [
        { field: "nombre", headerName: "Nombre", width: 150 },
        { field: "especie", headerName: "Especie", width: 150 },
        { field: "genero", headerName: "Genero", width: 150 },
        { field: "raza", headerName: "Raza", width: 200 },
        { field: "tamano", headerName: "Tamaño", width: 150 },
        { field: "descripcion", headerName: "Descripción", width: 150 },
        { field: "foto", headerName: "Foto", width: 150 },
        { field: "edad", headerName: "Edad", width: 150 },
        { field: "estado_adopcion", headerName: "Estado", width: 150 },
        {
            field: "Acciones",
            headerName: "Acciones",
            width: 200,
            renderCell: (params) => (
                <div className="container-icons">
                    <img src={edit} alt="editar" onClick={() => handlerEdit(params.row)} />
                    <img src={deleteU} alt="eliminar" onClick={() => handleDelete(params.row)} />
                </div>
            ),
        },
    ];

    const rows =  pets.length > 0 && pets?.map((pet) => ({
        id: pet.Mas_Id,
        nombre: pet.Mas_Nombre,
        especie: pet.Mas_Especie,
        genero: pet.Mas_Genero,
        raza: pet.Mas_Raza,
        tamano: pet.Mas_Tamano,
        descripcion: pet.Mas_Descripcion,
        foto: pet.Mas_Foto,
        fecha_rescate: pet.Mas_Fecha_Rescate,
        lugar_rescate: pet.Mas_Lugar_Rescate,
        edad: pet.Mas_Edad,
        estado_adopcion: pet.Mas_Estado_Adopcion,
        vol_id: pet.Vol_Id
    }));

    return (
        <>
            <div className="container-all_pets">
                <h1>Listado de mascotas</h1>
                <DataGrid rows={rows} columns={columns} />
            </div>
            {open && (
                <Modal form={form} setOpen={setOpen} open={open} setForm={setForm} userState={actualPet} />
            )}
            {
                openBan && (
                    < ModalBan openBan={openBan} setOpenBan={setOpenBan} actualUser={actualPet} />
                )
            }
        </>
    );
};

export default AllPets;
