import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import image1 from '../../../../public/image/teamcenter-x-product-is808157346-promo-640x480.jpg'
import { BiSolidPhoneCall } from "react-icons/bi";


const Banner = () => {
  return (
    <div  style={{backgroundImage: 'linear-gradient(90deg, #000028, #0099ff)'}} className=' px-[80px] pt-5 pb-14 text-white'>
      <div className='flex'>
      <IoHomeOutline className='text-white mt-[1px]' size={20}/>
      <MdKeyboardArrowRight className='text-white' size={25}/>
      </div>
      <div className='pt-[100px] flex justify-between'>
        <div className='pt-3 pr-[10px]'>
          <p className='text-sm mb-2'>TEAMCENTER</p>
          <h2 className='text-4xl mb-5'>Teamcenter X</h2>
          <p className='mb-7'>Plan, develop and deliver innovative products with Teamcenter X. <br /> Explore our SaaS delivery of the full Teamcenter PLM portfolio on the cloud, operated by Siemens.</p>
          {/* button section */}
          <div className='flex'>
          <div className=''>
          <button className="btn bg-[#00FFB9] font-bold hover:bg-[#C4FFEE] border-none rounded-none text-sm px-5">Contact Sales</button>
          </div>

          <div className=''>
          <button className="btn btn-outline font-semibold hover:bg-[#002949] hover:border hover:border-white text-white rounded-none border-spacing-2 ml-[10px] text-xl ">Try Teamcenter X now</button>
          </div>
          </div>
          {/* hr line */}
          <div>
            <hr  className='mt-7'/>
          </div>
          {/* contact us */}
          <div className='flex mt-5'>
          <BiSolidPhoneCall className='' size={30}/>
          <p className='ml-2 mt-[4px]'> <span>Call us at</span> 8000002467</p>
          </div>
        </div>
        <div>
          <img src={image1} alt="" className='w-auto h-auto'/>
        </div>
      </div>
    </div>
  );
};

export default Banner;