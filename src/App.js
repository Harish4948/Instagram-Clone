import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import {db,auth,storage} from './firebase';
import { Modal, makeStyles, Button,Input } from '@material-ui/core';
// import db from './firebase';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [posts,setPosts]=useState([]);
  const [open,setOpen]=useState(false);
  const [openSignIn,setOpenSignIn]=useState(false);
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [user,setUser]=useState(null);
  
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((authUser)=>{
      setOpenSignIn(false);
    }).catch((error)=>alert(error.message));
  };

  const signUp=(e)=>{
    e.preventDefault();
    
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
      setOpen(false);
      return authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((error)=>alert(error.message));
  };

  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((authUser) => {
      if(authUser)
      {
          console.log(authUser);
          setUser(authUser);
      }
      else{
          setUser(null);
      }

    })
    return ()=>{
        unsubscribe();
    }
  }, [user,username]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=> ({id:doc.id,post:doc.data()})));
    });
  }
, []);

  return (
    <div className="app">
        <Modal
        open={open}
        onClose={()=>setOpen(false)}
        >
        <div style={modalStyle} className={classes.paper}>
        <center>
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />  
        </center>
        <form className="app__signup">
          <Input 
          placeholder="email"
          type="text"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
          
          <Input 
          placeholder="username"
          type="text"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          />
          
          <Input 
          placeholder="password"
          type="text"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
          <Button
          type="Submit"
          onClick={signUp}
          >Sign Up</Button>
        </form>
            </div>
      </Modal>

{/* Sign in Modal */}
<Modal
        open={openSignIn}
        onClose={()=>setOpenSignIn(false)}
        >
        <div style={modalStyle} className={classes.paper}>
        <center>
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />  
        </center>
        <form className="app__signup">
          <Input 
          placeholder="email"
          type="text"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
          
          <Input 
          placeholder="password"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
          <Button
          type="Submit"
          onClick={signIn}
          >Sign In</Button>
        </form>
            </div>
      </Modal>





      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />
      </div>
      {user ? (<Button onClick={(e)=> auth.signOut() }>Logout</Button>)
      :(
        <div>
      <Button onClick={(e)=>setOpenSignIn(true) }>Sign in</Button>          
      <Button onClick={(e)=>setOpen(true) }>Sign up</Button>
      </div>
      )}

      <h1>HELLO</h1>
      {
        posts.map(({id,post})=>(
          <Post key={id} username={post.username} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }

    </div>
  );
}

export default App;
