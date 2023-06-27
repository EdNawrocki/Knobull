import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img style={{width:"50px"}} src="https://media.licdn.com/dms/image/C560BAQHxeMRytUU5xw/company-logo_200_200/0/1601089066813?e=2147483647&v=beta&t=ajOmaM3gWC9JeOQZbKk59r0GtfZ8Gzv1cGyVpEd3534" alt="Knobull Logo"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></Link>
                    <a class="nav-item nav-link" href="#">News</a>
                    <a class="nav-item nav-link" href="#">Blog</a>
                    <Link to="/About" class="nav-item nav-link">About Us</Link>
                    <a href="https://www.linkedin.com/company/knobull-inc/" target="_blank" className="nav-item nav-link" role="button">
                        LinkedIn
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;