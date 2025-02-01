import "./SignInForm.css"
import {useState} from 'react';
const SignIn =({onSignIn})=> {




const[email , setEmail]=useState("")
const[password , setpassword]=useState("")
 const setterEmail =(value)=>setEmail(value);
 const setterpassword =(value)=>setpassword(value);

const handleform =(e)=>{
  e.preventDefault();
  const formData = {
    email,
    password,
  };
 onSignIn(formData)
}

return(

<div className=" SignInMain"> 
<form  onSubmit={handleform}>
<div>
  <label htmlFor="email">Email</label><br/>
  <input type="email" id="email" name="email" placeholder="  Enter your email" value={email}  onChange={(e)=>{setterEmail(e.target.value)}} />
</div>

<div><br/>
  <label htmlFor="password">Password</label><br/>
  <input type="password" id="password" name="password" placeholder="  Enter your password"  value={password}  onChange={(e)=>{setterpassword(e.target.value)}}/>
</div>

<button type="submit" id="SignInButton">Sign In</button>
</form>
</div>

);


}
export default SignIn;