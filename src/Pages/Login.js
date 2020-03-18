import React from "react";


export default function Login() {
  
  return (
    <section className="form section">
      <h2 className="section-title">login</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          
        </div>
        {/* end of single input */}
        {/* single input */}
        
          <div className="form-control">
            <label htmlFor="username">username</label>
           
          </div>
        

        {/* end of single input */}
        {/* empty form text */}
        
          <p className="form-empty">please fill out all form fields</p>
        
        {/* submit btn */}
       
          <button
            type="submit"
            className="btn btn-block btn-primary"
            
          >
            submit
          </button>
        
        {/* register link */}
        <p className="register-link">
          "need to register?" 
          <button type="button" >
            click here
          </button>
        </p>
      </form>
    </section>
  );
}