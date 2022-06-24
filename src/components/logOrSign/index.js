import {useState} from "react";
import { createUser, loginUser } from "../../utils";

// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';

export const LogOrSign = ({setUser, setError, setShowFeed, userLoginPage, setUserLoginPage, setUpdateForm, username, setUsername}) => { //dont need to use prop. if you desconstruct within parameter
    
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const submitHandler = (e) => {
        e.preventDefault(); //prevent page from reloading
        createUser(username, email, password, setUser, setError);
    }

    const submitHandler2 = (e) => {
        e.preventDefault(); //prevent page from reloading
        loginUser(username, password, setUser, setError, setShowFeed, setUserLoginPage, setUpdateForm);
    }

    return (
        <>
        {/* <p>Comment icon: <span class="glyphicon glyphicon-comment"></span></p>  */}
        {userLoginPage ? <div className="container">
        <form onSubmit={submitHandler} className="box">
            <h3>Don't have an account? Sign up</h3>
            <p>Username</p>
            <input onChange ={ (e) => {setUsername(e.target.value)}}/>
            <p>Email</p>
            <input onChange ={ (e) => {setEmail(e.target.value)}}/>
            <p>Password</p>
            <input type="password" onChange ={ (e) => {setPassword(e.target.value)}}/>
            <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        <form onSubmit={submitHandler2} className="box">
            <h3>Have an account? Log in</h3>
            <p>Username</p>
            <input onChange ={ (e) => {setUsername(e.target.value)}}/>
            <p>Password</p>
            <input type="password" onChange ={ (e) => {setPassword(e.target.value)}}/>
            <button type="submit" className="button" onClick={()=>{}}>Log in</button>
        </form>
        </div> : <></>}
        
        </>
    )
}

export default LogOrSign;