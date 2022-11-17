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
            payload: params.id
        })
    }, [])


    return(
        <>
                <Link id="RouterNavLink" to='/days'>
                    {weeks.map(week => (
                        <div>{week.week}</div>
                    ))}
                    <div></div>
                </Link><br />
        </>
    )


    // if (weeks !== 'undefined') {
    //     return (
    //         <div>
    //             <Link id="RouterNavLink" to='/days'>
    //                 {/* {weeks.map(week => (
    //                     <div key={week.exercises.id}>{week.week}</div>
    //                 ))} */}
    //                 <div></div>
    //             </Link><br />

    //         </div>
    //     )

    // } else {
    //     return(
    //         <><h1>Loading...</h1></>
    //     )
    // }
}

export default MyProgramWeekItem