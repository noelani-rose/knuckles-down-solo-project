import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

import MyProgramDay from '../MyProgramDay/MyProgramDay';


function MyProgramWeekItem () {
    return (
        <div>
            <Link to = '/days'>
                Week 1
            </Link><br/>
            <Link to = '/days'>
                Week 2
            </Link><br/>
            <Link to = '/days'>
                Week 3
            </Link>
            
        </div>
    )
}

export default MyProgramWeekItem