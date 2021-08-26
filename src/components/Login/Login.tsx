import React, {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup} from "firebase/auth";

interface Props {
    title: string;
}


export const Login = ((props:Props) => {

//     const provider = new GoogleAuthProvider();

//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//     .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//     }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//   });


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
    
                </div>
                
                
            </div>
                
            
        </div>
    )
})