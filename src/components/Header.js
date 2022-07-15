// // header with bootstrap 
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div className=' bg-dark'>
//             <div className=' container-fluid'>
//                 <nav className="navbar navbar-expand-lg navbar-dark">
//                     <Link className="navbar-brand" to='/'>
//                         <img height='30px' src='https://i.pinimg.com/originals/34/e1/56/34e156f3d3c9a9222c9e725b17abbf13.jpg' alt='App Logo' />
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className=" navbar-nav ml-auto">
//                             <Link className="nav-link" to='/home'>HOME</Link>
//                             <Link className="nav-link" to='/signin'>SIGN IN</Link>
//                             <Link className="nav-link" to='/signUp'>SIGN UP</Link>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div >
//     );
// }

// export default Header;



// // // // header without bootstrap

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <div>
                <Link to="/" >
                       <img height='30px' src='https://i.pinimg.com/originals/34/e1/56/34e156f3d3c9a9222c9e725b17abbf13.jpg' alt='App Logo' />
                </Link>
                <Link to="/home" >Home</Link>
                <Link to="/bookdata" >Book Data</Link>
                <Link to="/signIn" >Sign In</Link>
                <Link to="/signUp" >Sign Up</Link>
                <Link to="/about" >About</Link>
            </div>
        </div >
    );
}

export default Header;


