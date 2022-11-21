import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



function CheckSkipBox ({exercise}) {
    const [done, setDone] = useState(false);
    const [skipped, setSkipped] = useState(false)

    const handleDoneChange = (event) => {
        setDone(event.target.checked);
        console.log('done', done);
        setSkipped(false)
    };

    const handleSkipChange = (event) => {
        setSkipped(event.target.checked);
        console.log('skipped', skipped)
        setDone(false)
    };



    return (
        <>
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Complete" control={<Radio />} label="Completed" />
        <FormControlLabel value="Skipped" control={<Radio />} label="Skipped" />
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


    return (
        <ToggleButton value={exercise.status}>
            <Option value="done">Complete</Option>
            <Option value="skipped">Skipped</Option>
        </ToggleButton>
    )
}

export default CheckSkipBox