import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { banUser} from "../../redux/actions";
import { useDispatch } from "react-redux";


function ModalDelete ({actualUser, openBan,  setOpenBan }) {
  const handleClose = () => setOpenBan(false);

  const dispatch = useDispatch();

  const handleDelete = (user) => {
    dispatch(banUser(user.Usu_Id));
    handleClose()
     };


     return (
      <div className="general-container-edit-modal">
       <Modal
        open={openBan}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
        <div style={{ display: "flex", justifyContent: "center" }}>
         <div className="container-edit-modal">
          <h1>¿Estás segudo de bannear este usuario?</h1>

          <div className="container_button">
           <Button
            variant="contained"
            className="buttonForm"
            type="submit"
            onClick={handleDelete(actualUser)}
           >
            Confirmar
           </Button>
           <Button variant="outlined" type="button" onClick={() => handleClose()}>
            Cancelar
           </Button>
          </div>
         </div>
        </div>
       </Modal>
      </div>
     );
}

export default ModalDelete;