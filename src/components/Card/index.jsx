import React from 'react';


const Card = ({ image, restName, restStarRating, restTime, restType, restLocalAddress, restCity }) => {


  return (
    <>
      <div className='lg:px-10 px-2 md:px-2 '>

        {/* card-1 */}

        <div className="border-2 border-grey-200 grid grid-cols-[30%_1fr]  bg-white rounded-xl py-5 mb-4  ">

          <div className="px-4">
            <img src={image} alt="" width={150} className='lg:h-[150px] h-[130px] rounded-xl' />
          </div>
          <div className="">
            <div className="">
              <div className="flex justify-between ">
                <div className="res-name  ">
                  <span className='font-bold text-[24px]'>{restName}</span>
                </div>


                <div className="flex items-center px-8 text-green-600 ">
                  <div className=" text-[20px]">{restStarRating}</div> &nbsp;
                  <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg></div>
                </div>
              </div>

              <div className="res-name mt-[-5px]">
                <span className='font-bold text-[14px] text-green-700'>{restTime} </span>
              </div>
              <div className="res-name flex  ">
                <span>{restType}</span>
                {/* <img src={veg} alt="" /> */}
              </div>
              <div className="res-name  ">
                <span>{restLocalAddress} - {restCity}</span>
              </div>
              <div className="res-name bg-orange-500 mt-6 rounded-l-xl py-2 ">
                <span className='text-white font-bold px-4'>Flat 20% off on pre-Booking</span>
              </div>
            </div>
          </div>
        </div>




      </div>

    </>
  );
}

export default Card;
