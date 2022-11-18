import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    useParams,
    Link
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MyProgramWeekItem() {
    const params = useParams()
    console.log('params is', params)
    const dispatch = useDispatch();
    const weeks = useSelector(store => store.userProgram)
    console.log('what is in the store for my weeks', weeks)
    // console.log('show me the weeks in this data', weeks[0].week)


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_WEEKS',
            payload: {programId: params.programId}
        })
        console.log('what even is params id at this point', params)
    }, [params.programId])


    return(
        <>
            {weeks.map(week => (
                <Link id="RouterNavLink" to={'/week/' + week.week} key = {week.week} >
                {week.week}<br/>
                </Link>
            ))}
    
                
        </>
    )

}

export default MyProgramWeekItem