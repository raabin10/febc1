import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect,useRef} from "react";


const App = () => {
    const [email, setEmail] = useState("");
    const userEmailRef = useRef(null);
    const [password, setPassword] = useState("");
    const userPassword = useRef(null);
    const [confirmPassword, setConfirmPassword] = useState("");
    const userPasswordConfirm = useRef(null);
   
  useEffect(() => {
   const userEmail = userEmailRef.current;
  const userPwd = userPassword?.current;
  const userPwdC = userPasswordConfirm?.current;

  // Set styles based on conditions
  userEmail && (userEmail.style.borderColor = email.endsWith("@gmail.com") ? 'green' : 'tomato');
  userPwd && (userPwd.style.borderColor = password.length >= 8 ? 'green' : 'tomato');
  userPwdC && (userPwdC.style.borderColor = password === confirmPassword && password !== "" ? 'green' : 'tomato');
}, [email, password, confirmPassword]);
  

    
    function handleSubmit(){
      if((email.endsWith("@gmail.com")) && (password.length>= 8) && (password == confirmPassword)){
        alert("User form submitted");
      }else if(password != confirmPassword){
        alert("password not match")
      }
    }
    

    return(
      <form id="main-form" onSubmit={handleSubmit}>

        <div className="field" id="email">
          <label><b>Email:</b></label><br/>
          <input 
            type="email" 
            id="user-email" 
            name="email" 
            required
            ref={userEmailRef}
            onChange={e =>{setEmail(e.target.value)}}>
          </input>
          {
            email.endsWith("@gmail.com") ?  <p></p> : <p className="text">Invalid email format</p>
          }
         
        </div>

        <div className="field" id="password">
          <label><b>Password:</b></label><br/>
          <input 
            type="password" 
            id="user-password" 
            name="email" 
            required
            ref={userPassword}
            onChange={e =>{setPassword(e.target.value)}}>
          </input>
          {
            (password.length>= 8) ? <p></p> : <p className="text">Password must be at least 8 characters</p> 
          }
        
          
        </div>

        <div className="field" id="confirm-password">
          <label><b>Confirm Password:</b></label><br/>
          <input 
            type="password" 
            id="user-password-confirm" 
            name="email" 
            required
            ref={userPasswordConfirm}
            onChange={e =>{setConfirmPassword(e.target.value)}}>
          </input>
          {
            (password == confirmPassword) && (password!="") ? <p></p> : <p className="text">Password do not match</p> 
          }
         
        </div>

        <div className="field" id="btn-container">
          <button id="signup-btn">Sign Up</button>
        </div>
        
      </form>   
    )
}

export default App;