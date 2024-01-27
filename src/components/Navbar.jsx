import React  from 'react'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
 
const navigate = useNavigate();

const Logout =async (e)=>{
e.preventDefault();
localStorage.setItem('user',null);
window.location.reload(false);

 }
    return (
   <>
  <div className='navbar flex justify-between w-9/12 h-20 items-center bg-blue-300 m-auto mt-4 rounded-2xl'>
    <h1 className='font-semibold text-3xl cursor-pointer text-blue-700 ml-4'>YsfConnect</h1>
    <div className='flex cursor-pointer mr-4'>
    <p>
      <HomeIcon /><br />
      Home   
       </p>
    <p>
    <EmailIcon /><br />
      Messanger</p>
    <p>
    <PeopleIcon /><br />
      Friends</p>
    <p onClick={Logout}><MenuIcon /><br />
    Menu
    </p>
    </div>
  </div> 
   </>
  )
}

export default Navbar