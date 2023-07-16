import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectUname, selectIsLoggedIn, loginAsync, logout, getRe } from './soliSlicer';

const Soli = () => {
  const uName = useAppSelector(selectUname);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const key = sessionStorage.getItem("refresh")
  
  

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div><h2>Logged in as: {username}</h2></div>
          <button onClick={() => dispatch(logout())}>logout</button>
          <button onClick={() => dispatch(getRe(key))}>get refresh</button>
        </>
      ) : (
        <>
        <h2>Please Log In</h2>
          Uname: <input onChange={(e) => setUsername(e.target.value)}></input>
          Pass: <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={() => dispatch(loginAsync({username,password}))}>Login</button> <br />
          Remember Me<input type='checkbox'></input>
        </>
      )}
    </div>
  );
};

export default Soli;
