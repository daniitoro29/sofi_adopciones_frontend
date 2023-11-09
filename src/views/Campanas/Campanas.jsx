import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../Context/context';
import NavBar from "../NavBar/NavBar";
import { DataGrid } from "@mui/x-data-grid";


const AllPets = () => {
  const { campaigns } = useContext(UserContext);


  useEffect(()=> {
    console.log('Esto es campaigns ****', campaigns)
  }, [campaigns])
  

  const columns = [
    { field: "Lugar", headerName: "Cam_Lugar", width: 300 },
    { field: "Descripcion", headerName: "Cam_Descripcion", width: 300 },
    { field: "Fecha_Campana", headerName: "Cam_Fecha_Campana", width: 300 },
];


const formatDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return `${day}-${month}-${year}`;
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
      <div className="container-all_user">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  );
};

export default AllPets;
