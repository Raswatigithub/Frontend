import React from 'react';
import contact from '../../public/contact.png';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import Footer from './Footer';

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      
      {/* Add padding to account for the navbar */}
      <div className="mt-20 my-10">
        <div className="card lg:card-side bg-base-100 shadow-xl p-5 dark:bg-slate-800 dark:text-white">
            <Navbar />
          <figure>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={contact}
              alt="Contact"
            />
          </figure>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <h2 className="card-title">
                <span className="text-yellow-500">Let's</span> Connect!
              </h2>

              {/* Username Field */}
              <label className="block">
                <span>Username:</span>
                <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter your username"
                    {...register('username', { required: true })}
                  />
                  {errors.username && <span className="text-red-500">Required</span>}
                </div>
              </label>

              {/* Email Field */}
              <label className="block">
                <span>Email:</span>
                <div className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white">
                  <input
                    type="email"
                    className="grow"
                    placeholder="Enter your email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className="text-red-500">Required</span>}
                </div>
              </label>

              {/* Query Field */}
              <label className="block">
                <span>Your Query:</span>
                <textarea
                  placeholder="Enter your query here..."
                  className="textarea textarea-bordered w-full dark:bg-slate-900 dark:text-white"
                  {...register('query', { required: true })}
                ></textarea>
                {errors.query && <span className="text-red-500">Required</span>}
              </label>

              <div className="card-actions justify-end">
                <button className="text-lg btn btn-block btn-warning">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
