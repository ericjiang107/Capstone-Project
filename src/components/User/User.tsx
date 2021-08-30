import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1.7),
        background: 'linear-gradient(45deg, #5f2c82 30%, #49a09d 90%)',
        boxShadow: '0 3px 5px 2px rgba(0, 190, 250, .3)',
        borderRadius: 3,
        fontSize: '17px'
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
    }
}))

export const User = () => {
    const classes = useStyles();
    return (
        <div>
            <nav className={classes.sticky}>
                {/* <Button variant="contained" type="submit" component={Link} to={'./Card'} >Card</Button> */}
                {/* <Button className={classes.button} variant="contained" type="submit" component={Link} to={'/User'} >My Account</Button> */}
                <Button className={classes.button} variant="contained" type="submit" component={Link} to={'/Home'} >Home</Button>
            </nav>
            <div className={classes.padding}>
                Hello
            </div>
        </div>
    )
}