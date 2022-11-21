import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MyProgramWeekItem() {
    const dispatch = useDispatch();
    const weeks = useSelector(store => store.week)
    console.log('weeks on the week item view', weeks)
    const currentProgramId = useSelector(store => store.currentProgram.currentProgram)
    const programId = currentProgramId.programs_id


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_WEEKS',
            payload: programId
        })
    }, [programId])

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

    return(
        <>
        {weeks.weeks.map(week => (
        <Link id="RouterNavLink" to=
        {`/program/${programId}/week/` + week.week} key = {week.week} >  
        <Box sx = {{ml: 50, my: 3, display: 'inline-block', boxShadow: 5}}>
         <Card sx={{ maxWidth: 200,textAlign: 'center'}} variant = "outlined">
        <CardContent>
         <Typography variant="h5" component="div">
         WEEK {bull} {week.week}
         </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Incomplete
        </Typography>       
                <div>View Days</div>

        </CardContent>
        </Card>
        </Box>
        </Link>
        ))}              
        </>
    )

}

export default MyProgramWeekItem