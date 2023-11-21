import React from 'react';
import Profile from './components/profile/Profile';
import Navbar from './components/NavBar/navbar';
import './App.css';
import BlogComponent from './components/BlogComponent/BlogComponent';
import LogoComponent from './components/LogoComponent/LogoComponent';
import blogData from './components/Data';


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Profile />
      <LogoComponent/>
      <BlogComponent blogData={blogData[0]} />
      <BlogComponent blogData={blogData[1]} />
      <BlogComponent blogData={blogData[0]} />
      <BlogComponent blogData={blogData[1]} />
    </div>
  );
};

export default App;