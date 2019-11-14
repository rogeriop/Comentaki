import React, { useState, useEffect } from 'react';
import './App.css';
import NewComment from './NewComment'
import Comments from './Comments'

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
firebase.auth().onAuthStateChanged(user => {
  console.log(user.displayName)
  user.updateProfile({ displayName: 'João Pinheiro'})
})
*/
//

// UseDataBase

// useDatabasePush


//


// Comments

// NewComment


function App() {

  return (
    <div>
    <NewComment />
    <Comments />
    </div>
  );
}

export default App;
