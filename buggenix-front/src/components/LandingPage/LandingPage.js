import {Link}  from 'react-router-dom';

const LandingPage = () => {


    return (
        <>
            <Link to = "/login"><button name = "login">Login</button></Link>
            <Link to = "/signup"><button name = "signup">Sign up</button></Link>
        </>
    )
}

export default LandingPage;