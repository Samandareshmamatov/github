import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Followers from './pages/followers/Followers';
import Following from './pages/following/Following';
import Overview from './pages/overview/Overview';
import Packages from './pages/packages/Packages';
import Projects from './pages/projects/Projects';
import Repositories from './pages/repositories/Repositoreies';
import Stars from './pages/stars/Stars';
import { notFound } from './assets';
import Home from './pages/Home/Home';

const App = () => {

  console.log(window.location.pathname);
  return (
    <Routes>
      <Route path='/inner' element={<MainLayout />} >
        <Route index element={ <Overview />} />
        <Route path='repositories' element={ <Repositories />} />
        <Route path='stars' element={ <Stars />} />
        <Route path='projects' element={ <Projects />} />
        <Route path='packages' element={ <Packages />} />
        <Route path='followers' element={ <Followers />} />
        <Route path='following' element={ <Following />} />
      </Route>
      <Route path='/' element={<Home />} />
      <Route path='*' element={
      <div>
        <h2 style={{color:"white", margin: "40px"}}>Page is not defined... 😕</h2>
        <img style={{ width:"100%", marginBottom: "50px"}} src={notFound} alt="not found" />
        <Link to={"/"} className="home-right-btn" style={{marginLeft: "80px", width:"250px"}}>GO HOME PAGE</Link>
      </div>
      }></Route>

    </Routes>
  )
}

export default App;