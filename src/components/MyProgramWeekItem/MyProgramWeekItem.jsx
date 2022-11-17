import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
  import { useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';




function MyProgramWeekItem () {
    const dispatch = useDispatch();
    const weeks = useSelector(store => store.exercises)
    // console.log('what is in the store', weeks)


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_WEEKS'
        })
    },[])


    return (
        <div>
            <Link id="RouterNavLink" to = '/days'>
                {weeks.map(week => (
                    <div key = {week.id}>{week.week}</div>
                ))}
                <div></div>
            </Link><br/>
            
        </div>
    )
}

export default MyProgramWeekItem