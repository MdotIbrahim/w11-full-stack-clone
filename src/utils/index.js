export const fetchPics =  async (setRandPicArr) => {
    try {
    const response = await fetch("https://picsum.photos/v2/list"); // GET request
    const data = await response.json();
    if (!response.ok){
        throw new Error(response.statusText);
    }
    // console.log(response)
    setRandPicArr(data);
    // console.log(randPicArr); // must import here if i want to see as i moved this function outside of app.js
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (username, email, password, setUser, setError) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {// must hide rest api location
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        }); 
        const data = await res.json();
        console.log(data);
        // let userToken = data.token
        localStorage.setItem("myToken", data.token); // also let user who created account stay signed in. (guide does it here only)
        if(data.error) {
            setError(data.error);
            throw new Error(data.error);
        }else{
            setUser(data.newUser.username);
            // setInterval(() => {
            //     window.location.reload();
            // }, 100);
            window.location.reload();
            setError("Thanks for signing up. Loading...");
        }
        
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (username, password, setUser, setError, setShowFeed, setUserLoginPage, setUpdateForm) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }); 
        const data = await res.json();
        // let userToken = data.token
        console.log(data.token);
        localStorage.setItem("myToken", data.token); // specific to browser and machine you're on
        if(data.error) {
            setError(data.error);
            throw new Error(data.error);
        }else{
            setUser(data.user.username);
            setShowFeed(true);
            setUserLoginPage(false);
            setUpdateForm(true);
            setError(true);
            
        }
        
    } catch (error) {
        console.log(error);
    }
}
export const tokenFetch = async (setUser, setShowFeed, setUserLoginPage, setUpdateForm) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {Authorization: localStorage.getItem("myToken")},
        })
        const data = await res.json();
        localStorage.setItem("myToken", data.token); //save new token
        setUser(data.user.username);
        setShowFeed(true);
        setUserLoginPage(false);
        setUpdateForm(true);
    } catch (error) {
        // console.log(error);
        console.log("No token Found");
    }
}
export const updateUser = async (username, newUsername, newPassword, newEmail, setUser, setError, setUsername,user) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: user,
                newUsername: newUsername, 
                newEmail : newEmail,
                newPassword: newPassword
            }),
        }); 
        const data = await res.json();
        if(data.error) {
            setError(data.error);
            throw new Error(data.error);
        }else{
            console.log("Account Information Updated");
            // setUser(newUsername);
            // setUsername(newUsername); // this is input box field ...
            setError(data.message);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (username, setUser, setError, user) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            authorization: {},
            body: JSON.stringify({
                username: user,
            }),
        }); 
        const data = await res.json();
        setError(data.error);
        if(data.error) {
            setError(data.error);
            throw new Error(data.error);
        }else{
            localStorage.removeItem("myToken");
            setInterval(() => {
                window.location.reload();
            }, 300);
            setError(data.message);
        }
        
    } catch (error) {
        console.log(error);
    }
}




// const utilsFunctions = {fetchPics, createUser}
// export default utilsFunctions


