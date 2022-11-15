import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

  import MyProgramDayItem from '../MyProgramDayItem/MyProgramDayItem';

function MyProgramDay () {
    return (
        <div>
            Here are the list of days 
            <Link to = '/my_program_day'>
                <MyProgramDayItem />
            </Link>
        </div>
    )
}

export default MyProgramDay;