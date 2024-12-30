import React, { useEffect, useState } from 'react'
import Login from './Login';
import { MdEmojiFlags } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const[theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");

  const element=document.documentElement;
  useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
      document.body.classList.add("dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light")
      document.body.classList.remove("dark")
    }
  },[theme]);


  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scroll > 0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  const navItems=(
    <>
    <li>
        <a href='/'>Home</a>
        </li>
        <li>
        <a href='/portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='/equityhub'>Equity Hub</a>
        </li>
        <li>
          <a href='/marketData'>Market Data</a>
        </li>
        <li>
          <a href='/listify'>Listify</a>
        </li>
        <li><a href='/News'>News</a></li>
        <li>
        <a href='/support'>Support</a>
        </li>
        <li>
        <a href='/offer'>offer</a>
        </li>
        <li>
        <a href='/faq'>faq</a>
        </li>
        <li>
        <a href='/plan'>plan</a>
        </li>
        
        <li>
        <a href='/About'>About</a>
        </li>
    </>
  )
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "id", name: "Indonesian" },
    { code: "zh", name: "Chinese" },
    { code: "es", name: "Spanish" },
    { code: "ko", name: "Korean" },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  
  return (

    <div className={`max-w-screen-2xl container mx-auto md:px-9 px-3 
    dark:bg-slate-800 dark:text-white
    fixed top-0 right-0 left-0 z-60 ${sticky?"sticky-navbar shadow-md bg-stone-200 duration-100 transition-all ease-in-out":"" }`}>
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-800 dark:text-white ">
      {navItems }
      </ul>
    </div>
    <a className="text-2xl">#CMD<span className='text-yellow-500'>A</span></a>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">
      {navItems}
    </ul>
  </div>
  <div>
  <label className="swap swap-rotate px-1">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="light"?"dark":"light")}
  >
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="light"?"dark":"light")}
    >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  </div>
  <div className='navbar-end px-1'>
    <a className="bg-slate-800  dark:bg-slate-900 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer " onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a>
    <Login/>
    
  </div>
  <div className="navbar-end px-1 text-black">
      <div className="relative">
        {/* Language Icon and Current Selection */}
        <div
          onClick={toggleDropdown}
          className="flex items-center gap-2 bg-slate-800 rounded-md px-3 py-2 cursor-pointer text-white dark:bg-slate-900 dark:text-white"
        >
          <IoLanguage className="text-xl" />
          <span>{selectedLanguage}</span>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <ul className="absolute left-0 mt-2 w-40 bg-slate-800 text-white rounded-lg shadow-md dark:bg-slate-900 z-10">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang.name)}
                className="px-4 py-2 hover:bg-slate-700 dark:hover:bg-slate-700 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MdEmojiFlags /> {lang.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    {/* <Hero/> */}
  <div className="avatar">
  <div className="mask mask-hexagon w-12">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default Navbar