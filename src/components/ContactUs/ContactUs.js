import { useRef, useState, forwardRef } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import emailjs from '@emailjs/browser';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ContactUs = () => {

    const form = useRef();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lfvvqti', 'template_imt47gm', form.current, 'user_LolrCiBKtQin705vxo8S6')
            .then(async () => {
                await emailjs.sendForm('service_lfvvqti', 'template_l8ej52n', form.current, 'user_LolrCiBKtQin705vxo8S6')
                //clear form after submitting
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
                setOpen(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <Box style={{ maxWidth: 800, padding: "20px 5px", margin: "40px auto " }} name='contactus'>
            <Typography gutterBottom variant="h4" align='center'>
                Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" align='center' component="p" gutterBottom>
                Fill up the form and our team will get back to you in a short time.
            </Typography>
            <form ref={form} onSubmit={handleOnSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField name="user_name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" label="Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="user_email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} placeholder="Enter email subject" label="Subject" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" sx={{ backgroundColor: '#123B73', color: 'white' }} fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Done!
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default ContactUs