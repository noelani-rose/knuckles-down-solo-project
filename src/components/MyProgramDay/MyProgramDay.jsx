import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import MyProgramDayItem from '../MyProgramDayItem/MyProgramDayItem';


function MyProgramDay () {
    const programName = useSelector(store => store.currentProgram[0].name)


    if (programName == undefined){
        programName = []
        return programName;
    }


    return (
        <div>

            <h1>Current Program: {programName}</h1>
            Here are the list of days 
                <MyProgramDayItem />

        </div>
    )
}

export default MyProgramDay;