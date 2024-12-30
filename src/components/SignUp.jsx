import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Login from './Login';
import { TbHexagonPlusFilled } from "react-icons/tb";
import { IoFlagSharp } from "react-icons/io5";


const SignUp = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
    } = useForm();
    
   const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register. Please try again.");
    }
    
  };


  return (
  <div className='flex h-screen justify-center items-center'>
  <div className="modal-box dark:bg-slate-800 dark:text-white "  >
    <form onSubmit={handleSubmit(onSubmit)}>
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="text-2xl flex justify-center">Create Account</h3>

            
            <label className="block">
              <span>Full Name:</span>
              <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70 ">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Full Name" {...register("fullname", { required: true })} />
                {errors.fullname && <span className='text-2xl text-red-500'>*</span>}
              </div>
            </label>

          
            <label className="block">
              <span>Email:</span>
              <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" placeholder="Your Email" {...register("email", { required: true })} />
                {errors.email && <span className='text-2xl text-red-500'>*</span>}
              </div>
            </label>

            
            <label className="block">
              <span>Password:</span>
              <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70 ">
                  <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Password" {...register("password", { required: true })} />
                {errors.password && <span className='text-2xl text-red-500'>*</span>}
              </div>
            </label>

            <label className="block">
              <span>Country Code:</span>
              <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70 ">
              <IoFlagSharp /> 
                </svg>
                <input type="text" className="grow" placeholder="Country Code" {...register("contrycode", { required: true })} />
                {errors.countrycode && <span className='text-2xl text-red-500'>*</span>}
              </div>
            </label>


 
                
		
            <label className="block">
              <span>Contact Number:</span>
              <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70 ">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="number" className="grow" placeholder="Contact Number" {...register("mobileNum", { required: true })} />
                {errors.mobileNum && <span className='text-2xl text-red-500'>*</span>}
              </div>
            </label>
           <div> <Link><TbHexagonPlusFilled /></Link>Add More Details</div>

            <div className="p-3">
            <button className="text-lg btn btn-block btn-warning">Sign Up</button>
            </div>
            

            <div className="p-2">
              <button className="text-lg btn btn-block btn-warning">
                <img src="/Google_logo.png" alt="Google Logo" className="w-12 h-12" />
                Sign in with Google
              </button>
            </div>

            <div>
              Already have an account? 
              <button className="text-lg underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </button>
<Login/>
<label className="label" >
            <a href="#" className="label-text-alt link dark:text-white hover:text-blue-500 dark:hover:text-blue-300 hover:underline hover:bg-blue-100 dark:hover:bg-warning-700">Forgot password?</a>
          </label>
            </div>
            
          </form>



    </div>
   </div>
  
  );
};

export default SignUp;
