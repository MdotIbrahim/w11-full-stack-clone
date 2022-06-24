import { useState } from "react";
// import styled from "styled-components"
// import heart_0 from "../../images/heart_0.png";
// import heart_1 from "../../images/heart_1.png";


export const Feed = (props) => {
    
    return (
    <>
    {props.randPicArr.map((item, index) => {
        return (
        <div key={index}>
        
        <FeedInfo index={index} author={item.author} picture={item.download_url}/>

        </div>
        )
    })}
    </>
    )
}

export const FeedInfo = ({index, author, picture}) => {
    const [likes, setLikes] = useState(0); // array destructuring - pulling out value from array.
    const [userLike, SetUserLike] = useState(false);
    const [showHeart, setShowHeart] = useState(0);
    const likeHandler = () => {
        if (userLike !== true){
            SetUserLike(true)
            setLikes(likes + 1)
            setShowHeart(true)
        }else{
            SetUserLike(false)
            setLikes(likes - 1)
            setShowHeart(false)
        }
    }


    return (
        <>
        <div key={index}>
        <h3>{author}</h3>
        <img src = {picture} alt="" width="400px" height="250px"/>
        {/* <img src = {heart_0.png} alt="" width="200px" height="150px"/>
        <img src = {heart_1.png} alt="" width="400px" height="250px"/> */}
        <h1 className="heart" onClick={() => likeHandler()}>{likes}</h1>
        {showHeart ? <h1 className="heart" onClick={() => likeHandler()}>♥</h1> : <h1 className="heart" onClick={() => likeHandler()}>♡</h1> }
        {/* <button  onClick={() => likeHandler()}>Heart</button> */}
        </div>
        </>
    )
}

export default Feed;