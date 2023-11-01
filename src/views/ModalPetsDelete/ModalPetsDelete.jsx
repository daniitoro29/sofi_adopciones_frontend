import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { deletePet,getPets} from "../../redux/actions";
import { useDispatch } from "react-redux";


function ModalPetsDelete ({actualUser, openBan,  setOpenBan }) {
  const handleClose = () => setOpenBan(false);

  const dispatch = useDispatch();

  const handleDelete = (pet) => {
    dispatch(deletePet(pet.Mas_Id));
    handleClose()
    dispatch(getPets());
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
          <h1>¿Estás segudo de eliminar está mascota?</h1>

          <div className="container_button">
           <Button
            variant="contained"
            className="buttonForm"
            type="submit"
            onClick={() => handleDelete(actualUser)}
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

export default ModalPetsDelete;