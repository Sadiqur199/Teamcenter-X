import React from 'react';
import { Link } from 'react-router-dom';
import image7 from '../../../../public/image/img76-get-started-quickly-with-cloud-plm-promo-640x480.png'

const CloudPLM = () => {
  return (
    <div className='bg-[#EBEBEE] mb-10 mt-20'>
      <div className='px-[100px] '>
        <div className='pt-[30px] pb-[10px]'>
          <div className='flex justify-between'>
            <div className='pt-[120px]'>
            <h1 className='font-bold text-2xl mb-5'>Get started quickly with Cloud PLM</h1>
            <p className='mb-5'>Start with what you need now to plan, develop and deliver innovative products. Get into <br /> production quickly with preconfigured best practices made for your industry.</p>
              <Link className='text-[#00D8A1]'>Watch Teamcenter X video</Link>
            </div>
            <div>
              <img src={image7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPLM;