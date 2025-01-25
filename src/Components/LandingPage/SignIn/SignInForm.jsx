import "./SignInForm.css"
const SignIn =()=> {

return(

<div className=" SignInMain"> 
<form>
<div>
  <label htmlFor="email">Email</label><br/>
  <input type="email" id="email" name="email" placeholder="  Enter your email" />
</div>

<div><br/>
  <label htmlFor="password">Password</label><br/>
  <input type="password" id="password" name="password" placeholder="  Enter your password" />
</div>

<button type="submit" id="SignInButton">Sign In</button>
</form>
</div>

);


}
export default SignIn;