import React, { useContext } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { DataGrid } from '@mui/x-data-grid'; 
import { UserContext } from '../../../../Context/context';


const AllParticipants = () => {
  const { pets, campaigns, volunteers, adopter, participant, users } = useContext(UserContext);

  const columns = [
    { field: 'Cam_Id', headerName: 'Campaña ID', width: 150 },
    { field: 'Cam_Lugar', headerName: 'Lugar', width: 150 },
    { field: 'Vol_Nombre', headerName: 'Voluntario', width: 150 },
    { field: 'Ado_User_Id', headerName: 'Adoptante', width: 150 },
    { field: 'Mas_Id', headerName: 'Mascota', width: 150 },
  ];

  const rows = participant.map((participants) => {
    const campaign = campaigns.find((campaign) => campaign.Cam_Id === participants.Cam_Id);
    const volunteer = volunteers.find((volunteer) => volunteer.Vol_Id === participants.Vol_Id);
    const adopters = adopter.find((adopter) => adopter.Ado_User_Id === participants.Ado_User_Id);
    const pet = pets.find((pet) => pet.Mas_Id === participants.Mas_Id);

    return {
      id: participants.Part_Id,
      Cam_Id: participants.Cam_Id,
      Cam_Lugar: campaign ? campaign.Cam_Lugar : null,
      Vol_Nombre: volunteer ? `${users.find((user) => user.Usu_Id === volunteer.Usu_Id).Usu_Nombre} ${users.find((user) => user.Usu_Id === volunteer.Usu_Id).Usu_Apellido}` : null,
      Ado_User_Id: adopters ? `${users.find((user) => user.Usu_Id === adopters.Usu_Id).Usu_Nombre} ${users.find((user) => user.Usu_Id === adopters.Usu_Id).Usu_Apellido}` : null,
      Mas_Id: pet ? pet.Mas_Nombre : null,
    };
  });

  const getTableData = () => {
    const tableData = [];
    for (const row of rows) {
      const tableRow = [];
      for (const column of columns) {
        tableRow.push(row[column.field]);
      }
      tableData.push(tableRow);
    }
    return tableData;
  };

  const exportPDF = () => {
    if (rows.length === 0) {
      return;
    }
  
    const doc = new jsPDF();
    const tableData = getTableData();
    doc.autoTable({ head: [columns.map((column) => column.headerName)], body: tableData });
    doc.autoPrint({ orientation: 'landscape' });
    doc.save('participantes.pdf');
  };

  return (
    <>
      <div className="container-all_user">
        <h1>Reporte de campañas</h1>
        <button onClick={exportPDF}>Exportar como PDF</button>
        <DataGrid rows={rows} columns={columns}/>
      </div>
    </>
  );
};

export default AllParticipants;