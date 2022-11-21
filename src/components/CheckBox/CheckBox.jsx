import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Button } from "@mui/material";



function CheckSkipBox ({exercise}) {
    const [done, setDone] = useState(true);
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
            <Checkbox
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
        />
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