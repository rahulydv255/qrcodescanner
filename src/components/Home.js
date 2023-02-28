import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import ProductTable from './ProductTable';

function Home() {
    const [open, setOpen] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();
    const UserSession = sessionStorage.getItem("User-Details");
    const UserDetails = location.state;

    const handleClose =()=>{
        navigate("/login")
    }
    return (
        <>
            {UserDetails != null || UserSession != null ? (
                <>
                    <NavBar />
                    <br/>
                    <br/>
                    <ProductTable/>
                    <br/>
                    <br/>
                    <h2> Click On the Below link to Open Scanner</h2>
                    <Link to="/qrscanner">Click Here...</Link>
                </>
            ) : (
                <>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogContent>
                            <DialogContentText>
                                Please Login To View This Page
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button  onClick={handleClose}>
                                Back To Login
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            )
            }
        </>

    )
}

export default Home