import React from 'react';
import image3 from '../../../../public/image/plm-on-premise-promo-640x480.png'
import image4 from '../../../../public/image/plm-on-cloud-promo-640x480.png'
import image5 from '../../../../public/image/plm-on-siemens-cloud-promo-640x480.png'


const PLM = () => {
  return (
    <div className='px-[100px]'>
      <div>
        <h1 className='text-3xl font-bold pt-14 mb-5'>PLM your way</h1>
        <p>Get Teamcenter delivered any way you want it – on premises or on the cloud – operated by your IT team or Siemens.</p>
        <div className='flex justify-between mt-14 mb-10'>
          <div className='border mr-5'>
            <img src={image3} alt="" className=''/>
            <div className='pl-5'>
            <p className='text-sm mb-2 font-bold mt-5'>TEAMCENTER</p>
            <h1 className='text-xl font-bold mb-6'>On premises</h1>
            <p className='font-sans mb-3'>Host, manage and support your PLM software with your IT team.</p>
            </div>
          </div>

          <div className='border mr-5'>
            <img src={image4} alt="" className=''/>
            <div className='pl-5'>
            <p className='text-sm mb-2 font-bold mt-5'>TEAMCENTER</p>
            <h1 className='text-xl font-bold mb-6'>On cloud</h1>
            <p className='font-sans mb-3'>Choose your cloud provider, managed by your IT team.</p>
            </div>
          </div>

          <div className='border mr-5'>
            <img src={image5} alt="" className='h-[250px]'/>
            <div className='pl-5'>
            <p className='text-sm mb-2 font-bold mt-3'>TEAMCENTER X</p>
            <h1 className='text-xl font-bold mb-6'>On cloud, SaaS by Siemens</h1>
            <p className='font-sans mb-3'>Get started quickly using software as a service. Operation, maintenance and upgrades are included.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PLM;