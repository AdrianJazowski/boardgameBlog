/** @format */

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const Alert = ({ handleDeletePost }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOnlyClose = () => {
    setOpen(false);
  };
  const handleCloseAndDelete = () => {
    setOpen(false);
    handleDeletePost();
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Usuń Post</Button>
      <Dialog
        open={open}
        onClose={handleOnlyClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Czy jesteś pewny że chcesz nieodwracalnie usunąć ten post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndDelete} color="primary">
            TAK
          </Button>
          <Button onClick={handleOnlyClose} color="primary" autoFocus>
            NIE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Alert;
