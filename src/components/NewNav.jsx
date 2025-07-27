import React from 'react'

const NewNav = () => {
  return (
    <nav className='bg-pink-600 flex justify-between px-10 py-2 items-center'>
      <div className='font-bold text-2xl'>
        &lt;
        PassOP
        &gt;
        </div>
      <div>
        <li className='flex gap-14 '>
          <a className='hover:text-white' href="/">Home</a>
          <a className='hover:text-white' href="/about">About</a>
          <a className='hover:text-white' href="/price">Price</a></li>
      </div>
    </nav>
  )
}

export default NewNav
