import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setchecking] = useState(true)
  const [logged, setlogged] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user =>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setlogged(true);
      }
      else{
        setlogged(false);
      }
      setchecking(false);
    });
  }, [dispatch])

  if (checking){
    return (
      <h1> Cargando ... </h1>
    )
  }

  return (

    <HashRouter>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated = {logged}
          />
          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated = {logged}
          />

          <Redirect to= "/auth/login" />
          
        </Switch>
      </div>
    </HashRouter>
  )
}
