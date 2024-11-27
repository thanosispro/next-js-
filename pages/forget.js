import React from 'react'
import Link from 'next/link';
import { GrLogin } from 'react-icons/gr';
import { useRouter } from 'next/router';

import $ from 'jquery'

const Forget = (props) => {
    const {notify} = props
  const router = useRouter()
  // custom style
  const best_text = {
    'fontFamily': 'Inconsolata'
  }
  const best_text_label = {
    'fontFamily': 'Zilla Slab'
  }

  const reset_password = async(e) =>{
    e.preventDefault()
    const email = $('#email').val()
    const fetch_data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reset_password/`,{
        method:'POST',
        body:JSON.stringify({email:email}),
        headers: {
            'Content-Type': 'application/json', // Ensure headers are set correctly
        },

    })
    const response = await fetch_data.json()
    if(response.value){notify(1,'Email has been sent')}else{notify(0,'No active account found')}

  }
  // login from google

  // login from django backend

  return (

    <div className="relative flex h-full w-full">
      <div className="h-screen w-full lg:w-1/2 md:w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          
        <p className='text-pink-500 italic'>Lets Reset your password using Email</p>
          
          <div className="mt-10">
            <form onSubmit={reset_password}>
              <div>
                <label className="mb-2.5 block best_label_system  " for="email">Email</label>
                <input type="email" id="email" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 border-2 focus:outline-none focus:border-2 focus:border-cyan-300  border-slate-100  bg-transparent" placeholder="mail@user.com" />
              </div>
           
              
              
              <div className="my-10">
                <button className="w-full rounded-full bg-white justify-center items-center text-slate-800 p-2 flex flex-row gap-2 "><GrLogin className='text-black text-2xl ' />Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex md:flex h-screen w-1/2 bg-blue-600">
        <img src="https://png.pngtree.com/background/20230611/original/pngtree-two-black-vr-headsets-on-a-dark-background-picture-image_3170697.jpg" className="h-full w-full" />
      </div>
    </div>

  )
}

export default Forget
