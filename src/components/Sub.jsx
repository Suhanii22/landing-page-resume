import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

const Sub = () => {
    return (

        <div className=' border-t-[14px]  border-white relative  z-4 pb-[250px] bg-white'>
            <div className='flex flex-col gap-6 justify-between items-center mt-6 p-2 pt-4 pb-4'>
                <div><button className='bg-[#ffdfe4] rounded p-2 pl-4 pr-4 font-semibold text-[18px]'>What You Get</button></div>
                <div className='text-[26px] font-semibold'>You’re not just another applicant and your resume shouldn’t look like one</div>

            </div>


            <div className='flex gap-6 flex-wrap justify-center mt-[50px]'>

                {/* card1 */}
                <div className='shadow-xl rounded-4xl w-[300px] h-[450px] p-5'>
                    <div className='p-8'><img src={img1} alt="" /></div>
                    <div>
                        <div className='text-[20px] font-medium mb-3  mt-3'>A Resume That Passes ATS Filters</div>
                        <div className='text-[18px] leading-[30px]'>Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.</div>
                    </div>
                </div>

                {/* card2 */}
                <div className=' shadow-xl rounded-4xl w-[300px] h-[450px] p-5'>
                    <div className='p-8'><img src={img2} alt="" /></div>
                    <div>
                        <div className='text-[20px] font-medium mb-3  mt-3'>A Cover Letter That Gets Read</div>
                        <div className='text-[18px] leading-[30px]'>that speaks directly to the role and reflects your strengths.</div>
                    </div>
                </div>


                {/* card3 */}
                <div className='shadow-xl rounded-4xl w-[300px] h-[450px] p-5'>
                    <div className='p-8'><img src={img3} alt="" /></div>
                    <div>
                        <div className='text-[20px] font-medium mb-3  mt-3'>A LinkedIn Profile That Works For You</div>
                        <div className='text-[18px] leading-[30px]'>Attract the right eyes, start conversations, and show up in recruiter searches.</div>
                    </div>
                </div>

                {/* card4 */}
                <div className='shadow-xl rounded-4xl w-[300px] h-[450px] p-5'>
                    <div className='p-8'><img src={img4} alt="" /></div>
                    <div>
                        <div className='text-[20px] font-medium mb-7  mt-3'>Interview Confidence</div>
                        <div className='text-[18px] leading-[30px]'>Interview preperation with real HR professionals so you speak clearly,confidently, and convincingly.</div>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Sub