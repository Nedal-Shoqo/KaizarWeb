import "./SignUp.css";
import { useState } from "react";

const SignUp = ({ onSignUp }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullnameChange = (value) => setFullname(value);
const handlePhoneNumberChange = (value) => setPhoneNumber(value);
  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => setPassword(value);
  const handleConfirmPasswordChange = (value) => setConfirmPassword(value);

  const handleSubmit = (e) => {
    e.preventDefault();


  console.log("Full Name:", fullname); // Log fullname
  console.log("Phone Number:", phoneNumber); // Log phoneNumber
  
    // Check if all required fields are filled
    if (!fullname || !email || !password || !phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const formData = {
      fullname,
      email,
      password,
      phoneNumber,
    };
  
    onSignUp(formData);
  };
  

  return (
    <div className="SignUpMain">
      <form id="form1" onSubmit={handleSubmit}>
        <div><br/>
          <label htmlFor="fullName">Full Name</label> <br/>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(e) => handleFullnameChange(e.target.value)}
          />
        </div>

        <div><br/>
          <label htmlFor="email">Email</label><br/>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </div>

        <div><br/>
          <label htmlFor="password">Password</label><br/>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
        </div>

        <div><br/>
          <label htmlFor="confirmPassword">Confirm Password</label><br/>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          />
        </div>

        <div><br/>
          <label htmlFor="phoneNumber">Phone Number</label><br/>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Add Your Phone Number"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
          />
        </div>

        <button type="submit" id="SignUpButton">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
