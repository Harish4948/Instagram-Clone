import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import {db,auth,storage} from './firebase';
// import db from './firebase';
function App() {
  const [posts,setPosts]=useState([
    {
      username:"deku",
      imageUrl:"http://www.iconfinder.com/icons/1174949/download/png/512",
      caption:"OneForAll"
  },
  {
    username:"Bakugo",
    imageUrl:"https://i.ytimg.com/vi/ivBIXG6b-44/hqdefault.jpg",
    caption:"Shineee!!"
  },
  {
    username:"All might",
    caption:"Watashi ga kita",
    imageUrl:"https://i.pinimg.com/originals/f7/03/2a/f7032afa1e12feb7baa2109b7eb0a692.jpg"
  }
]);
useEffect(() => {
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=> doc.data()));

    })
  }
, []);
  return (
    <div className="app">

      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"

        />
      </div>
      <h1>HELLO</h1>
      {
        posts.map(post=>(
          <Post username={post.username} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }

    </div>
  );
}

export default App;
