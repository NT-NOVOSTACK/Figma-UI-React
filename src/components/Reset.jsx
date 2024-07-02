const Reset =() => {
    return(
        <>
        <>
  
  <div
    className="modal fade"
    id="reset"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="reset"
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
          <div className="text1">
            
          </div>
          <h2 className="text-center mb-2  mt-1 bold-text"> Enter your email to reset  password</h2>
          
         
       
          
          </div>

          <input type="email" placeholder="Email" className=" w-100 mb-3  form-control  one p-2"  required="" />
          <input type="password" placeholder=" Reset Password" className="w-100 mb-3 form-control one  p-2" required="" />
      
 
          <p className="tos2 text-center mt-3" data-bs-toggle="modal"
    data-bs-target="#loginmodal">Cancel</p>
         
        </div>
      </div>
    </div>
  
</>


        </>
   


      
    )
}
export default Reset