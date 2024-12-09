import React from 'react';
import backgroundImage from '../assets/SingUpBg.png';
import { FaArrowLeft } from 'react-icons/fa';

const SignUpPage = () => {
  return (
    <div className='flex h-screen bg-cover bg-center'
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >

    <div className='flex flex-row bg-primary-1 rounded-lg my-auto mx-auto  w-[68vw] sm:w-[68vw] md:w-[60vw] h-[80vh] sm:h-[70vh] md:h-[80vh]'>
      <div className='relative w-full'>
        <button className='flex items-center absolute top-[10%] sm:top-[42px] left-[5%] sm:left-[30px] z-10 justify-center gap-2 w-[35%] sm:w-[15%] md:w-[25%]] p-2 ml-[5%] sm:ml-[20px] border border-white text-white rounded-full'>
          <span><FaArrowLeft size={20} /></span>Go back</button>
        <img src='src\assets\SignUpImg.png' className='w-[90%] md:w-[500px] object-cover my-6 ml-[5%] sm:ml-10'></img>
      </div>

      <div className='flex flex-col m-4'>
        <div className='flex flex-row gap-x-4'>
        <div class="flex flex-col">
          <label for="first-name" class="text-white text-sm mb-1">First Name</label>
          <input type="text" id="first-name" class="bg-gray-800 text-white border border-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John"/>
        </div>

        <div class="flex flex-col">
          <label for="first-name" class="text-white text-sm mb-1">Last Name</label>
          <input type="text" id="last-name" class="bg-gray-800 text-white border border-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John"/>
        </div>
        </div>

        <div className='flex flex-row gap-x-4'>
        <div class="flex flex-col">
          <label for="first-name" class="text-white text-sm mb-1">Username</label>
          <input type="text" id="first-name" class="bg-gray-800 text-white border border-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John"/>
        </div>

        <div class="flex flex-col">
        <label htmlFor="role" className="text-white text-sm mb-1">Role</label>
        <select
          id="role"
          className="w-[12.1rem] bg-gray-800 text-white border border-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        </div>
        </div>

      </div>
    </div>


    </div>
  )
}

export default SignUpPage