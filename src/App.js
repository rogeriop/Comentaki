import React, { useContext } from 'react';
import './App.css';
import NewComment from './NewComment'
import Comments from './Comments'

import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'



function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
