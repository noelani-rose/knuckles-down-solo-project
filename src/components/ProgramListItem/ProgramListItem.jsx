import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



function ProgramListItem () {
    const history = useHistory();
    const programs = useSelector(store => store.program)
    // console.log('programs in the store right now are', programs)
    const dispatch = useDispatch();
    const [programId, setProgramId] = useState()
    const [open, setOpen] = useState(false);
    // const [state, setState] = useState({
    //     alertOpen: false,
    //     vertical: 'top',
    //     horizontal: 'center',
    //   });
    // const { vertical, horizontal, alertOpen } = state;


    // const handleAlertClick = (newState) => () => {
    //     setState({ alertOpen: true, ...newState });
    //   };

    // const handleAlertClose = () => {
    //     setState({ ...state, alertOpen: false });
    //   };

    
    
    const handleClickOpen = (id) => {
        setOpen(true);
        console.log('opening confirmation for program with id', id)
        setProgramId(id);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    
    const redirectToHome = () => {
        history.push('/user')
    }
    
    const addUserProgram = () => {
        
        console.log('in adduserprogram function sending over program id')
        console.log('the payload id for add user program is', programId)
        
        dispatch({
            type: 'ADD_USER_PROGRAM',
            payload: programId
        })
        handleClose();
        redirectToHome();
        // handleAlertClick();   
    }
    
    return(
<>


{/* 
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            alertOpen={alertOpen}
            onClose={handleAlertClose}
            message="Program Added!"
            key={vertical + horizontal}
        /> */}



<React.Fragment> 
    <Dialog
        open={open}
        onClose={handleClose}
        >
            <DialogTitle>
                Are you sure this is the program you want to start?
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Note: you can only have one active program at a time!
                </DialogContentText>
                <Box
                    noValidate
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: 'fit-content',
                    }}
                    >
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick = {() => addUserProgram()}>Get Lifting!</Button>
                <Button onClick={handleClose}>No, keep Browsing</Button>
            </DialogActions>
    </Dialog>
</React.Fragment>


    <div>
    {/* <Button
        onClick={handleAlertClick({
          vertical: 'top',
          horizontal: 'center',
        })}
      >
        Top-Center
      </Button> */}
        {/* <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            alertOpen={open}
            onClose={handleAlertClose}
            message="Program Added!"
            key={vertical + horizontal}
        /> */}
    </div>
    
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Days per Week</th>
    <th>Intensity</th>
    <th>Volume</th>
    <th>Good For</th>
    </tr>
    </thead>
    <tbody>
    {programs.map(program => (
        <tr key = {program.id}>
            <td>{program.name}</td>
            <td>{program.days_per_week}</td>
            <td>{program.intensity}</td>
            <td>{program.volume}</td>
            <td>{program.good_for}</td>
            <td><button onClick = {() => handleClickOpen(program.id)}>Select</button></td>
        </tr>
        ))}
        </tbody>
        </table>
        </>
    )
}
    
    export default ProgramListItem