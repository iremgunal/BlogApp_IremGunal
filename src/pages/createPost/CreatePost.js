import React, { useEffect, useState } from 'react'
import './createPost.css'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth, storage } from '../../firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavBar from '../../components/navbar/NavBar'

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");



  const postsCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, { title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } })
    navigate('/');
  };

  useEffect(() => {
    if (!auth.currentUser)
      navigate('/login')
  }, [])

 

  return (
    <div className='createPost'>
      <NavBar />
      <Layout />
      <div className='createPostPage' >
        <div className="cpContainer card shadow">
          <h1>Create A Post</h1>
          <div className="inputGp">
            <label>Title </label>
            <input className='inputSize' placeholder='Title...' onChange={(e) => { setTitle(e.target.value) }} />
          </div>
         
          <div className="inputGp">
            <label>Post </label>
            <textarea className='inputSizePost' placeholder='Post...' onChange={(e) => { setPostText(e.target.value) }} />
          </div>
          <button className='submitPost' onClick={createPost} >Submit Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost