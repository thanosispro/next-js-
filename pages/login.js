import React from 'react'
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useGoogleLogin, google } from '@react-oauth/google';
import { GrLogin } from "react-icons/gr";
import $ from 'jquery'

const Login = (props) => {
  const router = useRouter()
  const {notify} = props
  // custom style
  const best_text = {
    'fontFamily': 'Inconsolata'
  }
  const best_text_label = {
    'fontFamily': 'Zilla Slab'
  }
  // login from google

  const googleLoginHandle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Success:', tokenResponse);
      try {
        const code = tokenResponse.code

        const client_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

        const client_secret = process.env.NEXT_PUBLIC_API_KEY;
        const redirect_uri = 'http://localhost:3000';
        const grant_type = 'authorization_code';
        const data = await fetch(`https://oauth2.googleapis.com/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            code,
            client_id,
            client_secret,
            redirect_uri,
            grant_type,
          }),
        })
        const response = await data.json()
        console.log(response)
        Cookies.remove('token')
        Cookies.set('token', JSON.stringify({
          'token': response.access_token, 'refresh': response.
            refresh_token
          , 'google': true
        }), { expires: 300, secure: true })
        window.location.href='/'

      } catch (error) {
        console.error('Error fetching user info', error);
      }
      // Handle the token response here
    },
    onError: (error) => {
      console.error('Error:', error);
      // Handle the error here
    },
    flow: 'auth-code',
  });

  // login from django backend
  const loginHandle = async (e) => {
    e.preventDefault()
    const password = $('#password').val()
    const email = $('#email').val()
    console.log(password,email)
    const data = { 'email': email, 'password': password }
    const response_django = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",

      }
    })
    const response = await response_django.json()
    console.log(response)
    if(response.access)
    {
      Cookies.remove('token')

      Cookies.set('token',JSON.stringify({'token':response.access}))
      window.location.href='/'
    }
    else{
      notify(0,'Invalid Credientials')
    }
   
  }
  return (

    <div className="relative flex h-full w-full">
      <div className="h-screen w-full lg:w-1/2 md:w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div>
            <p style={best_text} className="text-2xl">Login</p>
            <p className='italic' style={best_text_label}>please login to continue</p>
          </div>
          <div className="my-6">
            <button onClick={() => googleLoginHandle()} className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" className="mr-2 w-6 object-fill" />Sign in with Google</button>
          </div>
          <div>
            <fieldset className="border-t border-solid border-gray-600">
              <legend className="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
            </fieldset>
          </div>
          <div className="mt-10">
            <form onSubmit={loginHandle}>
              <div>
                <label className="mb-2.5 block best_label_system  " for="email">Email</label>
                <input type="email" id="email" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 border-2 focus:outline-none focus:border-2 focus:border-cyan-300  border-slate-100  bg-transparent" placeholder="mail@user.com" />
              </div>
              <div className="mt-4">
                <label className="mb-2.5 block best_label_system  " for="email">Password</label>
                <input type="password" id="password" className="inline-block w-full rounded-full  p-2.5 leading-none text-white placeholder-slate-400 shadow border-2 focus:outline-none  focus:border-cyan-300 bg-transparent" placeholder='password' />
              </div>
              <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">

                <div><input type="checkbox" id="remember" /><label for="remember" className="mx-2 text-sm">Remember me</label></div>
                

              </div>
              <div className='flex flex-col gap-4'>
              <label for="remember" className="mx-2 text-sm">Forgot Your Password? <Link href={'/forget'} className='text-cyan-400'>Reset Password</Link></label>
              <label for="remember" className="mx-2 text-md">Dont have account??? <Link href={'/signup'} className='text-cyan-400'>Signup</Link></label></div>
              <div className="my-5">
              
              
                <button className="w-full rounded-full bg-white justify-center items-center text-slate-800 p-2 flex flex-row gap-2 "><GrLogin className='text-black text-2xl ' />Login</button>
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

export default Login
