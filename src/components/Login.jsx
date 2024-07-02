const Login = () => {
    return(
        <>
        <div
    className="modal fade"
    id="loginmodal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
  
  <div className="social-login ">
    <button>
      <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png" />{" "}
      Continue with Google
    </button>
  </div>
  <h5 className="text-center mt-3 mb-3">or</h5> 
  <form>
    <input type="email" placeholder="Email" className="w-100 mb-3 form-control two p-2 " required="" />
    <input type="password" placeholder="Password" className="w-100 mb-3 form-control two p-2" required="" />
    <button className="login-button mb-3 w-100" type="submit">
      Login
    </button>
  </form>
  <p className="toss2 text-center">Use single sign-on</p>
 

  <p className="toss3 under-line" data-bs-toggle="modal"
    data-bs-target="#reset"> Reset Password 
   
 <>
 
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  </p>
  <p></p>
  <p className="toss4 text-center">
    No Account?{" "}
    <a href="#" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    >
      Create One
    </a>
  </p>


        </div>
        
      </div>
    </div>
  </div>
</>
        
    )
}
export default Login