import * as React from "react";
import { FC, useState } from "react";
import { auth } from "./Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

interface RegisterProps {
  open: boolean;
  handleClose: () => void;
}

const Register:FC<RegisterProps> = ({open, handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      setError("");
      if (validatePassword()) {
        await createUserWithEmailAndPassword(auth, email, password);
        handleClose();
      }
    } catch (err) {
      setError(err.message);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body2" color="error">
            {error && <div className="auth__error">{error}</div>}
          </Typography>
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin="dense"
          id="confirm"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Go</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Register;
