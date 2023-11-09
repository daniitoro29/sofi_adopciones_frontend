import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../Context/context';
import NavBar from "../NavBar/NavBar";
import { DataGrid } from "@mui/x-data-grid";
import "./Campanas.css";


const AllPets = () => {
  const { campaigns } = useContext(UserContext);


  useEffect(() => {
    console.log('Esto es campaigns ****', campaigns)
  }, [campaigns])


  const columns = [
    { field: "Lugar", headerName: "Lugar", width: 300 },
    { field: "Descripcion", headerName: "Descripcion", width: 300 },
    { field: "Fecha_Campana", headerName: "Fecha", width: 300 },
  ];


  const formatDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
  
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
    return `${day} de ${monthNames[month - 1]} de ${year}`;
  };

  const rows = campaigns.length > 0 ? campaigns.map((campaign) => ({
    id: campaign.Cam_Id,
    Lugar: campaign.Cam_Lugar,
    Descripcion: campaign.Cam_Descripcion,
    Fecha_Campana: formatDate(campaign.Cam_Fecha_Campana),
  })) : [];

  return (
    <>
        <NavBar />
      <div className="container-campaigns">

        <h1>Listado de campañas</h1>
        <div className="container-all_user">
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default AllPets;
