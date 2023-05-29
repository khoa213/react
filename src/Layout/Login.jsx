import styled from "styled-components";
import git from "../components/images/github.svg";
import React, { useState } from "react";
import ReactDOM from "react-dom";
const StyledLogin = styled.div`
    width: 1920px;
    height: 1080px;
    position: relative;
    background-image: linear-gradient( to right,#0083B0,#8C56FF);
    * {
    box-sizing: border-box;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  [className*="col-"] {
    float: left;
    
  }
@media only screen and (min-width: 600px) {
    /* For tablets: */
    .col-s-1 {width: 8.33%;}
    .col-s-2 {width: 16.66%;}
    .col-s-3 {width: 25%;}
    .col-s-4 {width: 33.33%;}
    .col-s-5 {width: 41.66%;}
    .col-s-6 {width: 50%;}
    .col-s-7 {width: 58.33%;}
    .col-s-8 {width: 66.66%;}
    .col-s-9 {width: 75%;}
    .col-s-10 {width: 83.33%;}
    .col-s-11 {width: 91.66%;}
    .col-s-12 {width: 100%;}
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
  }
  .row {
    position: absolute;
    width: 1366px;
    height: 849px;
    left: calc(50% - 1366px/2 - 101px);
    top: calc(50% - 849px/2 + 3.5px);
    background: #FFFFFF;
    border-radius: 40px;
}  
.logo {
    position: absolute;
    width: 212px;
    height: 47px;
    left: 10%;
    top: 10%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}
.log-in {
    position: absolute;
    width: 166px;
    height: 84px;
    left: 10%;
    top: 15%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 84px;
    color: #000000;
}
.form-login {
    position: absolute;
    left: 10%;
    top: 25%;
}
.login-input {
    width: 450px;
    height: 23px;
    background: #C0DBEA;
    border-radius: 4px;
}
.forgot-pass {
    margin-left: 20%;
    color: #000000;
    opacity: 0.5;
    
}
.login-button {
    position: absolute;
    width: 150px;
    height: 46px;
    background: #D885A3;
    border-radius: 23px;
    left: 20%;
    top: 40%;
    
}
.login-button:hover {
    cursor: pointer;
}
.media {
    position: absolute;
    width: 125px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #6096B4;
    border-radius: 40px;
    margin-right: 5%;
    left: 10%;
    top:60%;
}
.media:hover {
    cursor: pointer;
}
.m-1 {
    left: 10%;
    top:60%;
}
.m-2 {
    left: 20%;
    top:60%;
}
.m-3 {
    left: 30%;
    top:60%;
}
.rec-green {
    position: absolute;
    width: 489px;
    height: 849px;
    background: #C0DBEA;
    border-radius: 40px;
    right: 0;
}
.laptop-girl {
    position: absolute;
    width: 552px;
    height: 542px;
    bottom: 5%;
    right: 15%;
}
`;
const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    return <StyledLogin>
        <div className="row">
            <div className="col-6">
                <div className="logo">
                    Khoa
                </div>
                <div className="log-in">
                    Log in
                </div>
                <div className="form-login">
                    <form action="#">
                        <label for="" >Username:</label><br/>
                        <input className="login-input" type="text" id="username" name="uname"/><br/>
                        {renderErrorMessage("uname")}
                        <label for="">Password:</label><span className="forgot-pass"><a href="javascript:void(0)" style={{textDecoration: 'none'}}> Forgot password?</a></span><br/>
                        <input className="login-input" type="password" id="password" name="pass"/>
                        {renderErrorMessage("pass")}
                    </form>
                    
                </div>
                
                <button className="login-button" onClick={handleSubmit}>LOGIN IN</button>
                <div>{isSubmitted ? <div>User is successfully logged in</div> : <div>Login failed</div>}</div>
                
                <div style={{left: '20%',top: '55%',position: 'absolute'}}>or continue with</div>
                <div>
                    <button className="media m-1"><img src={git} alt=""/></button>
                    <button className="media m-2"><img src={git} alt=""/></button>
                    <button className="media m-3"><img src={git} alt=""/></button>
                </div>
                <span style={{left: '10%',top: '70%',position: 'absolute',marginRight: '2%'}}>Don't have account yet? </span>
                <span style={{left: '25%',top: '70%',position: 'absolute'}}><a href="">Sign up for free</a></span>
            </div>
            <div className="col-6">
                <div className="rec-green"></div>
                <div className="laptop-girl"><img src="Character-working-laptop-sitting-chair.svg" alt=""/></div>
            </div>
        </div>
    </StyledLogin>
}
export {Login};