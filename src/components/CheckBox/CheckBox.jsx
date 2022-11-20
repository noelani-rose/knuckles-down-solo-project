import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Button } from "@mui/material";



function CheckSkipBox ({exercises}) {
    // console.log('exercises in check skip box function are', exercises[0].exercises)

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
            <Checkbox
            id = {exercises.id}
            checked={done}
            color = "success"
            onChange={handleDoneChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
            <Checkbox
            id = {exercises.id}
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
}

export default CheckSkipBox