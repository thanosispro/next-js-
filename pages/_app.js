import "@/styles/globals.css";
import '@/styles/navbar.css'
import Navbar from "@/components/navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import Loading from "@/components/loading";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [User, setUser] = useState(null)


  const notify = (success, msg) => {
    if (success) {
      toast.success(msg, { position: 'top-center', theme: 'dark', autoClose: 2000 })


    }
    else {
      console.log('hellow rold')
      toast.error(msg, { position: 'top-center', theme: 'dark', autoClose: 2000 })
    }
  }

  // validating the tokens and fetching the user
  useEffect(() => {
    
    if (Cookies.get('token')) {

      const cookie_data = JSON.parse(Cookies.get('token'))
      console.log(cookie_data)
      if (cookie_data.google) {
        fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${cookie_data.token}`).then((res) => res.json()).then((res) => {
          console.log(res)
          if(!res.error){
            res['google'] = true
          setUser(res)
          }
          
          setLoading(false)
        })
      }
      if (cookie_data.token) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/decode`, {
          headers: { Authorization: `Bearer ${cookie_data.token}` }
        }).then((val) => val.json()).then((res) => {
          if (res.user) {
            console.log(res)
            res.user['google'] = false
            setUser(res.user)
            
          }
        })
      }
    }
    else {
      setLoading(false)
    }
  }, [])

  // for react-loading bar
  useLayoutEffect(() => {
    if(User)
    {
      setLoading(false)
    }
    if (User && router.pathname == '/logi') {
      router.push('/')
    }
    router.events.on('routeChangeStart', () => { setProgress(45) })
    router.events.on('routeChangeComplete', () => { setProgress(100) })

  }, [router.pathname, User])


  if (loading) {
    return <Loading />
  }
  return <>



    <LoadingBar
      color='#fff'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>

      <Navbar User={User} />
      <ToastContainer />
      <Component {...pageProps} notify={notify} />
    </GoogleOAuthProvider>

  </>
    ;
}
