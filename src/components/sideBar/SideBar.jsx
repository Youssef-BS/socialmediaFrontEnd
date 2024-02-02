import react, { useContext }  from 'react'
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { AuthContext } from '../../context/AuthContext';
import "./sideBar.css";

const SideBar = () => {

const {user} = useContext(AuthContext);

console.log(user);

  return (
    <div className='sidebar bg-blue-300 w-3/12 rounded-xl p-5 '>
    <div className='list p-4 text-xl'>
        <div className='items-center flex p-1'><img src='https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/347264107_6205234729593516_5932924378855026005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FelnVrcjbyoAX_pE-Wq&_nc_ht=scontent.ftun16-1.fna&oh=00_AfD9VWLvMHeENINNtW7Y2HR3o4NK-CpAtdYey_i3ISlKBA&oe=65C2E989' alt='pdf' className='w-10 h-10 rounded-full mr-4'/><p>{user.username}</p></div>
        <div><GroupIcon /><p>Freinds</p></div>
        <div><GroupsIcon /><p>Groups</p></div>
        <div><OndemandVideoIcon /><p>Games</p></div>
    </div>
    <hr />
    <div className='groups overflow-y-scroll mt-8 h-1/2'>
       tes
    </div> 
    </div>
  );
}

export default SideBar