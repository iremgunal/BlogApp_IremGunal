import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig'
import { auth } from '../../firebase/FirebaseConfig';
import './blog.css';
import { Card } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import NavBar from '../../components/navbar/NavBar';
import Layout from '../layout/Layout';



function Blog() {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, 'posts');
  const { user } = useSelector(state => state.auth)


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  })


  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc);
  }

  return (
    <div className='blogs'>
      <NavBar />   
      <Layout />
      <div className='blogPage' > {postLists.map((post) => {
        return <Card className='post shadow mt-5 mb-5 ' >
          <div className='postHeader'>
            <div className='title'>{post.title}</div>
            <img className='postImg' src='https://picsum.photos/id/234/600/300' />
          </div>
          <div className='deletePost'>
            {auth.currentUser && (<div onClick={() => { deletePost(post.id) }} ><AiFillDelete className='deleteBtn' /></div>
            )}
          </div>
          <div className='postTextContainer'>{post.postText}</div>
          <h3 className='authorInfo' > <img className='rounded-5 authorImg ' style={{ width: 50 }} src={user.photoURL} />  @{post.author.name}</h3>
        </Card>
      })}</div>
    </div>
  )
}

export default Blog