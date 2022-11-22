import { useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useSelector } from "react-redux";



function CheckSkipBox ({exercise}) {
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const currentProgram = useSelector(store => store.currentProgram)


    const addExerciseStatus = (event) => {
        const exerciseStatus = {
            user_id: user.id,
            program_id: currentProgram.currentProgram.programs_id,
            program_exercise_id: exercise.programs_exercises_id,
            week: exercise.week,
            day: exercise.day,
            status: event.target.value 
        }
        console.log('exercises to update', exerciseStatus)
        dispatch({
            type: 'UPDATE_EXERCISE_STATUS',
            payload: exerciseStatus
        })
    }

    return (
        <>
            <FormControl >
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group" >
                    <FormControlLabel value="Completed" control={<Radio required/>}  onChange = {addExerciseStatus} label="Completed" />
                    <FormControlLabel value="Skipped" control={<Radio />}  onChange = {addExerciseStatus} label="Skipped" />
                </RadioGroup>
            </FormControl>
      </>
    )
}

export default CheckSkipBox