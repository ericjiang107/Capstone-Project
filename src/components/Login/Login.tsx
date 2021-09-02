import React, {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth, AuthCheck, useFirestore } from 'reactfire';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import loginBackground from '../../components/assest/images/show-azusa-the-money.png';
import { url } from 'inspector';



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
    backgroundImage: {
        backgroundImage: `url(${loginBackground})`,
        objectFit: 'cover',
        width: '50px',
        height: '720px',
        zIndex: -1,
    },
    colors: {
        color: 'green',
    },
    buttonStyle: {
        margin: theme.spacing(1.7),
        borderRadius: 8,
        padding: '10px', 
        width: '100%',
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
    const firestore = useFirestore();
    const provider = new GoogleAuthProvider();

    const { history } = props;
    const [open, setOpen] = useState(false);

    let handleSnackOpen = () => {
        setOpen(true)
    };

    let handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return;
        }
        
        setOpen(false)
        history.push('/Home')
    };

    const sign_in = async () => {
        
        const response = await signInWithPopup(auth, provider);

        const user = response.user;
        
        if (user) {
            // store the user into firebase
            // after we have the credential - lets check if the user exists in firestore
            var docRef = doc(firestore, 'users', auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            
            
            if (docSnap.exists()) {
                //user exists then just update the login time
                
                // return user;
            } else {
                //user doesn't exist - create a new user in firestore
                addNewUserToFirestore(user);
            }
            
            handleSnackOpen();
        }
    };

    // Firestore connection 
    const addNewUserToFirestore = async ( user: any )  => {
        const details = {
          displayName: user.displayName,
          email: user.email,
          picture: user.photoURL,
          lastSignInTime: user.metadata.lastSignInTime
        };

        // add the user to the db
        await setDoc(doc(firestore, 'users', auth.currentUser.uid), details); 
        
        return {user, details};
    }

    const sign_out = async() => {
        await auth.signOut();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
                <div className={classes.colors}>
                    <div className="Extra">
                        <h1>Single Card Price Checker</h1>
                    </div>
                </div>
            </div>
            <div id="align">
                        <AuthCheck fallback={
                            <Button className={classes.buttonStyle} onClick={sign_in}>Sign In With Google</Button>
                        }>
                            <Button color='primary' onClick={sign_out}>Sign Out</Button>
                        </AuthCheck>
                        <Snackbar message={'Success'} open={open} autoHideDuration={3000} onClose={handleSnackClose}>
                            <Alert onClose={handleSnackClose} severity="success">
                                Successful Sign In - Redirect in 3 secs
                            </Alert>
                        </Snackbar>
            </div>
            <div className={classes.backgroundImage} id="creation"></div>
        </div>          
    )
})