import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
/*import{
  BrowserRouter as Router,
  Route,
  Routes
  
}from 'react-router-dom';
*/
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message, //message:message
        type: type
      })
      setTimeout(() =>
        setAlert(null)
        , 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      document.body.style.color ='white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor= 'white';
      document.body.style.color ='#042743'; //by using this we change text color
      showAlert("Light mode has been enabled","success");
    }

  }

  
  
  return (
    <>
    { /* <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <Navbar/> */}
      {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<Routes>
            <Route exact path="/about" element={<About/>} >

           </Route>

           <Route exact path="/home" element={ */}
           <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>{/*}>

          } </Route>
      </Routes>*/}
     
          
          
      </div>
      
     {/* </Router>*/}

    </>
  );
}

export default App;
