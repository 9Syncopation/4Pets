import React from "react";

//strapi function
import loginUser from '../Strapi/LoginUser'
import registerUser from '../Strapi/RegisterUser'
//handle user
import { useHistory } from "react-router-dom";
import {UserContext} from '../Context/UserContext'

export default function Login() {
  const history = useHistory();
  // setup user context
  const{ userLogin ,alert, showAlert }= React.useContext(UserContext)
  
  
  //state values
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevMember)=>{
      console.log('prevMember', prevMember);
      let isMember = !prevMember
      isMember ? setUsername('default') : setUsername('')
      return isMember      
    })
  };

  const handleSubmit = async e => {
    // unable to click submit while uploading data
    showAlert({
      msg: `accessing user data.. Please wait`
    })

    //alert
    e.preventDefault();
    let response
    if(isMember){
      response = await loginUser({email, password})
    }else{
      response = await registerUser({email, password, username})
    }
    
    if (response) {
      console.log('submit response', response)
     const {jwt: token, user: { username }} = response.data
     const newUser = {token , username}
     console.log('NEWUSER', newUser);
     
     userLogin(newUser)
     showAlert({
       msg: `you are logged in : ${username} checkout our pets`
     })
     history.push("/PetsPage")

      
    }else{
      //show alert
      showAlert({
        msg: `there was an error, please try again..`,
        type: "danger"
      })
    }
  };
  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "Login" : "Register"}</h2>
      <form className="login-form">
        {/* single input EMAIL */}
        <div className="form-control">
          <label htmlFor="email">email </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}

        {/* single input PASSWORD */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/* end of single input  */}

        {/* single input USERNAME */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}

        {/* empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}

        {/* submit btn */}
          {!isEmpty && (
            <button type="submit" className="btn btn-block btn-primary" onClick ={handleSubmit}>
              submit
            </button>
          )}

        {/* register link */}
        <p className="register-link">
          {isMember ? "need to register?" : "Already a member?"}
           <button type="button" onClick= {toggleMember}>click here</button>
          </p>
      </form>
    </section>
  );
}
