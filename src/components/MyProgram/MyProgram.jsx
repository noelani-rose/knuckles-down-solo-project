import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyProgramWeek from "../MyProgramWeek/MyProgramWeek";

function MyProgram () {
    const dispatch = useDispatch();
    const currentProgram = useSelector(({currentProgram}) => currentProgram.currentProgram)
    console.log('program name on my program page', currentProgram)
    const loading = useSelector(({currentProgram}) => currentProgram.loading)



    useEffect(() => {
        if (!currentProgram){
            dispatch({
                type: 'FETCH_USER_PROGRAM'  
            });
        }
    }, [currentProgram]);



    return (
        <div>
            {(loading || !currentProgram) ? (
                <h1>Loading</h1>
            ):(
                <>
                    <h1>Current Program: {currentProgram.name}</h1>
                    <MyProgramWeek /> 
                </>
            )}
                

        </div>
    )
}

export default MyProgram;