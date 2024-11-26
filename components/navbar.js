import React from 'react'
import Image from 'next/image'
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import Link from 'next/link';
import { RiLogoutBoxRFill } from "react-icons/ri";
import Cookies from 'js-cookie';

const Navbar = (props) => {
  const {User}  = props
  
  const toggleSideBar=() =>{
    const classes = ['-translate-x-full','translate-x-0']
    const sidebar = document.getElementById('sidebar')
    if(sidebar.classList.contains('-translate-x-full'))
    {
      sidebar.classList.remove(classes[0])
      sidebar.classList.add(classes[1])
    }
    else{
      sidebar.classList.remove(classes[1])
      sidebar.classList.add(classes[0])
    }
  }
  const handleLogout = () =>{
    Cookies.remove('token')
    window.location.href='/'
  }
  return (
    <>
    {/* Nav bar but for large screen  */}
      <nav id='navbar' className='overflow-hidden flex flex-row lg:flex-row md:flex-row lg:gap-20 md:gap-20 h-10  lg:items-center md:items-center items-center   px-10 '>
        <div className="">
          <Image src={'/logo.jpg'} width={50} height={50} />
        </div>
        <ul className='hidden lg:flex md:flex flex-row gap-5 lg:gap-10 '>
          <Link href={'/'}><li className='flex flex-row items-center gap-2'><FaHome />Home</li></Link>
          <Link href={'/games'}><li className='flex flex-row items-center gap-2'><IoIosContact />Games</li></Link>
          <Link href={'/about'}><li className='flex flex-row items-center gap-2'><CgGames />About</li></Link>
          <Link href={'/chat'}><li className='flex flex-row items-center gap-2'><MdOutlineRoundaboutRight />Global Chat</li></Link>
          
        </ul>
        <div id='gamesz' className='lg:hidden md:hidden text-center text-white flex-grow'>
          GamesZ
        </div>

        {User?<img src={User.google?User.picture:`${process.env.NEXT_PUBLIC_API_URL}${User.img}`} width={40} height={40} className='hidden lg:flex md:flex absolute top-1 border-2 rounded-full h-9 w-9 border-slate-400 right-5 rounded-full' />:<Link href={'/login'}><FaUserCircle className=' absolute right-20 top-2 rounded-full border-2 border-slate-400 hidden lg:flex md:flex text-white text-4xl' /></Link>
        }

        {User && <p onClick={handleLogout}  className='logout hidden lg:flex md:flex text-white absolute right-20 cursor-pointer flex-row gap-2'><RiLogoutBoxRFill className='text-2xl text-white' />Logout</p>}
        <AiOutlineMenu className='absolute right-20 top-2 lg:hidden md:hidden text-white text-4xl' onClick={toggleSideBar} />


      </nav>
    {/* {side Bar for logout} */}
    

      {/* Toogle bar just for small screens same as nabvbar */}
      <div id='sidebar' className="z-50 lg:hidden -translate-x-full  transition-all duration-300 p-10 h-full w-6/12 md:5/12 rounded-lg top-0 bg-black shadow-lg shadow-slate-300 absolute ">
        <TfiClose className='text-white text-4xl absolute top-2 right-2' onClick={toggleSideBar} />
        <ul className='flex flex-col gap-5 '>
        <Link href={'/'}><li className='flex flex-row items-center gap-2'><FaHome />Home</li></Link>
        <Link href={'/games'}><li className='flex flex-row items-center gap-2'><IoIosContact />Games</li></Link>
        <Link href={'/about'}><li className='flex flex-row items-center gap-2'><CgGames />About</li></Link>
        <Link href={'/chat'}><li className='flex flex-row items-center gap-2'><MdOutlineRoundaboutRight />Global Chat</li></Link>
        <li>
        {User?<img src={User.google?User.picture:`${process.env.NEXT_PUBLIC_API_URL}${User.img}`} width={40} height={40} className='rounded-full border-2 rounded-full h-9 w-9' />:       <Link href={'/login'}> <FaUserCircle className=' text-slate-50 text-2xl' /></Link>
        }
        </li>
        <li>
        {User && <p onClick={handleLogout}  className='logout text-white cursor-pointer flex flex-row gap-2'><RiLogoutBoxRFill className='text-2xl text-white' />Logout</p>}
        </li>
        </ul>

      </div>
    </>
  )
}

export default Navbar
