function Navbar() {

    return(
        <nav className='navbar navbar-expand-md navbar-light bg-light'>
            <div className='container-fluid'>
            <form className='d-flex col-6 ms-2'>
                <i className="bi-bootstrap bi--rotate-315 bi--xl justify-content-center mt-2 me-1"></i>
                <input className='form-control pt-2 pb-2' type='search' placeholder='What you looking for ?' /> 
            </form>
            <button className="navbar-toggler p-1 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="bi-list bi--md"></span><span className="bi-person-fill bi--md"></span>
            </button>
            
            <div className='collapse navbar-collapse box-shadow' id='navbarText'>
                <ul className="navbar-nav ms-auto mb-lg-0 align-items-center">
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link active">
                    <button className='btn btn-dark btn-sm p-3 pt-2 pb-2'>Sell Stuff</button>
                    </a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link">
                    <i className="bi bi-globe"></i>
                    </a>
                </li>
                <li className="nav-item dropdown d-none d-md-block">
                    <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className='p-1 pt-2 pb-2 rounded-2 border border-1'><i className="bi bi-list"></i> <i className="bi bi-person-fill"></i></button>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item" href="#">Login / Register</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">The Team</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">Buzz The Team</a></li>
                    </ul>
                </li>
                </ul>  

                <ul className="navbar-nav ms-auto mb-lg-0 d-block d-md-none">
                <li className="nav-item text-center">
                    <a className="nav-link active">
                    Sell Stuff
                    </a>
                </li>
                <li className="nav-item text-center">
                    <a className="nav-link active">
                    Buzz The Team
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-center">
                    <button className='btn btn-dark btn-md pe-2 pt-2 pb-2 rounded-0'>Login / Register</button>
                    </a>
                </li>
                </ul>
                
            </div>
            
            
            </div>
        </nav>
    )
}

export default Navbar;