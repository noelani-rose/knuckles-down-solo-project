import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';




import MyProgramWeek from "../MyProgramWeek/MyProgramWeek";


function MyProgram () {
    const dispatch = useDispatch();
    const params = useParams();
    // const weeks = useSelector(store => store.user)
    // console.log('what is weeks', weeks)

    useEffect(() => {
        console.log('in use effect to fetch user program')
        dispatch({
            type: 'FETCH_USER_PROGRAM', // trying to get all exercises for that user's program
            // payload: params.id
        })
        // console.log('what even is params.id', params.id)
    }, [params.id])




    return (
        <div>
            Here is my current program

                <MyProgramWeek />
            
            
        </div>
    )
}

export default MyProgram;