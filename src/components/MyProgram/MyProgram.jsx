import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';


import MyProgramWeek from "../MyProgramWeek/MyProgramWeek";

function MyProgram () {
    return (
        <div>
            Here is my current program
            {/* <Link to = '/my_program_week'> */}
                <MyProgramWeek />
            {/* </Link> */}
            
        </div>
    )
}

export default MyProgram;