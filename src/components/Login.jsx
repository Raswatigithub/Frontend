import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const Login = () => {
  const  {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();
  const  onSubmit=(data)=>console.log(data);

  return (
    <div>
        <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="text-2xl flex justify-center">Login</h3>
    <div className="py-1">
    <label className="block">
              <span>User Name:</span>
              <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70 ">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="UserName" {...register("name", { required: true })} />
                {errors.name && <span className='text-2xl text-red-500'>*</span>}
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


<label className="label" >
            <a href="#" className="label-text-alt link dark:text-white hover:text-blue-500 dark:hover:text-blue-300 hover:underline hover:bg-blue-100 dark:hover:bg-warning-700">Forgot password?</a>
          </label>

         
<div className='p-2'>
<button className="text-lg btn btn-block btn-warning">Login</button>

</div>
<div className="p-2">
              <button className="text-lg btn btn-block btn-warning">
                <img src="/Google_logo.png" alt="Google Logo" className="w-12 " />
                Sign in with Google
              </button>
            </div>

<div className='flex justify-around'>
<div>
  Not registered?{" "}
 <Link to={'/signup'} className='underline text-blue-500 cursor-pointer'>SignUp</Link>
</div>
</div>

    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login