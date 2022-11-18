import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Button } from '@mui/material';
// import CameraAccess from '../CameraAccess/CameraAccess';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';




function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const params = useParams()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const currentProgram = useSelector((store) => store.currentProgram)
  console.log('what is the current program', currentProgram)

  const chooseProgram = () => {
    history.push('/programs')
  }

  // const programId = 1;
  // let selectedProgramId = fetch(`/users/${programId}`);
  // selectedProgramId = 1;

  const personalRecords = [
    'Snatch:' + user.snatch_pr,
    'Clean and Jerk:' + user.cleanjerk_pr,
    'Front Squat:' + user.front_squat_pr,
    'Back Squat:' + user.back_squat_pr
  ]


  useEffect(() => {
    console.log('in use effect trying to get user program')
    dispatch({
      type: 'FETCH_CURRENT_PROGRAM',

    })
  }, [])


  if (currentProgram == undefined){
    currentProgram = []
}

  return (

    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Your Program is: {currentProgram[0].name}</p>
      <p>This programs Experience Level is: {currentProgram[0].experience_level}</p>
      <p>Your experience level is: {user.experience}</p>
      {/* <ul> */}
        Your personsonal records are: 
        <ul>
          {personalRecords.map(pr => (
            <li key = {pr}>
              {pr}
            </li>
          ))}
        </ul>

      <LogOutButton className="btn" />
      <br/>
      <br/>

      
        <Button variant = 'outlined' onClick = {chooseProgram}>
          Choose a Program
        </Button>
      

        <Button variant = 'oulined'>
        {/* <Link to = {`/program/${currentProgram[0].programs_id}`}> */}
        <Link to = {`/program/:id`}>
            Start Lifting
          </Link>
        </Button>

      
      {/* <CameraAccess /> */}
    </div>

  );
}

// this allows us to use <App /> in index.js
export default HomePage;
