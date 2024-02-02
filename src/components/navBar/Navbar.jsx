import React  from 'react'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuIcon from '@mui/icons-material/Menu';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Navbar = () => {
 

const Logout = async (e)=>{
e.preventDefault();
localStorage.setItem('user',null);
window.location.reload(false);

 }
    return (
   <>
    <div className='navbar flex justify-around w-11/12 h-20 items-center bg-blue-300  mt-4 m-auto rounded-2xl'>
    <div className='flex  items-center'>
    <h1 className='font-semibold text-3xl cursor-pointer text-blue-700'>YsfConnect</h1>
    <input type='text' className='ml-2 rounded-full placeholder:text-center focus:p-2 w-46 h-12 items-center ' placeholder='sreach in YsfConnect'/>
    </div>
    <div className='flex cursor-pointer mr-4'>
    <p>
      <HomeIcon /><br />
      Home   
       </p>
       <p>
    <OndemandVideoIcon /><br />
      Videos</p>
    <p>
    <SportsEsportsIcon /><br />
      Games</p>
    </div>
    <div className='profile'>
    <p onClick={Logout}><MenuIcon /><br />
    Menu
    </p>
    </div>
  </div> 
   </>
  )
}

export default Navbar ;