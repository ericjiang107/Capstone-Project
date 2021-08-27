import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// importing routes:
import { Card, Home, Login, User, ProductImage } from './components';
// importing Router and Switch functionality:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// importing firebase:
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}> {/* New Provider */}
      {/* Adding Switch Routes below */}
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
          <Route path='/Card/:productId'>
            <Card />
          </Route>

          {/* User Page */}
          <Route path='/User'>
            <User />
          </Route>

          <Route path='/ProductImage'>
            <ProductImage />
          </Route>


        </Switch>
      </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
