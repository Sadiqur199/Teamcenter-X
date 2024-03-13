import React from 'react';
import { FaPowerOff } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { TbCloudLock } from "react-icons/tb";


const Teamcenter = () => {
  return (
    <div className='md:px-[100px] px-[10px] mt-20 mb-10'>
      <h1 className='text-3xl font-bold pt-14'>Why Teamcenter X?</h1>
      <div className='md:flex justify-between'>
      <div className='mt-7'>
      <FaPowerOff size={30} className='text-[#0098A6] mb-2'/>
      <h4 className='font-bold text-xl mb-2'>Fast SaaS PLM</h4>
      <p>Get up and running quickly with built-in best practices <br /> and reduced cost of ownership. All the operations and <br /> maintenance, including updates, are managed by Siemens.</p>
      </div>
      <div className='mt-7' >
      <FaUserPlus size={35} className='text-[#0098A6] mb-2'/>
      <h4 className='font-bold text-xl mb-2'>Fast SaaS PLM</h4>
      <p>Teamcenter X delivers the full Teamcenter PLM portfolio. <br /> Get started with what you need today, then add more <br /> apps and users when you're ready.</p>
      </div>
      <div className='mt-7'>
      <TbCloudLock size={35} className='text-[#0098A6] mb-2'/>
      <h4 className='font-bold text-xl mb-2'>Fast SaaS PLM</h4>
      <p>Easily access and use Teamcenter X with the latest <br /> technologies, such as artificial intelligence (AI). Get the <br /> the highest standards for privacy and data security.</p>
      </div>
      </div>
    </div>
  );
};

export default Teamcenter;