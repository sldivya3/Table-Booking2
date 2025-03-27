import { useState } from "react";

const SideBarFilterCard = () => {


  const [Popularity, setPopularity] = useState(false)
  const [CuisineType, setCuisineType] = useState(false);
  const [Rating, setRating] = useState(false);
  const [Budget, setBudget] = useState(false);


  return (
    <div className=''>
      <h1 className="flex justify-center m-8 font-bold">Quick Filters</h1>
      <ul className="mt-5 accent-orange-500">
        {/* Quick Filter */}
        <li>
          <div
            onClick={() => setPopularity(!Popularity)}
            className="py-3 px-10  hover:bg-gray-200 rounded-md cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center space-x-3 font-medium">
              <span>Popularity</span>
            </div>
            <i className={`fa-solid ${Popularity ? "fa-minus" : "fa-plus"}`}></i>
          </div>
          {Popularity && (
            <ul className="pl-8 mt-2 text-black">
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Popularity</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2  w-4 h-4' />
                <label>Rating: High to Low</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2  w-4 h-4' />
                <label>Cost: High to Low</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Cost: Low to High</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Distance</label>
              </li>
            </ul>
          )}
        </li>

        {/* Cuisine type */}
        <li>
          <div
            onClick={() => setCuisineType(!CuisineType)}
            className="py-3 px-10 text-black hover:bg-gray-200 rounded-md cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center space-x-3 font-medium">

              <span>Cuisine Type</span>
            </div>
            <i className={`fa-solid ${CuisineType ? "fa-minus" : "fa-plus"}`}></i>
          </div>
          {CuisineType && (
            <ul className="pl-8 mt-2 text-black">
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Indian</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Italian</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Chinese</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Thai</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="checkbox" className='mx-2 w-4 h-4' />
                <label>Japanese</label>
              </li>
            </ul>
          )}
        </li>

        {/* Review */}
        <li>
          <div
            onClick={() => setRating(!Rating)}
            className="py-3 px-10 text-black hover:bg-gray-200 rounded-md cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center space-x-3 font-medium">

              <span>Rating</span>
            </div>
            <i className={`fa-solid ${Rating ? "fa-minus" : "fa-plus"}`}></i>
          </div>
          {Rating && (
            <ul className="pl-8 mt-2 text-black">
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>1 Star</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>2 Star</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>3 Star</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>4 Star</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>5 Star</label>
              </li>
            </ul>
          )}
        </li>

        {/* Budget */}
        <li>
          <div
            onClick={() => setBudget(!Budget)}
            className="py-3 px-10 text-black hover:bg-gray-200 rounded-md cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center space-x-3 font-medium">

              <span>Budget</span>
            </div>
            <i className={`fa-solid ${Budget ? "fa-minus" : "fa-plus"}`}></i>
          </div>
          {Budget && (
            <ul className="pl-8 mt-2 text-black">
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>Any to ₹ 500</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>₹ 500 - ₹ 1000 </label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>₹ 1000 - ₹ 1500</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>₹ 1500 - ₹ 2000</label>
              </li>
              <li className="py-2 px-4  hover:bg-gray-200 rounded-md cursor-pointer flex items-center space-x-3">
                <input type="radio" className='mx-2 w-4 h-4' />
                <label>₹ 2000 above</label>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}



export default SideBarFilterCard;
