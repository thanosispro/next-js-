import React from 'react'
import Error from '@/components/error'
import { GrLogin } from 'react-icons/gr'
import { useRouter } from 'next/router'
import $ from 'jquery'
const Reset_password = (props) => {
    const router =  useRouter()
    console.log(props.is_token)
    const {notify}  =props
    const changePassword = async(e) =>{
        const token = router.query.token
        e.preventDefault()
        const password = $('#password').val()
        const cpassword = $('#cpassword').val()
        const body={
            password:password,cpassword:cpassword,token:token
        }
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/change_password/`,{
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json', // Ensure headers are set correctly
            },
        })
        const response = await data.json()
        if(response.value){notify(1,'Password has been changed');router.push('/login')}else{notify(0,'Password didnt match or small Password')}
    }
    if(!props.is_token)
    {
        
        return (<Error />)
    }
    return (

        <div className="relative flex h-full w-full">
          <div className="h-screen w-full lg:w-1/2 md:w-1/2 bg-black">
            <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
              
            <p className='text-pink-500 italic'>Let's Change Your password</p>
              
              <div className="mt-10">
                <form onSubmit={changePassword}>
                  <div>
                    <label className="mb-2.5 block best_label_system  " for="email">New Password</label>
                    <input type="password" id="password" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 border-2 focus:outline-none focus:border-2 focus:border-cyan-300  border-slate-100  bg-transparent" placeholder="New Password" />
                  </div>
                  <div>
                    <label className="mb-2.5 block best_label_system  " for="email">Confirm Password</label>
                    <input type="password" id="cpassword" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 border-2 focus:outline-none focus:border-2 focus:border-cyan-300  border-slate-100  bg-transparent" placeholder="Confirm Password" />
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

export default Reset_password

export async function getServerSideProps(context) {

    const token = context.query.token
    console.log(token)
    if(token)
    {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/change_password?token=${token}`)
        const response = await data.json()
        const final_result = response.value?true:false
        return {
            props:{is_token:final_result}
        }
    }
    else{
        return {
            props:{is_token:false}
        }
    }
    
  }