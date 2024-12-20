import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { MdLock ,MdEmail} from "react-icons/md";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const SignUp = () => {

    const [toggelPassword, setToggelPassword] = useState(true);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        type:"User"
      });
    
      const handelSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5800/api/user/register', {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          let data = await res.json();
          if(!res.ok){
                return toast.error(data.message);
            }
            console.log(data);
            setUser({
                name:"",
                email:"",
                password:"",
                type:"User"
            })
            toast.success(data.message, {
                duration: 10000,});
            navigate("/login");
        } catch (error) {
            toast.error('Error Occured!');
        }

    }

  return (
    <div className='w-screen h-screen'>
        <div className='flex flex-row h-full'>
            <div className='basis-1/2 flex justify-center items-center p-12'>
            <div className="bg-white p-12 rounded-xl shadow-lg shrink">
            <h2 className="text-4xl font-bold mb-6 text-center text-regal-blue">Create Account</h2>
            <form onSubmit={handelSubmit} method="POST">
            <div className='flex gap-8 flex-col'>
            
            <div className='flex items-center gap-4 shadow border rounded-xl w-full py-4 px-7 text-gray-700 leading-tight'>
                <MdEmail style={{color: "rgba(23, 17, 91, 0.6)", fontSize:"2em"}}/>
                <input className="appearance-none focus:outline-none focus:shadow-outline text-xl" id="email" type="name" placeholder="Enter your Full Name." 
                value={user.name}
                onChange={(e) => 
                    setUser((user) => ({...user, name: e.target.value})
                    )}
                
                />
            </div>

            <div className='flex items-center gap-4 shadow border rounded-xl w-full py-4 px-7 text-gray-700 leading-tight'>
                <FaCircleUser style={{color: "rgba(23, 17, 91, 0.6)", fontSize:"2em"}}/>
                <input className="appearance-none focus:outline-none focus:shadow-outline text-xl" id="email" type="email" placeholder="Enter your Email Id." 
                value={user.email}
                onChange={(e) => 
                    setUser((user) => ({...user, email: e.target.value})
                    )}
                
                />
            </div>
            <div className='flex items-center gap-4 shadow border rounded-xl w-full py-4 px-7 text-gray-700 leading-tight'>
                <MdLock  style={{color: "rgba(23, 17, 91, 0.6)", fontSize:"2em"}}/>
                <input className="appearance-none focus:outline-none focus:shadow-outline  text-xl" id="email" 
                type={toggelPassword ? 'password' : ''} 
                placeholder="Enter Your Password." 
                value={user.password}
                onChange={(e) => 
                    setUser((user) => ({...user, password: e.target.value})
                    )}
                
                />
                <button
                   type='button'
                   onClick={(e) =>{
                    setToggelPassword((prev) => !prev)
                   }}
                >
                    {toggelPassword? <IoMdEye style={{color: "rgba(23, 17, 91, 0.6)", fontSize:"2em"}}/> :
                    <IoMdEyeOff style={{color: "rgba(23, 17, 91, 0.6)", fontSize:"2em"}}/>
                }
                </button>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-purple-blue text-white text-xl font-bold py-4 px-7 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Create Account
                </button>
            </div>
            </div>
            </form>
            </div>
            </div>
            <div className='basis-1/2 hidden justify-center items-end w-full shrink-0 tablet:flex'>
                <img src="https://www.freeiconspng.com/uploads/bus-png-4.png" className='w-full'></img>
            </div>
        </div>
    </div>
  )
}

export default SignUp