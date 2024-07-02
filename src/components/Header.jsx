const Header = () =>{
    return(
        <>
        <header>
  <div className="logo">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
      alt="Figma Logo"
    />
  </div>
  <nav className="nav-menu">
    <a href="#">Products</a>
    <a href="#">Solutions</a>
    <a href="#">Community</a>
    <a href="#">Resources</a>
    <a href="#" className="no-arrow">
      Pricing
    </a>
    <a href="#" className="no-arrow">
      Contact Sales
    </a>
  </nav>
  <div className="right-menu">
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#loginmodal"
  >
    Login
  </button>

    <button
    type="button"
    className="bg-dark"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Get Started for free
  </button>

 

  </div>
</header>

<section className="main-section">
  <h1>
    How you <span className="highlight">design</span>, align, and{" "}
    <span className="highlight">build</span> matters. Do it together with{" "}
    <span className="highlight">Figma</span>.
  </h1>
  <button className="button" onclick="showGetStartedPage()">
    Get Started
  </button>
</section>


  


        </>
    )
}
export default Header