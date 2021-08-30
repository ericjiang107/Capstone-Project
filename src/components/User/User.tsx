import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1.7),
        borderRadius: 3,
        fontSize: '17px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
    },
    },
    sticky: {
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        background: '#e0e0e0'
    },
    padding: {
        paddingTop: '80px'
    },
    float: {
        float: 'right',
    }
}))

export const User = () => {
    const classes = useStyles();
    return (
        <div>
            <nav className={classes.sticky}>
                {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
                {/* <Button className={classes.button} variant="contained" type="submit" component={Link} to={'/User'} >My Account</Button> */}
                <Button className={classes.button} variant="contained" color="primary" type="submit" component={Link} to={'/Home'} startIcon={<HomeIcon style={{ fontSize: 25 }}/>} >Home</Button>
                <div className={classes.float}>
                    <Button className={`${classes.button}`} variant="contained" color="primary" type="submit" component={Link} to={'/'} startIcon={<ExitToAppIcon style={{ fontSize: 25 }}/>} >Sign Out</Button>
                </div>
            </nav>
            <div className={classes.padding}>
                Hello
            </div>

        </div>
    )
}