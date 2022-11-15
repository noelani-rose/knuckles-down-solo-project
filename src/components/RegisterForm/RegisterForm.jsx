import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [personalRecords, setPersonalRecords] = useState({snatch_pr: '', cleanjerk_pr: '', fronsquat_pr: '', backsquat_pr: ''})
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  // console.log(username)
  // console.log(password)
  // console.log(experience)
  console.log(personalRecords.snatch_pr)
  console.log(personalRecords.cleanjerk_pr)
  console.log(personalRecords.fronsquat_pr)
  console.log(personalRecords.backsquat_pr)

  const registerUser = (event) => {
    event.preventDefault();

    const userToAdd = {
      username: username,
      password, password, 
      experience: experience,
      personalRecords: personalRecords
    }



    dispatch({
      type: 'REGISTER',
      payload: userToAdd
    });
  }; // end registerUser

  // dispatch({
  //   type: 'REGISTER',
  //   payload: {
  //     username: username,
  //     password: password,
  //     experience: experience,
  //     personalRecords: personalRecords
  //   },

  

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

        <div>
      <FormControl>
      <FormLabel id="experience-level">Experience Level:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" 
        onChange = {(event) => setExperience(event.target.value)}
      >
        <FormControlLabel value="0" control={<Radio />} label="Beginner" />
        <FormControlLabel value="1" control={<Radio />} label="Intermediate" />
        <FormControlLabel value="2" control={<Radio />} label="Advanced" />
      </RadioGroup>
    </FormControl>
        </div>
      <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '15ch', height: '10ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type = "number" id="outlined-basic" label="Snatch" variant="standard" onChange = {(event) => setPersonalRecords({...personalRecords, snatch_pr: event.target.value})}/>
      <TextField type = "number" id="outlined-basic" label="Clean and Jerk" variant="standard" onChange = {(event) => setPersonalRecords({...personalRecords, cleanjerk_pr: event.target.value})} />
      <TextField type = "number" id="outlined-basic" label="Back Squat" variant="standard" onChange = {(event) => setPersonalRecords({...personalRecords, frontsquat_pr: event.target.value})}/>
      <TextField type = "number" id="outlined-basic" label="Front Squat" variant="standard" onChange = {(event) => setPersonalRecords({...personalRecords, backsquat_pr: event.target.value})}/>


    </Box>

      </div>

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
