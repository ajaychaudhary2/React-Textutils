import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/Aboutus';
import Text from './Components/Text';
import Alert from './Components/alert';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";








function App() {

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }




  const [mode, setmode] = useState('light');
  const togglemode1 = () => {
    if (mode === 'light') {
      setmode('customcolor')
      document.body.style.backgroundColor = 'red';
      showalert("Red mode have been enabled", "Succes")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';

    }
  }


  const togglemode2 = () => {
    if (mode === 'light') {
      setmode('customcolor')

      document.body.style.backgroundColor = 'grey';
      showalert("Grey mode have been enabled", "Succes")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';

    }
  }


  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode have been enabled", "Succes")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }

  }


  return (
    <>

      <Router>

        <Navbar title='Textutills' mode={mode} togglemode={togglemode} togglemode1={togglemode1} togglemode2={togglemode2} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About  mode={mode} />
            </Route>

            <Route path="/">
              <Text label='Enter Text Here' Heading='Enter The Text To Analize' mode={mode} showalert={showalert} />

            </Route>


          </Switch>
        </div>
      </Router>
    </>

  );

}
export default App;

