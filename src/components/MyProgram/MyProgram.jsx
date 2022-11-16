import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import { useEffect } from 'react';


import MyProgramWeek from "../MyProgramWeek/MyProgramWeek";




function MyProgram () {
    return (
        <div>
            Here is my current program

                <MyProgramWeek />
            
            
        </div>
    )
}

export default MyProgram;