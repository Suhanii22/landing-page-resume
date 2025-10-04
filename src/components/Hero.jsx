import React from 'react'
import girl from '../assets/girl.png'
import star from '../assets/Vector.png'
import mask from '../assets/mask.png'
import extra from '../assets/extra.png'


const Hero = () => {
  return (
    <div className='hero  w-[100%] xl:h-[821px] bg-pink-200 justify-between flex-col-reverse xl:flex-row   pr-[2%] flex '>



      <div className='w-full z-2 xl:w-[50%]  pl-[4%] pr-[2%] pt-[115px]  pb-[80px]'>

        <div className='text-[64px] font-bold'>Your Resume <span className='text-[#fa1239]'>Deserves A Yes <img className=' relative md:left-[40%] xl:left-auto' src={extra} alt="" /></span> Let's Make It Happen</div>
        <div className='text-[16px] pt-7 mr-6 leading-[34px]'>If Your Resume Isn't Getting Responses,It's Time For Upgrade Get An ATS-Optimizes Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Foot In The Door And Place Your Name At Top Of The Shortlist</div>
        <div className='flex pt-9 gap-6'>
          <button className='p-2 pl-5 pr-5 rounded-full border font-medium text-[18px] blur-border1'>RESUME PAKAGES</button>
          <button className='p-2 pl-5 pr-5 rounded-full border font-medium text-[18px] bg-[#fa1239] text-white'>CONTACT US</button></div>
      </div>


      <div className='w-full h-[500px] sm:h-[821px] xl:w-[45%] pt-[200px] '>
      
        {/* circles */}

        <div className=' absolute left-[8%] sm:left-[20%] md:left-[18%] xl:left-auto xl:right-[55px] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[634px] md:h-[634px] rounded-full p-6  sm:p-10 md:p-18  bg-[#ffd0d8]'>

          <div className='w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[477px] md:h-[477px] rounded-full bg-[#fed8de]'>

          </div>
        </div>


        <img className='w-[250px] sm:w-[400px] md:w-auto absolute top-50 left-[8%] sm:left-[22%] xl:left-auto xl:right-30' src={girl} alt="" />


        <div className='bg-[#f6f0f1]  top-[400px]   sm:top-[593px] sm:left-[18%] md:left-[20%] xl:left-auto xl:right-[352px] rounded-xl absolute p-2 sm:pl-4 sm:pr-4  flex w-[330px] sm:w-[350px] h-[117px]'>
          <div className=' text-[#1cb098] text-[64px] font-semibold'>
            4.9
          </div>
          <div className='flex flex-col pl-4 p-5'>
            <span className='flex pb-2'>
              <span><img className='pl-1' src={star} alt="" /></span>
              <span><img className='pl-1' src={star} alt="" /></span>
              <span><img className='pl-1' src={star} alt="" /></span>
              <span><img className='pl-1' src={star} alt="" /></span>
              <span><img className='pl-1' src={star} alt="" /></span>

            </span>
            <span className='text-[24px] font-semibold'>Instructor Rating</span>
          </div>
        </div>



        <div className='bg-[#f6f0f1]  gap-3 top-[530px] sm:top-[747px] left-[2%] sm:left-[30%] md:left-[48%] xl:left-auto xl:right-[47px] justify-center items-center  rounded-xl absolute p-2 pl-4 pr-4  flex w-[270px] h-[130px]'>
          <div className='  w-[90px] h-[90px]  mt-4'>
            <img className='w-[90px] h-[90px] ' src={mask} alt="" />
          </div>
          <div className='flex flex-col '>
            <span className='flex  text-[30px] font-extrabold'>
              260+
            </span>
            <span className='text-[#666666] text-[17px] font-medium'>Online Resume Created</span>
          </div>
        </div>



        <div>

        </div>




      </div>



    </div>
  )
}

export default Hero