

function Header (props) {


    const logoSrc = require('../img/logo.jpg');
    return <>
    <div className="  pt-2 pb-2 bg-grad-dark-gray">
            <nav className="navbar navbar-expand-lg navbar-dark text-white   ps-4">
                <div className="container">
                    <div className="row w-100 mb-4">
                        <div className="col-12 w-100 text-center ">
                        <a href="#!">
                            <img src={logoSrc} alt="" />
                        </a>

                       
                        
                        </div>
                    </div>
                        
                       
                    
                </div>
            </nav>
    </div>
               
    </>
}

export { Header };