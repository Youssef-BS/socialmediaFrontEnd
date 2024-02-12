import React , {useState} from 'react'
import { users } from '../../data';
import "./container.css";

const Container = () => {
  const [comments , setComments] = useState(false);

  return (
    <div className='w-2/4 m-auto mt-[81px]'>
      {
        users.map((user ,i) => (
          <div className='post w-5/6 m-auto mt-8 h-full rounded-md p-8 ' key={i}>
          <div className='profile flex items-center'>
           <img src={user.image} alt="" className='rounded-full h-[50px] w-[50px]' /> 
           <p className='ml-3'>{user.userName}</p>
          </div>
           <div className='post mt-7'>
            <p>
              {user.posts.description}
            </p>
            <img src={user.posts.image} alt="" className='rounded-sm mt-2' />
           </div>
           <div className='communication flex justify-between p-[3px]'>
            <div><p>Like</p></div>
            <div><p>Comment</p></div>
            <div><p>Share</p></div>
           </div>
        
          { !comments  &&  <p className='cursor-pointer transition-[0.5s] hover:text-blue-400 text-center p-3 bg-blue-200 rounded-md' onClick={()=> setComments((e)=>!e)}>See comments</p> }
        
           {comments && 

           <div className='seeComments'>
            {user.Comment.map((comment , i)=>(
            <>
            {i>0 ? 
              <div className='block items-center p-2 bg-blue-200 my-[12px] rounded-md ' key={i} >
             <div className='profile flex items-center p-2  text-center '>
              <img src={comment.photo} alt="pdf" className='rounded-[100%] w-[40px] h-[40px] mr-[8px]' />
              <p>{comment.name} </p>
             </div>
              <p className='descriptionComment'>
              {comment.comment}
             </p>
             </div> 
             : "No comment"
            }
           </>
            ))}
           </div>
           }
          </div>
        ))

      }
            
    </div>
     
  );
}

export default Container ; 