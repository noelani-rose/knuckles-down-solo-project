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
  )
}


const ProgramRender = ({user, personalRecords, chooseProgram, currentProgram}) => {
  return(
    <>
      <p>{user.experience} lifter</p>
      <p>Your current program is {currentProgram.name}</p>
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
          <Link to = {`/program/${currentProgram.programs_id}`}>
            Go to my program
          </Link>
      </Button>
    </>
  )
}


function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const currentProgram = useSelector(({currentProgram}) => currentProgram.currentProgram)
  const loading = useSelector(({currentProgram}) => currentProgram.loading)

  // console.log('whats the id rn', currentProgram[0].name)
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

      <LogOutButton className="btn" />
    </div>
  );
} 

// this allows us to use <App /> in index.js
export default HomePage;
