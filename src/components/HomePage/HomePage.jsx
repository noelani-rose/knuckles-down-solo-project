import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

import {useSelector} from 'react-redux';
import { Button } from '@mui/material';
// import CameraAccess from '../CameraAccess/CameraAccess';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const currentProgram = useSelector((store) => store.currentProgram)
  // console.log('whats the id rn', currentProgram[0].name)


  const chooseProgram = () => {
    history.push('/programs')
  }

  const personalRecords = [
    'Snatch:' + user.snatch_pr,
    'Clean and Jerk:' + user.cleanjerk_pr,
    'Front Squat:' + user.front_squat_pr,
    'Back Squat:' + user.back_squat_pr
  ]


  useEffect(() => {
    if (currentProgram){
    console.log('in use effect on home page')
        dispatch({
            type: 'FETCH_CURRENT_PROGRAM', 
            payload: currentProgram.programs_id   
        });
    }
}, [currentProgram.programs_id]);

  return (
    <div className="container">

      <h2>Welcome, {user.username}!</h2>
      {!currentProgram ? (
        <>
          <p>No program selected yet</p>
          <p>{user.experience} lifter</p>
          Your personsonal records are
          <ul>
            {personalRecords.map(pr => (
              <li key = {pr}>
                {pr}
              </li>
            ))}
          </ul>
        <Button variant = 'outlined' onClick = {chooseProgram}>
		      Choose a Program
	      </Button>
        </>

      ) : (
        <>
          <p>{user.experience} lifter</p>
          <p>Your current program is {currentProgram[0].name}</p>
          Your personsonal records are
          <ul>
            {personalRecords.map(pr => (
              <li key = {pr}>
                {pr}
              </li>
            ))}
          </ul>
        <Button variant = 'oulined'>
          	{/* this ID is being hard coded for now, make it dynamic */}
          	{/* <Link to = {`/program/${currentProgram[0].programs_id}`}> */}
		        <Link to = {`/program/${currentProgram[0].programs_id}`}>
			        Go to my program
		        </Link>
	      </Button>
        </>
        
      )}

      <p>Your ID is: {user.id}</p>
      
      {/* <CameraAccess /> */}
      <br/>
      <LogOutButton className="btn" />
    </div>

  );
} 

// this allows us to use <App /> in index.js
export default HomePage;
