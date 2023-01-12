import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from './pages/home/Home';
import { useState } from "react";
import { AppContext } from './context/AppContext';
import Register from './pages/register/Register';
import Login from "./pages/login/Login";
import  UserProfile  from "./pages/userProfile/UserProfile";
import AboutMe from "./pages/aboutMe/AboutMe";
import CreatePost from "./pages/createPost/CreatePost";
import NavBar from "./components/navbar/NavBar";
import Blog from "./pages/blogs/Blog";
import { Col, Row } from "react-bootstrap";
import MyWorks from "./pages/myWorks/MyWorks";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isAuth, setIsAuth] = useState(false);
  return (

    <AppContext.Provider value={{email , setEmail, password, setPassword}}>
      <BrowserRouter>    

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/${user.displayName}' element={<UserProfile />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/mywork' element={<MyWorks />} />

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>


  );
}

export default App;
