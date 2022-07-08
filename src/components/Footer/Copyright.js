import classes from './Footer.module.css'
const Copyright = () => {
    return (
        <div className={classes.footer}>
            <p className={classes.textmarginBottom}>© {new Date().getFullYear()}{'.'} <a className={classes.copyrightLink} href="https://github.com/SmartHome101" rel="noreferrer" target="_blank">TecHome</a></p>
            <p className={classes.textmarginTop}>All rights reserved.</p>
        </div>
    )
}

export default Copyright