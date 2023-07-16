import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { selectIsLoggedIn, selectUname } from './soliSlicer';
const Footer = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const uName = useAppSelector(selectUname);


    return (
        <div>{isLoggedIn ? (
            <>
              <div><h2>Logged in as: {uName}</h2></div>
             
            </>
          ) : (
            <>
            <h3>Please Log In</h3>
            </>
          )}</div>
    )
}

export default Footer