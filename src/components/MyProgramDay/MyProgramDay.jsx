import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



import MyProgramDayItem from '../MyProgramDayItem/MyProgramDayItem';


function MyProgramDay () {
    const dispatch = useDispatch()
    const currentProgram = useSelector(({currentProgram}) => currentProgram.currentProgram)
    const params = useParams()
    const loading = useSelector(({currentProgram}) => currentProgram.loading)


    useEffect(() => {
        if (!currentProgram){
            dispatch({
                type: 'FETCH_USER_PROGRAM'  
            });
        }

    }, [currentProgram]);

   

    return (
        <div>
            {(loading || !currentProgram) ? (
                <h1>Loading...</h1>
            ): (
                <>
                    <h1>{currentProgram.name}</h1>
                    <h2>WEEK: {params.weekId}</h2>
                    <MyProgramDayItem />
                </>
            )}


        </div>
    )
}

export default MyProgramDay;