import "./App.css";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Wager from "./components/Wager";
import Features from "./components/Features";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Agrimachinery from "./components/Agrimachinery";
import Agris from "./components/Agris";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/footer";


const fakeAuth={
  isAuthenticated: false,
  authenticate(cb){
    this.isAuthenticated=true
    setTimeout(cb,100)
  },
  signout(cb){
    this.isAuthenticated=false
    setTimeout(cb,100)
  }
}
function PrivateRoute({ children, ...rest}){
  return(
    <Route{...rest}render={()=>{
      return fakeAuth.isAuthenticated===true
      ? children
      :<Redirect to='/login'/>
      }}/> 
   
  )
}


  function App() {
  // // these function will show a pop up of notification allowance
  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     // generate token
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BDJ79zbVoTZmHQ1JeaSs8AoxODMJKqVoIG8v_csYlzDfT236QZRaUduuHDVPJ7ANc_AnCqp2WJ-Lh7tHREc39Qc",
  //     });
  //     console.log("Token generated", token);
  //   } else if (permission === "denied") {
  //     alert("you denied for the notificatin ");
  //   }
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, []);  
  return (
    <>
     
      <Router>
    
        <div className="App">
       
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
         
            <Route exact path="/about" >
              <About />
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
           
             <Route exact path="/features">
              <Features></Features>
             </Route>
           
            <Route
              exact
              path="/job">
              <Jobs></Jobs>
            </Route>
         
            <Route
              exact
              path="/wager" >
               <Wager></Wager>   

            </Route>
            <Route
              exact
              path="/mach">
                <Agris></Agris>
              </Route>
            <Route
              exact
              path="/machines">
                <Agrimachinery></Agrimachinery>
              </Route>
         
            
          </Switch>
          <Footer/>
          
        </div>
        
        
      </Router>
    
    </>
  );
}

export default App;

