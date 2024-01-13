import {useState , useContext} from 'react';
import "./auth.css";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

const Auth = () => {
 
const [username , setUserName] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [success , setSuccess] = useState('');
const [register , setRegister] = useState(false);

const { loading, error, dispatch } = useContext(AuthContext);

const Url = "http://localhost:4000/api/users/";


//register function

const registerUser = async ()=>{
  try {

   await axios.post(Url+"/register",{
      username: username,
      email: email,
      password: password
    })

  setSuccess("Register successfully");
  setEmail('');
  setPassword('');
  setUserName('');
 
}catch(error){
  console.log(error.message);
}
  
}


//Login function

const login = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(Url+"/login", {
    email : email ,
    password : password
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.userConnect });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  }
};


const registerMod=()=>{
  setRegister(!register);
}

    return (
      <>
      <div className='flex flex-row h-96 w-3/5 text-center mt-44 m-auto justify-center items-center shadow-lg shadow-black-500/40'>
        <div className='w-1/2 h-full '>
        <img src='https://i.pinimg.com/736x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg' alt="Login" className='w-full h-full rounded-l' />
        </div>   
        <div className='flex flex-col box-border  w-1/2 p-4 bg-blue-300  text-center items-center h-full rounded-r'>
          {
            register ? 
            <>
            <h3 className='text-3xl font-semibold text-blue-700 '>Register</h3>
            <input type="text" name="username" value={username} onChange={(e)=> setUserName(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your username' />
            <input type="text" name="email"value={email} onChange={(e)=> setEmail(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your email adress'  />
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your password' />
            <input type='button' value='Register' className='mt-8 bg-blue-500 p-3 w-32 cursor-pointer rounded' onClick={registerUser} />
            {success}
            <p className='text-blue-700 mt-8 cursor-pointer font-semibold underline' onClick={registerMod}>Login Here if you have an account !</p>
            </> : (
              <>
          <h3 className='text-3xl font-semibold text-blue-700 '>Login</h3>
          <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your email adress' />
          <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your password'/>
          <input type='button' value='Login' onClick={login} className='mt-8 bg-blue-500 p-3 w-32 cursor-pointer rounded' disabled={loading} />
          <p className='text-blue-900 '>{error}</p>
          <p className='text-blue-700 mt-8 cursor-pointer font-semibold underline' onClick={registerMod}>Register Here if don't have an account !</p>
          </>
            )
          }
          
          {/* <input type='button' value='logout' onClick={handleLogout} className='mt-8 bg-blue-500 p-3 w-32 cursor-pointer rounded' /> */}
        </div>
        
        </div>
      </>
    );
  };
  
  export default Auth;