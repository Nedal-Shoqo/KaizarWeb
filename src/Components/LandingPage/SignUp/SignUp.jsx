const SignUp =()=>{

return(
<div className="SignUpMain"> 
<form>
  <div>
    <label htmlFor="fullName">Full Name</label>
    <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
  </div>
  
  <div>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" />
  </div>
  
  <div>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" />
  </div>
  
  <div>
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
  </div>
  
  <button type="submit">Sign Up</button>
</form>
</div>

);




}

export default SignUp;