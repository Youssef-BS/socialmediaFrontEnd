import {useState} from 'react';
import "./login.css";

const Login = () => {
 
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [error , setError] = useState('');



const login = ()=>{
  if(email === "" || password === ""){
   setError("Please enter your email address and password") ; 
  }else {
    console.log(email, password);
  }
}


    return (
      <>
      <div className='flex flex-row h-96 w-3/5 text-center mt-44 m-auto justify-center items-center shadow-lg shadow-black-500/40'>
        <div className='w-1/2 h-full '>
        <img src='https://i.pinimg.com/736x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg' alt="Login" className='w-full h-full rounded-l' />
        </div>   
        <div className='flex flex-col box-border  w-1/2 p-4 bg-blue-300  text-center items-center h-full rounded-r'>
          <h3 className='text-3xl font-semibold text-blue-700 '>Login</h3>
          <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your email adress' />
          <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)} className='w-56 h-9 mt-8  placeholder:text-center' placeholder='Enter your password'/>
          <input type='button' value='Login' onClick={login} className='mt-8 bg-blue-500 p-3 w-32 cursor-pointer rounded' />
          <p className='text-blue-900 '>{error}</p>
          <p className='text-blue-700 mt-8 cursor-pointer font-semibold underline'>Register Here if don't have an account !</p>
        </div>
        
        </div>
      </>
    );
  };
  
  export default Login;