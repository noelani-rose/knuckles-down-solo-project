import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MyProgramDayItem () {
    const params = useParams()
    const dispatch = useDispatch()
    let days = useSelector(store => store.day)
    // days = days[days.length -1]
    console.log('what is week id params on DAY PAGE', params.weekId)
    console.log('what is program id params on DAY PAGE', params.programId)


    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_DAYS', 
            payload: {
                programId: params.programId,
                weekId: params.weekId
            }
        })
    }, [params.programId, params.weekId])


      // Loop through exercises. Are all statuses done or skipped?
      // let isDayComplete = .....

    return (
        <>
        {days.map(day => (
            <Link id="RouterNavLink" to = 
            {`/program/${params.programId}/week/${params.weekId}/day/` + day.day} key = {day.day}>
            <Box sx = {{ml: 50, my: 3, display: 'inline-block', boxShadow: 5}}>
                <Card sx={{ maxWidth: 200,textAlign: 'center'}} variant = "outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                        DAY {bull} {day.day}
                        </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Incomplete
                    </Typography>
                        <div>Start lifting</div>
                    </CardContent>
                </Card>
            </Box>
            </Link>
        ))}
           
        </>
    )
}

export default MyProgramDayItem;