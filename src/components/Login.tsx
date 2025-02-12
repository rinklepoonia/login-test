"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import CustomInput from './common/CustomInput';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormValues {
  email: string;
  password: string;
}
const Login = () => {
      const router = useRouter();

  // State for form values & errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Validation function for individual fields
  const validateField = (name: string, value: string) => {
    let errorMessage = "";
    if (name === "email") {
      if (!value) {
        errorMessage = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Enter a valid email address";
      }
    }

    if (name === "password") {
      if (!value) {
        errorMessage = "Password is required";
      } else if (value.length < 6) {
        errorMessage = "Password must be at least 6 characters";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    // Validate all fields before submission
    validateField("email", formData.email);
    validateField("password", formData.password);
    if (!formData.email || !formData.password) {
      return;
    }

    Swal.fire({
      title: "Login Successful!",
      text: "Redirecting to dashboard...",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    });
  };

    
  return (
      <div className='pt-5 pb-5 sm:pb-14 md:pb-[60px] xl:pb-[201px] 2xl:pb-[310px] relative md:my-[30px] max-w-[1920px] mx-auto '>
          <div className='container xl:max-w-[1128px] mx-auto xl:px-0 max-sm:px-[35px]'>
              <div className='flex flex-row flex-wrap items-center'>
                  <div className="max-lg:w-full xl:w-1/2 w-full flex flex-col gap-10 sm:gap-14 lg:gap-[100px] xl:gap-[138px] justify-between xl:max-w-[456px]">
                      <Image width={163} height={31} src="/assets/images/svg/lyrics-logo.svg" alt='lyrics-logo' />
                      <div className='mb-0'>
                          <h3 className='font-semibold text-3xl leading-194 text-light-blue tracking-sm'>Welcome Back</h3>
                          <p className='font-normal text-sm leading-214 text-light-grey pb-8'>Welcome back! Please enter your details.</p>
                          <form  onSubmit={handleSubmit}>
                           <p className='font-medium text-base leading-125 text-light-black pb-1.5'>Email</p>
                          <CustomInput
                              type="text" 
                              name="email" 
                             placeholder="Email" 
                            value={formData.email}
                  onChange={handleChange}
                   error={submitAttempted && errors.email}
                              />
                           <p className='font-medium text-base leading-125 text-light-black pb-1.5'>Password</p>
                            <CustomInput
                              type="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange}
                   error={submitAttempted && errors.password}
                              placeholder="••••••••" 
                             
                        />
                         {/* =====remember me on forgot====== */}
                          <div className='flex flex-wrap items-center justify-between gap-3.5'>
                              <div  onClick={() => setIsChecked(!isChecked)} className='flex items-center gap-3 cursor-pointer'>
                    <div className='relative '>
                      <input   onChange={() => setIsChecked(!isChecked)} type="checked" className='size-5 border border-solid border-off-grey rounded-[6px] outline-none cursor-pointer' />
                      {isChecked && (
                        <Image className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none' width={15} height={10} src="/assets/images/svg/check-mark.svg" alt='check-mark' />
                      )}
                    </div>
                                  <p className='font-inter font-normal leading-normal text-off-grey-100 text-base'>Remember for 30 days</p>    
                              </div>
                              <Link href="" className='font-inter text-base font-normal leading-normal text-off-blue'>Forgot password</Link>
                          </div>
                              <button type="submit" className='font-medium text-sm leading-171 text-white bg-light-black rounded-[9px] py-[10px] px-3 w-full mt-[33px] mb-1.5 border border-solid border-transparent hover:border-black hover:bg-transparent hover:text-black duration-300 ease-linear transition-all'>Get Started</button>
                              </form>
                          <button className='font-medium text-sm leading-171 text-light-black border border-solid border-off-grey flex items-center w-full py-[10px] px-3 justify-center gap-[10px] rounded-[9px]'>
                               <Image width={22} height={22} src="/assets/images/svg/google.svg" alt='lyrics-logo' />
                              Sing in with Goolge
                          </button>
                          <div className='flex items-center gap-[10px] mt-[18px] sm:justify-center'>
                              <p className='font-inter font-normal text-base leading-normal text-off-grey-100'>Don’t have an account?</p>
                              <Link href='#' className='text-off-blue font-normal text-base leading-normal'>Sign up</Link>
                          </div>
                      </div>
                  </div>
                  <div className='xl:w-1/2 w-full xl:block hidden'>
                      <div className="lg:absolute flex justify-center flex-col items-center lg:right-[27px] lg:top-0 lg:w-[47.55%] w-full bg-blue rounded-[20px] h-full">
                          <Image width={617} height={541}
                              src="/assets/images/png/blue-box-ellipse.png"
                              alt='ellipse'
                              className="w-[81.3%] 2xl:h-[60.2%]"
                          />
                      </div>
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default Login