import ClipLoader from "react-spinners/ClipLoader";
import React, { useEffect, useMemo, useState,useRef } from 'react'
import { GiNinjaStar } from "react-icons/gi";
import Link from 'next/link'
import { useRouter } from "next/router";
import $ from 'jquery'
export default function Games(props){
  const [games,setGames] =  useState([])
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [pagination,setPagination] = useState(null)
  const query = useRef(null)
  useEffect(()=>{
    query.current = router.query.query
    query.current = query.current?query.current:''
    console.log(props.response)
    setGames(props.response.results)
    router.replace(router.asPath);
    console.log(query)
    setPagination(props.response)
  },[router.query.page,router.query.query])

  const fetchGames = async(e)=>{
    e.preventDefault()
    const q = $('#searchGames').val()
    router.push(`/games?query=${q}`)

    }
    
  

  


  
  return (

    <section className="text-gray-600 body-font w-4/5 mx-auto">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="text-2xl font-medium title-font mb-4 text-cyan-300 tracking-widest">KrypZame</h1>
    
      <form onSubmit={fetchGames}>
      <div className="flex rounded-full bg-[#0d1829] px-2 w-full]">
      <button className="self-center flex p-1 cursor-pointer bg-[#0d1829]"> <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z" stroke="#ff5c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z" stroke="#ff5c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z" fill="#ff5c5c"/> </g>

</svg></button>
    
        <input id='searchGames' 
          type="text"
          className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
          placeholder="Search name movie or select options"
        />
        <button type="submit" className="relative p-2 bg-[#0d1829] rounded-full">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
          
<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg>
        </button>
       
      </div>
      </form>
    </div> 

    <ClipLoader className="text-center"
        color={'#fff'}
        loading={loading}
        
        size={50}
        aria-label="CircleLoader"
        data-testid="loader"
      />
      {games.length&&<p className="text-pink-500 italic text-md tracking-wider">Total results:{games.length}</p>}

    <div className="flex flex-wrap -m-4">
     
     
      {games.length && games.map((elm,index)=>
      <Link href={`/gameEach/${elm.id}`} key={index}  className="p-4  lg:w-1/2">
    
      <div  className="cursor-pointer games_card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left py-2 rounded-xl">
          <img alt="team" className="class_i flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"  src={`${elm.image}`} />
          <div className="flex-grow sm:pl-8">
            <h2 className="card_text title-font font-medium text-lg text-sky-500">{elm.title}</h2>
            <p className="text-slate-400 text-sm mb-3 italic">{elm.date}</p>
            <p className="mb-4 text-slate-300">{elm.description.substring(0,90)}</p>
            
            <p className='justify-center md:justify-start text-pretty text-pink-600 flex flex-row gap-2'><GiNinjaStar className='text-cyan-300 text-2xl' />{elm.uploaded_by} </p> 
            <p className='text-slate-300 label_text my-2'>Category:<font className='italic text-pink-600'>{elm.category}</font></p>
            <span className="inline-flex my-4">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        </Link>)

      }
        
      
    </div>
  </div>
  {pagination && <div class="justify-center flex flex-row gap-2">
    
{pagination.previous?<Link  href={pagination.previous?pagination.previous.replace('http://127.0.0.1:8000/api/get_games/',`/games`):'/'}  class="bg-white rounded-md border  py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800  active:text-white  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
      Prev
  </Link>:<button  disabled={true}  class="bg-white rounded-md border  py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
      Prev
  </button>}
   {pagination && Array.from({ length: pagination.total_pages }, (_, index) => index + 1).map((elm,index)=>
    <Link key={index} href={`/games?page=${elm}${query.current?`&query=${query.current}`:''}`}   class="bg-white min-w-9 rounded-md border  py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
   {elm}
</Link>)}
  {pagination.next?<Link href={pagination.next?pagination.next.replace('http://127.0.0.1:8000/api/get_games/',`/games`):'/'}  disabled={pagination.next?false:true} class="bg-white min-w-9 rounded-md border  py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
      Next
  </Link>:<button   disabled={true} class="bg-white min-w-9 rounded-md border  py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
      Next
  </button>}
</div>}
</section>
  )
}






export async function getServerSideProps(context) {

  const is_page = context.query.page

  let query = context.query.query

  let page
  if(is_page){page=is_page}else{page=1}
  if(!query){query = ''}
  const data = await  fetch(`http://127.0.0.1:8000/api/get_games/?page=${page}&query=${query}`)
  console.log(is_page,page)
  const response = await data.json()
  return {
      props: {response}
  }
}