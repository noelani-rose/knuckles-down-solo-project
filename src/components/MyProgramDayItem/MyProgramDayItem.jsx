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
import FormControl from '@mui/material/FormControl';



function MyProgramDayItem () {
    const params = useParams()
    const dispatch = useDispatch()
    let days = useSelector(store => store.day)
    const dayComplete = useSelector(store => store.dayComplete)
    const exerciseStatus = useSelector(store => store.exercises)
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
        dispatch({
            type: 'FETCH_DAY_COMPLETE'
        })
    }, [params.programId, params.weekId])

    // loop through day complete store
    // loop through day store 
    // if the day == day and the week == week params and complete == 'true', let dayComplete = true
    console.log('HERES THE CURRENT WEEK', params.weekId)
    console.log('days to compare', days)
    console.log('isdaycomplete to compare', dayComplete)
    const weekStringToNum = parseInt(params.weekId)
  
    days.forEach(day => {
        dayComplete.forEach(complete => {
            if(complete.week === weekStringToNum && day.day === complete.day){
                day.isComplete = true
            }
        })
    })
    console.log('what are the days now', days)

    return (
        <>
        {days.map(day => (
            <Link id="RouterNavLink" to = 
            {`/program/${params.programId}/week/${params.weekId}/day/` + day.day} key = {day.day}>
            <Box sx = {{ml: 17, my: 3, display: 'inline-block', boxShadow: 5}}>
                <Card sx={{ maxWidth: 400,textAlign: 'center'}} variant = "outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                            DAY {bull} {day.day}
                        </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     {day.isComplete ? (<div>Complete</div>) : (<div>Incomplete</div>)}
                    </Typography>
                        <div>View Exercises</div>
                    </CardContent>
                </Card>
            </Box>
            </Link>
        ))}  
        </>
    )
}

export default MyProgramDayItem;