import { useSelector } from "react-redux";
import MyProgramWeek from "../MyProgramWeek/MyProgramWeek";



function MyProgram () {
const programName = useSelector(store => store.currentProgram[0].name)
    return (
        <div>
            <h1>Current Program: {programName}</h1>
                <MyProgramWeek /> 
        </div>
    )
}

export default MyProgram;