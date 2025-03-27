import React from 'react'
import Navbar from '../../components/Navabar'
import SideFilterCard from '../../components/sideBarFilterCard/index.jsx'
import Card from '../../components/Card'
import AdCard from '../../components/AdCard'
import ImageSlider from '../../components/ImageSlider.jsx'
import topImage from "../../assets/Images/res4.jpg"
import leftImage from "../../assets/Images/479.jpg"
import TopFilter from '../../components/TopFilter/index.jsx'
import SideBarFilterCard from '../../components/sideBarFilterCard/index.jsx'
import SortByCard from '../../components/SortByCard.jsx/index.jsx'
import image2 from '../../assets/Images/h2.jpg'
import image3 from '../../assets/Images/h1.jpg'
// import topImage from "../../assets/Images/res4.jpg"



const HomePage = () => {

 


  return (
    <div className=''>
      <Navbar />
      <div className="flex gap-6 lg:mt-5  mb-5 ">
        <ImageSlider
          image={topImage}
          width={700}
        />
        <ImageSlider
          image={leftImage}
          width={700}
        />
      </div>


      <div
        //  style={{border:"2px solid #000000"}}
        className="my-5 py-5 bg-orange-100 rounded-2xl text-center flex justify-between px-9 ">


        <div className="lg:flex md:flex items-center hidden  md:block border-2 rounded-2xl p-2 border-orange-400 bg-white hover:border-orange-400 shadow-sm w-full md:w-1/3 mt-3 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          &nbsp;
          <input type="text"
           placeholder="what are you Looking for?"
          
            className="w-full outline-none  bg-white" />
        </div>

        <div className="flex gap-8 md:gap-6">
          <TopFilter />
          <SortByCard />
        </div>

        {/* <SortByCard/> */}
      </div>



      <div className="grid lg:grid-cols-[20%_1fr_20%] gap-5 h-[100vh]">
        <div
          // style={{border:"2px solid #000000"}}
          className="bg-gray-100 rounded-2xl hidden lg:block md:hidden">
          <SideBarFilterCard />
        </div>
        <div
          //  style={{border:"2px solid #000000"}}
          className="bg-gray-100 rounded-2xl shadow-xl">
          <div className='flex justify-end px-9 pt-2'>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">97</span> Tables
            </p>
          </div>

          <div className="">
            <div className="">

            </div>
            <Card
              image={image3}
              restName={"The Spice Garden"}
              restStarRating={2.3}
              restTime={"Open till - 11pm"}
              restType={"Multi - Cuisines"}
              restLocalAddress={"White Town"}
              restCity={"Pondicherry"}
              />

            <Card
              image={image2}
              restName={"Bismilla"}
              restStarRating={3.3}
              restTime={"Closed"}
              restType={"Italian"}
              restLocalAddress={"White Town"}
              restCity={"Pondicherry"}
              />

            <Card
              image={image1}
              restName={"Bbq Nation"}
              restStarRating={4.0}
              restTime={"Open till - 10pm"}
              restType={"Chinese"}
              restLocalAddress={"White Town"}
              restCity={"Pondicherry"}
             />

            <Card
              image={image2}
              restName={"Banana Leaf"}
              restStarRating={4.5}
              restTime={"Closed"}
              restType={"Indian"}
              restLocalAddress={"White Town"}
              restCity={"Pondicherry"}
               />
          </div>
        </div>
        <div
          //  style={{border:"2px solid #000000"}}
          className="bg-gray-100 rounded-2xl hidden lg:block md:hidden"><AdCard/></div>
      </div>

      {/* <div className="pb-[1000px] mt-8"><Pagination/></div> */}


    </div>
  )
}

export default HomePage
