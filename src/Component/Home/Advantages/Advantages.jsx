import React from 'react';
import image2 from '../../../../public/image/MicrosoftTeams-image (3).png'
const Advantages = () => {
  return (
    <div className='md:px-[100px] px-[10px] '>
      <div className='md:flex md:justify-between'>
        <div className='mr-10'>
          <h1 className='text-3xl font-bold pt-14'>All of Teamcenter, with the advantages of SaaS</h1>
          <p className='mt-8 mb-5'>Choose any solution from the full Teamcenter portfolio. Software as a service (SaaS) delivery includes preconfigured  best practices to get you up and running quickly and cost effectively.</p>
          <img src={image2} alt="" />
        </div>
        <div className='mt-[220px]'>
          <div className='mb-8'>
            <h1 className='font-bold text-xl'>Plan</h1>
            <p>Set the strategic direction and product definition to guide downstream decisions.</p>
          </div>
          <div className='mb-8'>
            <h1 className='font-bold text-xl'>Develop</h1>
            <p>Design and document the multi-discipline product to leverage the digital twin.</p>
          </div>
          <div className='mb-8'>
            <h1 className='font-bold text-xl'>Deliver</h1>
            <p>Weave the digital thread to connect product development with manufacturing, service and suppliers.</p>
          </div>
          <div className=''>
          <button className="btn bg-[#00FFB9] font-bold hover:bg-[#C4FFEE] border-none rounded-none text-sm px-5">Explore solutions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;