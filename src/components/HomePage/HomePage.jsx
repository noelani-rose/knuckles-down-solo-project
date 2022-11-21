import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

import {useSelector} from 'react-redux';
import { Button } from '@mui/material';
// import CameraAccess from '../CameraAccess/CameraAccess';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const DefaultRender = ({user, personalRecords, chooseProgram}) => {
  return(
    <>
      <p>No program selected yet</p>
      <h3>{user.experience} lifter</h3>
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
  )
}

const ProgramRender = ({user, personalRecords, chooseProgram, currentProgram}) => {
  return(
    <>
      <h3>{user.experience} lifter</h3>
      <h3>Your current program is: {currentProgram.name}</h3>
      Your personsonal records are:
      <ul>
        {personalRecords.map(pr => (
          <li key = {pr}>
            {pr}
          </li>
        ))}
      </ul>
          <Link to = {`/program/${currentProgram.programs_id}`}>
            <Button variant = 'outlined'>
              Start Lifting
            </Button>
          </Link>
    </>
  )
}


function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const currentProgram = useSelector(({currentProgram}) => currentProgram.currentProgram)
  const loading = useSelector(({currentProgram}) => currentProgram.loading)

  console.log('THE CURRENT PROGRAM IS!!!!!!!!!', currentProgram)


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
    if (!currentProgram){
      console.log('THERE IS NO CURRENT PROGRAM')
        dispatch({
            type: 'FETCH_USER_PROGRAM'  
        });

    }
}, [currentProgram]);


  if (user.experience == 2){
    user.experience = 'Advanced'
  } else if (user.experience == 1) {
    user.experience = 'Intermediate'
  } else if (user.experience == 0) {
    user.experience = 'Beginner'
  }

  const body = !currentProgram ? (
    <DefaultRender user = {user} personalRecords = {personalRecords} chooseProgram = {chooseProgram} />
   ) : (
    <ProgramRender user = {user} personalRecords = {personalRecords} chooseProgram = {chooseProgram} currentProgram = {currentProgram}/>
  )

  return (
    <div className="container">

      <h2>Welcome, {user.username}!</h2>

      {loading ? (
        <h1>Loading...</h1>
      ):(
        body
      )} 
      <br/>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
} 


export default HomePage;
