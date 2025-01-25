import "./SignUp.css"

const SignUp =()=>{

return(
<div className="SignUpMain"> 
<form id="form1">
  <div><br/>
    <label htmlFor="fullName">Full Name</label> <br/>
    <input type="text" id="fullName" name="fullName" placeholder="  Enter your full name" />
  </div>
  
  <div><br/>
    <label htmlFor="email">Email</label><br/>
    <input type="email" id="email" name="email" placeholder="  Enter your email" />
  </div>
  
  <div><br/>
    <label htmlFor="password">Password</label><br/>
    <input type="password" id="password" name="password" placeholder="  Enter your password" />
    
  </div>
  
  <div><br/>
    <label htmlFor="confirmPassword">Confirm Password</label><br/>
    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="  Confirm your password" />
  </div>
  
  <button type="submit" id="SignUpButton" >Sign Up</button>
</form>
</div>

);




}

export default SignUp;