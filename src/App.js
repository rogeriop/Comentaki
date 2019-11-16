import React, { useContext } from 'react';
import './App.css';
import NewComment from './NewComment'
import Comments from './Comments'

import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'



function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
