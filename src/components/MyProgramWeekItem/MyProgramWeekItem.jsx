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
    const weeks = useSelector(store => store.user)
    console.log('what is in the store', weeks)
    // console.log('show me the weeks in this data', weeks[0].week)


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_WEEKS'
        })
    },[])


    return (
        <div>

            <Link id="RouterNavLink" to = '/days'>
                {weeks.map(week => (
                    <div key = {week.exercises.id}>{week.week}</div>
                ))}
                <div></div>
            </Link><br/>
            
        </div>
    )
}

export default MyProgramWeekItem