import React from 'react';
// importing routes:
import { Card, Home, Login, User, CardImage, Signup } from '..';
// importing Router and Switch functionality:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirestoreProvider, AuthProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const App = () => {
    const firestoreInstance = getFirestore(useFirebaseApp());
    const auth = getAuth(useFirebaseApp());
    return (
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={firestoreInstance}>
          <Router>
            <Switch>
              {/* Login Page */}
              <Route exact path ='/'>
                <Login title={'SCPC'} />
              </Route>

              {/* Home Page */}
              <Route path='/Home'>
                <Home />
              </Route>

              {/* Card Page */}
              <Route path='/cards/:productId'>
                <Card />
              </Route>

              {/* User Page */}
              <Route path='/User'>
                <User />
              </Route>

              <Route path='/CardImage/:productId'>
                <CardImage />
              </Route>

              <Route path='/Signup'>
                <Signup />
              </Route>
            </Switch>
          </Router>
        </FirestoreProvider>
      </AuthProvider>
    );
  }