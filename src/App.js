import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useEffect, useState } from "react";
import Feed from "./components/picContainer/feed";
import LogOrSign from "./components/logOrSign";
import {fetchPics, tokenFetch} from "./utils";
// import logo from "./images/logo.png"
import Update from "./components/update";

const App = () => {
  const [username, setUsername] = useState();

  const [randPicArr, setRandPicArr] = useState([]);
  const [user, setUser] = useState(0);
  const [error, setError] = useState(0);

  const [showFeed, setShowFeed] = useState(false);
  const [userLoginPage, setUserLoginPage] = useState(true);

  const [updateForm, setUpdateForm] = useState(false);

  useEffect (() => {
    fetchPics(setRandPicArr); // eslint-disable-next-line
    tokenFetch(setUser, setShowFeed, setUserLoginPage, setUpdateForm);
  }, [showFeed])


  return (
    <div className="App">
        {/* <Breadcrumb.Item active>Test123</Breadcrumb.Item> */}
        <h1 className='title'>Instagram Clone</h1>
        {/* <img src = {logo} alt="" width="400px" height="250px"/> */}
        <LogOrSign 
        setUser={setUser} 
        setError={setError} 
        // showFeed={showFeed} 
        setShowFeed={setShowFeed} 
        userLoginPage={userLoginPage} 
        setUserLoginPage={setUserLoginPage}
        setUpdateForm={setUpdateForm}
        username={username}
        setUsername={setUsername}
        />

        <Update 
        username={username} 
        updateForm={updateForm} 
        setUpdateForm={setUpdateForm}
        setUser={setUser} 
        setError={setError}
        setUsername={setUsername}
        user={user} />
        
        {error ? <p className="error">{error}</p> : <p>Error or message would go here</p>}
        {user ? <><h2>Hey there, {user}</h2></> : <h2>Username from backend will end here</h2>}
        {/* <input onChange={(e)=> setUser(e.target.value)}></input> */}

         {/* this is a (function)al component - instead of sending arguments, we send property objects...then in the functional component, instead of calling it props, give it specific names...(this is in the parameter) */}
        {/* {randPicArr.map((item, index) => {
        return (
        <Feed 
        randPicArr={randPicArr} 
        setRandPicArr={setRandPicArr}
        key={index}/>
        );
      })} */}
      {showFeed ? <Feed randPicArr={randPicArr} setRandPicArr={setRandPicArr}/>: <></>}
      
        
    </div>
  );
}

export default App;
