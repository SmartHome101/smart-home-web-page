import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Member.module.css'
import cover from '../../assests/cover2.png'
import { Box } from '@mui/material';

const Member = () => {
    return (
        <Box>
            <Card
                sx={{
                    width: '300px',
                    boxShadow: 4,
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: 4
                }}>
                <img src={cover} alt='avatar' className={classes.media} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mahmoud Abdallah
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        "Once you cross over, there are things in the darkness
                        that can keep your heart from ever feeling the light again."
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">connect</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Member