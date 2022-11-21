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
    console.log('what is exercise for the checkbox', exercise)
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const currentProgram = useSelector(store => store.currentProgram)

    // console.log('exercise id im trying to send over', exerciseId)

    // const [done, setDone] = useState(false);
    // const [skipped, setSkipped] = useState(false)

    // const handleDoneChange = (event) => {
    //     setDone(event.target.checked);
    //     console.log('done', done);
    //     setSkipped(false)
    // };

    // const handleSkipChange = (event) => {
    //     setSkipped(event.target.checked);
    //     console.log('skipped', skipped)
    //     setDone(false)
    // };

    // for (let exercise of exercises){
    //     console.log('exercises id is', exercise.id)
    //     setExerciseId(exercise.id)
    // }

    console.log('ecerca;slkdfjasldfkj id is', exercise.id)

    const addExerciseStatus = (event) => {
        const exerciseStatus = {
            user_id: user.id,
            program_id: currentProgram.currentProgram.programs_id,
            exercise_id: exercise.id,
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
            <FormControl>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    <FormControlLabel value="Completed" control={<Radio />} onChange = {addExerciseStatus} label="Completed" />
                    <FormControlLabel value="Skipped" control={<Radio />} onChange = {addExerciseStatus} label="Skipped" />
                </RadioGroup>
            </FormControl>
            {/* <Checkbox
            id = {exercise.id}
            checked={done}
            color = "success"
            onChange={handleDoneChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
            <Checkbox
            id = {exercise.id}
            checked={skipped}
            sx = {{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
            }}
            onChange={handleSkipChange}
            inputProps={{ 'aria-label': 'controlled' }}
        /> */}
      </>
    )
}

export default CheckSkipBox