import React from 'react'
import { users } from '../../data';

const Container = () => {
  return (
    <div className='bg-blue-200 w-2/4 '>
      {
        users.map(user => (
          <div className='post w-3/4 bg-slate-500 h-1/2 m-auto mt-8 h-full rounded-md p-8 flex- '>
          <div className='profile flex items-center'>
           <img src={user.image} alt="" className='rounded-full h-[50px] w-[50px]' /> 
           <p className='ml-3'>{user.userName}</p>
          </div>
           <div className='post'>
            <p>
              {user.posts.description}
            </p>
            <img src={user.posts.image} alt="" className='rounded-sm' />
           </div>
          </div>
        ))

      }
    </div>
  );
}

export default Container