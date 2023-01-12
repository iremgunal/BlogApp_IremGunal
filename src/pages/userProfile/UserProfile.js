import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import UpdateProfile from '../../components/updateProfile/UpdateProfile';
import Layout from '../layout/Layout';

export default function UserProfile() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)


  if (user) {
    return (
      <>
        <NavBar />
        <Layout />

        <UpdateProfile />
      </>

    )
  }

}
