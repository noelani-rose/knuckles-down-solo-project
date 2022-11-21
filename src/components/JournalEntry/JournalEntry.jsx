import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function JournalEntry () {
    const entries = useSelector(store => store.journal)

    return (
        <div>
            {entries.map(entry => (
                <Box>
                    <ul>
                        <li>
                            <Card sx={{ maxWidth: 500}} >
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Entry for week {entry.week} day {entry.day} of {entry.name}
                                    </Typography>
                                    <div>{entry.entry}</div>
                                </CardContent>
                            </Card>
                        </li>
                    </ul>
                </Box>
            ))}
        </div>
    )
}

export default JournalEntry;