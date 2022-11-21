import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



import MyProgramDayItem from '../MyProgramDayItem/MyProgramDayItem';


function MyProgramDay () {
    const dispatch = useDispatch()
    const currentProgram = useSelector(({currentProgram}) => currentProgram.currentProgram)
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
                    <h1>Current Program: {currentProgram.name}</h1>
                        <p>Here are the list of days</p> 
                    <MyProgramDayItem />
                </>
            )}


        </div>
    )
}

export default MyProgramDay;