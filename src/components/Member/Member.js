import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Member.module.css'
import { Box } from '@mui/material';


const Member = ({ Name, About, Avatar, ContactInfo }) => {
    return (
        <Box >
            <Card className={classes.card} sx={{boxShadow: 3, borderRadius: 5}}>
                <img alt='avatar' src={Avatar} className={classes.media}/>
                <CardContent>
                    <h5 gutterBottom className={classes.name}>
                        {Name}
                    </h5>
                    <p color="text.secondary" className={classes.about}>
                        {About}
                    </p>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{borderRadius: '50px'}} href={ContactInfo} target="_blank">connect</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Member