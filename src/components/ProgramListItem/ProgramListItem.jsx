import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';




import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'



function ProgramListItem () {
    const programs = useSelector(store => store.program)
    console.log('programs in the store right now are', programs)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: "FETCH_USER_PROGRAM"
        })
    })

    const addUserProgram = (id) => {
        console.log('in adduserprogram function sending over program id')
        dispatch({
            type: 'ADD_USER_PROGRAM',
            payload: id
        })
    }



    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Days per Week</th>
                    <th>Intensity</th>
                    <th>Volume</th>
                    <th>Good For</th>
                </tr>
            </thead>
            <tbody>
                {programs.map(program => (
                    <tr key = {program.id}>
                        <td>{program.name}</td>
                        <td>{program.days_per_week}</td>
                        <td>{program.intensity}</td>
                        <td>{program.volume}</td>
                        <td>{program.good_for}</td>
                        <td><button onClick ={addUserProgram}>Select</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ProgramListItem