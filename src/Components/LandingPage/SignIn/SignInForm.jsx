const SignIn =()=> {

return(

<div className=" SignInMain"> 
<form>
<div>
  <label htmlFor="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" />
</div>

<div>
  <label htmlFor="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Enter your password" />
</div>

<button type="submit">Sign In</button>
</form>
</div>

);


}
export default SignIn;