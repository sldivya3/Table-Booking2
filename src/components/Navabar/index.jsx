
import { useState,useEffect } from 'react';
import tableBookinglogo from '../../assets/Images/tableBooking-logo.png'


const Navbar = () => {

  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    fetch("https://ipinfo.io/json")
    .then(res => res.json())
    .then(data => setUserLocation(`${data.city.toLowerCase()} , ${data.region}-${data.country}`))
    .catch(err => alert("Unable To detect your locations"))
  }, [])
  


  




  return (


    <div className="container mx-auto p-4">
      <div className="flex flex-wrap items-center justify-between">


        <div className="flex items-center">
          <img src={tableBookinglogo} alt="Logo" className="w-32" />
        </div>


        <div className="lg:flex md:flex items-center border-2 hidden lg:block md:block  rounded-2xl p-2 border-orange-300 hover:border-orange-400 shadow-sm w-full md:w-1/3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:h-">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          &nbsp; 
          
          <input 
          value={userLocation}
          onChange={(e)=>setUserLocation(e.target.value)}
          type="text" placeholder="Search for location" className="w-full outline-none bg-transparent text-[15px]" />
        </div>

          

        <div className="">

          <button className="bg-orange-400 text-white font-bold px-3 py-2 rounded-lg hover:bg-orange-500 transition flex"> Login / Sign-up
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
          </button>

        </div>
      </div>

    </div>


  )
}

export default Navbar;
