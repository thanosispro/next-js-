import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import { MdStarRate } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { FaUsersViewfinder } from "react-icons/fa6";

export default function Page() {
  const [mainData,setMainData] =  useState(null)
  const router = useRouter()
  const style_head = {
    fontFamily:'Karla'
  }
  const style_comment ={
    fontFamily:'Cabin'
  }
  const style_cat = {
    fontFamily:'Quicksand'
  }
  useEffect(()=>{
    const id = router.query.gameEach
    if(id)
    {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_one?id=${id}`).then((val)=>val.json()).then((response)=>{
      console.log(response)
      console.log(response)
      setMainData(response)
     })
    }

  },[router])
  const increaseDownload = () =>{
    const id = router.query.gameEach
    const data = {id:id}
    console.log(data)
    if(id)
    {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/increase_download/`,{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }

      }).then((val)=>val.json()).then((res)=>{
        console.log(res)
      })
    }
  }



  return  mainData&& <section className="text-gray-600 body-font mx-auto w-4/5">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={`${process.env.NEXT_PUBLIC_API_URL+mainData.image}`} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-300" style={style_head}>{mainData.title}
        
      </h1>
      <p className='flex flex-row gap-1'>
      <MdStarRate className='text-pink-500 text-2xl'  />
      <MdStarRate className='text-pink-500 text-2xl'  />
      <MdStarRate className='text-pink-500 text-2xl'  />
      <MdStarRate className='text-pink-500 text-2xl'  />

      </p>
      
      <p className="mb-8 leading-relaxed my-2">{mainData.description}</p>
      <p className=' text-slate-200 text-2xl' style={style_cat}>Category: {mainData.category}</p>
      <div className="flex justify-center my-2">
       
        <a href={mainData.url} onClick={increaseDownload}  download><button  className='download_button flex flex-row gap-2' sec>DOWNLOAD <MdOutlineFileDownload className='text-white text-2xl' /></button></a>
        
      </div>
      
    </div>
    
  </div>
  {/* comment section */}
  <div className="comments flex flex-row gap-10  mx-auto justify-center">
  <div className="downloads flex flex-col items-center">
<PiDownloadSimple className='text-4xl text-cyan-300'  />
<p className='comments text-white' style={style_comment}>{mainData.downloads}</p>
  </div>
  <div className="downloads flex flex-col items-center">
<FaUsersViewfinder className='text-4xl text-cyan-300'  />
<p className="comments text-white" style={style_comment}>{mainData.views}</p>
  </div>
 </div>
</section>
}