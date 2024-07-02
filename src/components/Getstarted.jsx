const Getstarted = () => {
    return(
        <>
        <>
 
  <div
    className="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="staticBackdropLabel"
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
        <>
  
  <div className="social-login">
    <button className="w-100">
      <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png" />{" "}
      Continue with Google
    </button>
  </div >
  <h5 className="text-center  mt-3 mb-3 ">or </h5> 
  <form>
    <input type="email" placeholder="Email" className=" w-100 mb-3 form-control  one p-2"  required="" />
    <input type="password" placeholder="Password" className="w-100 form-control one  p-2" required="" />
    <label className="checkbox d-flex align-items-center justify-content-center w-100 mt-3">
      <input type="checkbox"/> Subscribe for Figma updates*
    </label>
    <button className="login-button btn btn-6 w-100"  type="submit">
    Create account 
    </button>
  </form>
  <p className="tos text-center">
    By clicking "Create account" or "Continue with Google", you agree to the{" "}
    <span className="blue">Figma TOS</span> and{" "}
    <span className="blue">Privacy Policy</span>.<br />
    <span className="tos1">
      *By opting in, you are consenting to receive product, service, and event
      updates from Figma. You can unsubscribe at any time.
    </span>
  </p>
  <p className="tos2 text-center">Use single sign-on</p>
  <p className="tos3 text-center">
    Already have an account?{" "}
    <a href="#"  data-bs-toggle="modal"
    data-bs-target="#loginmodal"
  >
      Login
    </a>
  </p>
</>

            </div>
        
      </div>
    </div>
  </div>
</>


        </>
    )
}
export default Getstarted