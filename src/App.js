import React, { useState, useEffect } from 'react';
import './App.css';
import NewComment from './NewComment'
import Comments from './Comments'

import { AuthProvider } from './auth'
import CreateUser from './CreateUser'

//
/*
// Criar conta e autenticar
firebase
  .auth()
  .createUserWithEmailAndPassword('pinheiro@gmail.com', 'abc123')
  .then( user => {
    console.log(user)
  })
 * / 
// Altera dados da conta

*/

function App() {

  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
      </div>
    </AuthProvider>
  );
}

export default App;
