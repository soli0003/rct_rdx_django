import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import Soli from './features/counter/Soli';
import { setLog } from './features/counter/soliSlicer';
import Footer from './features/counter/Footer';
function App() {
// isLoggedIn = useAppSelector(selectIsLoggedIn);

const dispatch = useAppDispatch();
useEffect(() => {
  const tmp = localStorage.getItem("access")

  if (tmp != null) {
    console.log("welcome");
    dispatch(setLog())
    console.log("2");

    
  }

}, [])

  return (
    <div className="App">
      <header className="App-header">
       hello
       <Soli/>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
