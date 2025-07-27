import React from 'react'

const Manager = () => {
    return (
        <>

            <div class="min-h-screen  bg-gradient-to-br from-pink-100 via-pink-300 to-pink-500 conrainer px-40">
                <h1 className='text-4xl font-bold text-center'>PassOP</h1>
                <p className='text-lg text-center'>Your own Password Manager</p>
                <div className='text-white flex flex-col p-4 gap-3 max-w-4xl mx-auto'>
                    <input className='rounded-full bg-white border border-pink-500 text-black p-4 py-1' placeholder='url' type="text" name="" id="" />
                    <div className='flex w-full justify-between gap-8 '>
                        <input className='rounded-full border border-pink-500 bg-white w-full text-black p-4 py-1' placeholder='password' type="text" name="" id="" />
                        <input className='rounded-full  bg-white border border-pink-500 w-full text-black p-4 py-1' placeholder='xyz' type="text" name="" id="" />
                    </div>
                </div>
            </div>



        </>

    )
}

export default Manager
