import MyProgramWeekItem from '../MyProgramWeekItem/MyProgramWeekItem';
import { useSelector } from 'react-redux';

function MyProgramWeek () {

    // const weeks = useSelector(store => store.user)
    // console.log('what is weeks', weeks)
    return (
        <div>
                Here are the program weeks
                <MyProgramWeekItem/>
            
        </div>
    )
}


export default MyProgramWeek;