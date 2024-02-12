import  { useContext }  from 'react'
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { AuthContext } from '../../context/AuthContext';
import "./sideBar.css";

const SideBar = () => {

const {user} = useContext(AuthContext);

console.log(user);

  return (
    <div className='sidebar bg-blue-300 rounded-md p-5  w-3/12'>
    <div className='list p-4 text-xl'>
        <div className='items-center flex p-3'><img src='https://www.shutterstock.com/image-vector/anime-girl-befriending-mystical-creature-600nw-2324354947.jpg' alt='pdf' className='w-10 h-10 rounded-full mr-4'/><p>{user.username}</p></div>
        <div><GroupIcon /><p>Freinds</p></div>
        <div><GroupsIcon /><p>Groups</p></div>
        <div><OndemandVideoIcon /><p>Games</p></div>
    </div>
    <hr />
    <div className='groups overflow-y-scroll mt-8 h-1/2'>
      <p className='text-[12px]'>Test Test test test test test test test test test test test test </p>
    </div> 
    </div>
  );
}

export default SideBar ;