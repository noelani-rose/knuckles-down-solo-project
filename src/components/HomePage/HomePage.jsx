import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Button } from '@mui/material';
// import CameraAccess from '../CameraAccess/CameraAccess';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProgramsList from '../ProgramsList/ProgramsList';



function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const chooseProgram = () => {
    history.push('/programs')
  }


  const personalRecords = [
    'Snatch:' + user.snatch_pr,
    'Clean and Jerk:' + user.cleanjerk_pr,
    'Front Squat:' + user.front_squat_pr,
    'Back Squat:' + user.back_squat_pr
  ]


  // useEffect(() => {
  //   dispatchEvent({
  //     type: 'FETCH_USER_PROGRAM'
  //   })
  // }, [])
  

  return (

    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
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
      


      <Link to = '/my_program'>
        Start Lifting
      </Link>
      
      {/* <CameraAccess /> */}
    </div>

  );
}

// this allows us to use <App /> in index.js
export default HomePage;
