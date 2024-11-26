import React from 'react'
import { PiMouseMiddleClickFill } from "react-icons/pi";
import $ from 'jquery'
import { useRouter } from 'next/router';
const Signup = (props) => {
  const router = useRouter()
  const notify = props.notify
  const fetch_data = async(e)=>{
    e.preventDefault()
   

    const form = document.getElementById('form')
    const form_data = new FormData(form)
   

    

    const data=  await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/add_users/`,{
        method:'POST',
        body:form_data,
       
    })
    const res = await data.json()
    console.log(res)
    if(!res.value)
    {
      console.log(res.error,typeof(res.error))
      const errors = Object.values(res.error)[0][0]
      notify(0,errors)
      console.log(errors)
    }
    else{
      router.push('/login')
      notify(1,res.message)
    }
  }
    const best_text ={
        'fontFamily':'Inconsolata'
      }
  return (
    <div className="relative flex h-full w-full">
  <div className="h-screen w-full lg:w-1/2 md:w-1/2 bg-black">
    <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p style={best_text} className="text-2xl">Signup</p>
        
      </div>
     
      
      <div className="mt-10">
        <form id='form' onSubmit={fetch_data} enctype="multipart/form-data">
        <div>
            <label className="mb-2.5 block best_label_system  " for="email">Username</label>
            <input type="name" name='username' id="username" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 border-2 focus:outline-none focus:border-2 focus:border-cyan-300  border-slate-100  bg-transparent" placeholder="Your:Username" />
          </div>
          <div>
            <label className="mb-2.5 block best_label_system  " for="email">Email</label>
            <input type="email" id="email" name='email' className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 border-2 focus:outline-none focus:border-2 focus:border-cyan-300  border-slate-100  bg-transparent" placeholder="@gmail.com" />
          </div>
          <div className="mt-4">
            <label className="mb-2.5 block best_label_system  " for="email">Password</label>
            <input name='password' type="password" id="password" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 shadow border-2 focus:outline-none  focus:border-cyan-300 bg-transparent" placeholder='password' />
          </div>
          <div className="mt-4">
            <label className="mb-2.5 block best_label_system  " for="email">Confirm password</label>
            <input name='val_password' type="password" id="val_password" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 shadow border-2 focus:outline-none  focus:border-cyan-300 bg-transparent" placeholder='confirm password' />
          </div>
          <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
            
           
          <div class="font-[sans-serif] max-w-md mx-auto">
      <label class="text-base text-gray-100 font-semibold mb-2 block">Upload file</label>
      <input type="file" name="img" id='img_file' accept="image/*"
        class="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-300 file:hover:bg-gray-200 file:text-gray-500 rounded" />
      <p class="text-xs text-gray-50 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
    </div>
          
          </div>
          <div className="my-10">
            <button className="w-full rounded-full bg-white justify-center items-center text-slate-800 p-2 flex flex-row gap-2 "><PiMouseMiddleClickFill  className='text-black text-2xl ' />Signup</button>
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

export default Signup
