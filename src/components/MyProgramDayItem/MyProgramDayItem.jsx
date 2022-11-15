import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';


function MyProgramDayItem () {
    return (
        <div>
            <Link to = '/exercises'>Day 1</Link><br/>
            <Link to = '/exercises'>Day 2</Link><br/>
            <Link to = '/exercises'>Day 3</Link><br/>
        </div>
    )
}

export default MyProgramDayItem;