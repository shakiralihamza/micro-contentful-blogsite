import * as React from "react";
import { FC, useState } from "react";
import { auth } from "./Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";

interface LoginProps {
  open: boolean;
  handleClose: () => void;
}

const Login:FC<LoginProps> = ({open, handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      handleClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
  );
};

export default Login;
