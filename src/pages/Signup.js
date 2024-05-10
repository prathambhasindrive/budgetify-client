import React from 'react';

const Signup = () => {
    return ( 
        <section className=" min-h-screen bg-gray-100 flex justify-center items-center ">
            

            <div className="bg-gray-200  md:bg-cyan-200 rounded-3xl shadow-lg w-4/6 flex  md:w-4/6 md:mx-auto" >
              
              <div className=" flex flex-col bg-cyan-200 justify-center items-center   w-full md:w-1/2  rounded-lg">
                    <label className=' mt-2  font-bold text-2xl'>Signup</label>
                    <form  className= " flex  flex-col " action=''>
                      <div className='flex flex-col'>
                      
                      <label className=' mt-5 '>First Name</label>
                      <input  className=' rounded-lg p-2 mt-2' type='text' name='firstName' placeholder='Enter your first name'/> 
                      </div>
                      <div className='flex flex-col'>
                      <label className=' mt-3 '>Last Name</label>
                      <input className=' rounded-lg p-2  mt-2' type='text' name="last Name" placeholder='Enter your last name'/>
                      </div>
                      <div className='flex flex-col'>
                      <label className=' mt-3'>Email ID </label>
                    <input className=' rounded-lg  p-2 mt-2' type='text' name="Email" placeholder='Enter your email'/>
                    </div>
                    <div className='flex flex-col'>
                    <label className=' mt-3'>Password</label>
                      <input className=' rounded-lg   p-2 mt-2' type='password' name="password" placeholder='password'/>
                      </div>
                      <div className='flex flex-col'>
                      <label className=' mt-3' >Confirm Password</label>
                      <input className=' rounded-lg   mt-2 p-2' type='password' name="confirm password" placeholder='Confirm password'/>
                      </div>
                      <div className='flex flex-col justify-center items-center'>
                       <button className='  shadow-lg flex items-center justify-center  hover:bg-cyan-100 rounded-lg  w-6/12  h-6  mt-5 mb-5  border-2 '>SignUp</button>
                       </div>
                    </form>
                
              </div>
              <div className=" w-1/2  sm:block hidden p-5 bg-cyan-100 ">
                      <img className="  rounded-3xl" src='\assets\images\investment-portfolio-feature.png'alt=''/>
              </div>
            </div>
            
        </section>
     );
}
 
export default Signup;