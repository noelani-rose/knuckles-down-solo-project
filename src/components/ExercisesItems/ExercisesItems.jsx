import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckSkipBox from "../CheckBox/CheckBox";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function ExercisesItems ({programName}) {
    const [openAlert, setOpenAlert] = React.useState(false);
    const params = useParams();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    let exercises = useSelector(store => store.exercises)
    const week = exercises[0].week
    const day = exercises[0].day
    const [journal, setJournal] = useState({program: params.programId, week: 0, day: 0, entry: ''});
    console.log('whats journal week and day after click', journal)

    console.log(' exercises Are on items page,', exercises)
    useEffect(() => {
        console.log('in use Effect on exercises pages')
        dispatch({
            type: 'FETCH_PROGRAM_EXERCISES',
            payload: {
                programId: params.programId,
                weekId: params.weekId,
                dayId: params.dayId
            }
        })
    }, [params.programId, params.weekId, params.dayId])

    const handleClickOpen = (week, day) => {
        setOpen(true)
        setJournal({...journal, week: week, day: day})
        console.log('opening confirmation for week', week, 'and', day )
    };
    const handleClose = () => {
        setOpen(false);
      };

    const addJournalEntry = () => {
        console.log('am i getting the week and day when clicked')
        console.log('in add journal entry')
        dispatch({
            type: 'ADD_JOURNAL_ENTRY', 
            payload: journal
        })
        setOpen(false);
        handleAlertOpen()
    }

    const handleChange = (event) => {
        setJournal({...journal, entry: event.target.value});
      };

      const handleAlertOpen = () => {
        setOpenAlert(true);
      };
    
      const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenAlert(false);
      };

    if (exercises == undefined){
        return(
            <div>Loading...</div>
        )
    }
    // else {
    return(
        <>
            {/* <ul>
                {exercises[0].exercises.map(exercise => (
                    <li key = {exercise.id}>
                        {exercise.name}:
                        <CheckSkipBox exercises={exercises}/> <br/>
                        {exercise.rep_scheme} <br/>
                        Notes: {exercise.notes} <br/>
                        <br/>
                    </li>
                ))}
            </ul> */}
            <Button variant = "text" onClick = {() => handleClickOpen(week, day)}
                sx = {{height: '80px'}}> Add a Journal Entry&nbsp;&nbsp;
                <AutoStoriesIcon fontSize='large'/>
            </Button>
            <div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>How was training today?</DialogTitle>
                        <DialogContentText>
                            Week {journal.week} day {journal.day} of {programName}
                        </DialogContentText>
                        <Box
                            component="form"
                            sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                id="filled-multiline-flexible"
                                placeholder="Journal Entry"
                                multiline
                                maxRows={10}
                                value={journal.entry}
                                onChange={handleChange}
                                variant="filled"
                                />
                            </div>
                     </Box>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                        <Button onClick={addJournalEntry}>Add Entry</Button>
                    </DialogActions>
                    </Dialog>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                            <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                                Your entry has been saved!
                            </Alert>
                        </Snackbar>
                    </Stack>
            </div>
        </>
    )
}
// }
        
export default ExercisesItems