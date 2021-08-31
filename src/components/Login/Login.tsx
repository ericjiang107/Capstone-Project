import React, {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup} from "firebase/auth";
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Alert = (props:AlertProps) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface SignInProps {
    title: string,
    history: RouteComponentProps["history"],
    location: RouteComponentProps["location"],
    match: RouteComponentProps["match"]
}

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        margin: theme.spacing(1.7),
        borderRadius: 8,
        padding: '10px', 
        width: '40%',
        fontSize: '17px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
    },
},
}))

export const Login = withRouter((props:SignInProps) => {
    const classes = useStyles();
    const auth = useAuth();
    const { history } = props;
    const [open, setOpen] = useState(false);

    let handleSnackOpen = () => {
        setOpen(true)
    };

    let handleSnackClose = (_event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return
        }
        setOpen(false)
        history.push('/Home')
    };

    const sign_in = async() => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if(response.user){
            handleSnackOpen()
        }
    };

    const sign_out = async() => {
        await auth.signOut();
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-6 marTop text-center">
                    <h1>Single Card Price Checker</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 cardboxTop">
                    <div className="card"> 
                        <form className="padCard">
                            <div className="form-group">
                                <label htmlFor="#">Email</label>
                                <input className="form-control" type="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="#">Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <Link to="/Home">
                                <Button type="submit" className="btn btn-primary float-right" onClick={() => console.log('clicked')} >
                                    Submit
                                </Button>
                            </Link>
                        </form>
                    </div>
                    <AuthCheck fallback={
                        <div id="align">
                            <Button className={classes.buttonStyle} onClick={sign_in}>Sign In With Google</Button>
                        </div>
                        }>
                        <Button variant='contained' color='secondary' onClick={sign_out}>Sign Out</Button>
                    </AuthCheck>
                    <Snackbar message={'Success'} open={open} autoHideDuration={5000} onClose={handleSnackClose}>
                        <Alert onClose={handleSnackClose} severity="success">
                            Successful Sign In - Redirect in 5 secs
                        </Alert>
                    </Snackbar>
                </div>
                
                
            </div>
                
            
        </div>
    )
})