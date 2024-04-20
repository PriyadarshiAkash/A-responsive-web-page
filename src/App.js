
import React from 'react'

const App = () => {
  return (
  <>
<div className='bg-black grid place-content-center h-screen'>
  <div>
      <h1 className='text-white text-4xl m-6'>Test</h1>
  </div>

    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
      <div>
        <img className='h-12 w-12' src='https://static.vecteezy.com/system/resources/previews/004/753/002/original/custom-coding-icon-shadowed-detailed-custom-coding-logo-free-vector.jpg' alt=''/>
      </div>

      <div className>
        <div className='text-2xl font-medium text-black'>
          Tailwind CSS
          <p className='text-slate-500 text-base'>By Akash Priyadarshi </p>
        </div>
      </div>
    </div>
    <button className='bg-sky-500 text-center mt-2 rounded-xl text-white text-base p-2 hover:bg-white hover:text-black'>Buy Now</button>
    <div className='text-center my-4'>
      <p className='text-white sm:text-red-600 md:text-green-600'>Lorem, Ipsum dolor</p>
    </div>

    <div className='mt-3'>
      <div className='bg-white max-w-sm mx-auto rounded-xl overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div>
            <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>An Awesome Card</div>
            <a className='block mt-1 text-lg font-medium text-black hover:text-blue-700' href="#">Tailwind CSS is Amazing once you understand the <span className='bg-red-500 rounded-md p[188px]'>power</span> of it</a>
            <p className='mt-2 text-slate-700'>Lorem Ipsum luna is lorem ipsum give</p>
          </div>
        </div>
      </div>

    </div>
</div>
    </>
)}

export default App