import { useRef, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lfvvqti', 'template_imt47gm', form.current, 'user_LolrCiBKtQin705vxo8S6')
            .then(() => {
                emailjs.sendForm('service_lfvvqti', 'template_l8ej52n', form.current, 'user_LolrCiBKtQin705vxo8S6')
            }, (error) => {
                console.log(error.text);
            });

            //clear form after submitting
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        
    }

    return (
        <Box style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
            <Typography gutterBottom variant="h4" align='center'>
                Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" align='center' component="p" gutterBottom>
                Fill up the form and our team will get back to you in a short time.
            </Typography>
            <form ref={form} onSubmit={handleOnSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <TextField name="user_name" value={name} placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="user_email" value={email} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="subject" value={subject}placeholder="Enter email subject" label="Subject" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="message" value={message} label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default ContactUs