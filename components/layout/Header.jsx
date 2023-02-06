export default function Header() {
    return (
        <>
            <nav className="announcement_bar">
                <div className="container">
                    <span className="text-center">
                        HANDMADE BY ARTISANS OF LUCKNOW
                    </span> <br />
                    <span>It's a Sharky Celebration! 🦈 USE CODE: SHARKTANK</span>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg header_sticky_wrapper">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar w/ text</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>


        </>
    )
}