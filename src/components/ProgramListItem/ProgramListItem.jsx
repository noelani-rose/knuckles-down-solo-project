import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';


import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';





function ProgramListItem () {
    const programs = useSelector(store => store.program)
    console.log('programs in the store right now are', programs)
    const dispatch = useDispatch();
    const [programId, setProgramId] = useState()
    const [open, setOpen] = useState(false);
    
    
    
    
    const handleClickOpen = (id) => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    
    
    const addUserProgram = (id) => {
        
        console.log('in adduserprogram function sending over program id')
        console.log('the payload id for add user program is', id)
        
        dispatch({
            type: 'ADD_USER_PROGRAM',
            payload: id
        })
    }
    
    return(
        <>
        {/* <React.Fragment>
        
        <Dialog
        open={open}
        onClose={handleClose}
        >
        <DialogTitle>Are you sure this is the program you want to start?</DialogTitle>
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
        {/* {programs.map(program => (
            <Button onClick = {() => addUserProgram(program.id)}>Yes!</Button>
        ))} */}
        {/* <Button onClick = {() => addUserProgram(program.id)}>Yessssssss!</Button>
        
        <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        <DialogActions>
        
        </DialogActions>
        </Dialog>
    </React.Fragment> */} 
    
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
        <td><button onClick = {() => handleClickOpen()}>Select</button></td>
        <React.Fragment>
        
        <Dialog
        open={open}
        onClose={handleClose}
        >
        <DialogTitle>Are you sure this is the program you want to start?</DialogTitle>
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
        {/* {programs.map(program => (
            <Button onClick = {() => addUserProgram(program.id)}>Yes!</Button>
        ))} */}
        <Button onClick = {() => addUserProgram(program.id)}>Yessssssss!</Button>
        
        <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        <DialogActions>
        
        </DialogActions>
        </Dialog>
        </React.Fragment>
        </tr>
        ))}
        </tbody>
        </table>
        
        
        
        
        
        </>
        )
    }
    
    export default ProgramListItem