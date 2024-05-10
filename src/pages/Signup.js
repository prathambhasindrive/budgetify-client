import React from 'react';

const Signup = () => {
    return ( 
        <section className=" min-h-screen bg-gray-100 flex justify-center items-center ">
            

            <div className="bg-gray-200  rounded-3xl shadow-lg max-w-3xl flex " >
              
              <div className=" flex flex-col bg-cyan-200 justify-center items-center w-1/2 flex-wrap ">
                    <h1 className=' mt-2  font-bold text-2xl'>Signup</h1>
                    <form  className= " flex  flex-col " action=''>
                      <h3 className=' mt-5 '>First Name</h3>
                      <input  className=' rounded-lg p-2 mt-2' type='text' name='firstName' placeholder='Enter your first name'/> 

                      <h3 className=' mt-3 '>Last Name</h3>
                      <input className=' rounded-lg p-2  mt-2' type='text' name="last Name" placeholder='Enter your last name'/>
                      <h3 className=' mt-3'>Email ID</h3>
                    <input className=' rounded-lg  p-2 mt-2' type='text' name="Email" placeholder='Enter your email'/>
                    <h3 className=' mt-3'>Password</h3>
                      <input className=' rounded-lg   p-2 mt-2' type='password' name="password" placeholder='password'/>
                      <h3 className=' mt-3' >Confirm Password</h3>
                      <input className=' rounded-lg   mt-2 p-2' type='password' name="confirm password" placeholder='Confirm password'/>
                       <button className='  flex justify-center  items-center rounded-lg  w-5/12  h-6  mt-5 mb-5  border-2 '>SignUp</button>
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