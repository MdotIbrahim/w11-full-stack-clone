import {useState} from "react";
import { updateUser, deleteUser, logOutUser } from "../../utils";

export const Update = ({username, updateForm, setUpdateForm, setUser, setError, setUsername, user}) => { //dont need to use prop. if you desconstruct within parameter
    const [newUsername, setNewUsername] = useState();
    const [newPassword, setNewPassword] = useState();
    const [newEmail, setNewEmail] = useState();

    const submitHandler = (e) => {
        e.preventDefault(); //prevent page from reloading
        updateUser(username, newUsername, newPassword, newEmail, setUser, setError, setUsername, user);
    }
    // deleting is "updating" an account
    const deleteHandler = () => {
        deleteUser(username, setUser, setError, user);
    }

    const logOutHandler = () => {
        localStorage.removeItem("myToken");
        window.location.reload();
    }
    return (
        <>
        {/* <p>Comment icon: <span class="glyphicon glyphicon-comment"></span></p>  */}
        {updateForm ? <><div className="container">
        <form onSubmit={submitHandler} className="box">
            <h3>Update Account information</h3>
            <p>New Username</p>
            <input onChange ={ (e) => {setNewUsername(e.target.value)}}/>
            <p>New Email</p>
            <input onChange ={ (e) => {setNewEmail(e.target.value)}}/>
            <p>New Password</p>
            <input type="password" onChange ={ (e) => {setNewPassword(e.target.value)}}/>
            <button type="submit">Update Account</button>
        </form>
        </div>
        <button className="delete-btn" onClick={deleteHandler}>Delete Account</button>
        <button className="logout-btn" onClick={logOutHandler}>Log Out</button></> : <></>}
        
        
        </>
    )
}

export default Update;