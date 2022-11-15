import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import MyProgramWeekItem from '../MyProgramWeekItem/MyProgramWeekItem';
import MyProgramDay from '../MyProgramDay/MyProgramDay';


function MyProgramWeek () {
    return (
        <div>
            Here are the program weeks
            {/* <MyProgramWeekItem/> */}
            {/* <MyProgramDay /> */}
          
            
        </div>
    )
}


export default MyProgramWeek;