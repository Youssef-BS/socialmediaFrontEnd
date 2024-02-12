import React from 'react';
import Navbar from '../../components/navBar/Navbar';
import ContactBar from '../../components/connectBar/ContactBar';
import SideBar from "../../components/sideBar/SideBar";
import Container from '../../components/container/Container';
import "./home.css";


const Home = () => {
  return (
    <>
    <Navbar />
    <div className='container flex m-auto justify-between '>
    <SideBar />
    <Container />
    <ContactBar />
    </div>
    </>
    
  )
}

export default Home