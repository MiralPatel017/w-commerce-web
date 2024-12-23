import React from 'react'
import ProductList from './ProductList'
import Footer from "./Footer"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Product = ({ darkMode }) => {

  // const [openDropdown, setOpenDropdown] = React.useState(null);
  const [viewProduct, setViewProduct] = React.useState(null)


  // const navigation = useNavigate()

  // const toggleDropdown = (id) => {
  //   setOpenDropdown(openDropdown === id ? null : id);
  // };

  const viewDatails = (prod) => {
    setViewProduct(prod)
  }

  // close

  const closeModel = () => {
    setViewProduct(null)
  }

  return (
    <div className={darkMode ? " text-white pt-[100px] max-xl:px-5 " : "bg-white max-xl:px-5 text-black pt-[100px]"}>

      {/* Main Content */}
      <div className="grid gap-10 grid-cols-3 max-lg:grid-cols-1 max-w-[1440px] w-full mx-auto">
        {ProductList.products.map((info) => (
          <div key={info.id} className={darkMode ? "relative rounded-[20px] max-lg:mx-auto w-fit" : "relative rounded-[20px] max-lg:mx-auto w-fit border border-black" }>
            <img
              src={info.imgs}
              alt={info.title}
              className="w-[500px] rounded-[20px]"
            />
            <div className="absolute max-xl:text-[18px] bottom-0 bgblure text-white p-3 mx-[10px] mb-[10px] w-[95%] text-[20px] text-center rounded-[15px]">

              <div>
                <div className="inline-flex justify-center w-full rounded-md py-2 font-medium focus:outline-none">
                  {info.title}
                  <button className="border border-white p-[7px] font-semibold hover:rounded-lg text-[16px] hover:border-none px-2 ml-auto hover:bg-black transition-all"
                    onClick={() => viewDatails(info)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* View Product Details */}
      {viewProduct && (
        <div className={darkMode ? " text-white max-md:overflow-y-auto bg-black overflow-x-hidden justify-center items-center fixed inset-0 flex bg-opacity-90" : "bg-black max-md:overflow-y-auto max-md:h-full text-black fixed inset-0 flex justify-center items-center bg-opacity-85"}>

          <div className='w-full dark:bg-black dark:text-white rounded-[20px] md:mt-[30px] max-md:rounded-none max-md:pt-5 dark:bg-opacity-100  max-w-[800px] bg-opacity-100  justify-center items-center max-md:mt-[500px] px-6 max-md:px-2 mx-auto '>

            {/* close button */}
            <div className='pl-[90%] max-md:pl-[90%] md:mt-[20px]'>
              <button
                className=' bg-red-600 dark:bg-red-600 dark:text-white text-white max-md:w-fit max-md:px-[10px] max-md:py-[5px] max-md:text-[16px] max-md:p-[10px] p-[10px] px-[18px] font-bold hover:bg-red-700 rounded-full mb-[20px]'
                onClick={closeModel}
              >
                X
              </button>
            </div>

            <div className='overflow-y-auto gap-10 max-md:flex-wrap max-md:j  ustify-center flex'>

              {/* image */}
              <div className='w-[40%] max-md:w-full'>
                <img src={viewProduct.imgs} alt="" className='w-[400px] max-md:w-[190px] max-md:mx-auto' />
              </div>

              {/* visite product details */}
              <div className='w-[60%] max-md:w-full max-md:px-2 max-md:mx-auto text-[18px]'>

                {/* link of product brand */}
                <p className='text-[#007A8E] my-[5px] font-semibold'>
                  visite the {viewProduct.title} Store
                </p>

                {/* title of product */}
                <h2 className='max-md:text-2xl text-[30px] font-bold py-[5px]'>
                  {viewProduct.fullname}
                </h2>

                {/* star rating */}
                <div className='gap-9 flex font-semibold max-md:flex-wrap'>
                  <div className='flex gap-2 '>
                    3.8 <div className='flex gap-1 text-yellow-700 max-md:[1%] pt-[2%]'>
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </div>
                  </div>

                  <div className='gap-2 text-[#007A8E] max-md:flex-wrap flex'>
                    <div>
                      {viewProduct.rates} Reating
                    </div>

                    <div>
                      |
                    </div>

                    <div>
                      Search this page
                    </div>
                  </div>
                </div>

                <hr className='border-[1.5px] border-gray-500 my-2 max-md:hidden' />

                {/* offer & price */}
                <div className=''>
                  <div className=' text-[30px] '>
                    <span className='font-light text-red-700 dark:text-red-700'> -{viewProduct.offers} </span> <span className='font-semibold '> {viewProduct.price} </span>
                  </div>
                </div>

                {/* MRP of product */}
                <div className=' text-[#9A9C9C]'>
                  M.R.P. : <span className='line-through'> {viewProduct.mrp} </span>
                </div>

                <hr className='border-[1.5px] border-gray-500 my-2 max-md:hidden' />


                {/* tax and Other */}
                <div className='flex-wrap'>
                  <p>
                    Inclusive of all taxes
                  </p>
                  <p>
                    EMI starts at {viewProduct.emi} per month.
                  </p>
                  <p className='flex gap-2 text-[#007A8E] hover:underline hover:cursor-pointer'>
                    <span className='font-bold'> EMI </span> options <RiArrowDropDownLine className='text-[30px]' />
                  </p>
                </div>

                <hr className='border-[1.5px] border-gray-500 my-2 max-md:hidden' />

                {/* Offres */}

                <div>
                  <div className='flex my-4 gap-5'>
                    <MdLocalOffer className='mt-[2px] text-[20px]' /> <span className='font-bold'> Offers </span>
                  </div>
                </div>

                {/* bank offer card */}
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>
                  <div>
                    <div className='hover:cursor-pointer rounded-[18px] shadow-md mb-5  shadow-[white]'>
                      <div className='p-5 max-md:text-[18px] text-[16px] flex-wrap border rounded-[15px]'>
                        <p>
                          Bank Offer
                        </p>
                        <p className='mt-2'>
                          Upto ₹2,000.00 discount on select…
                        </p>
                        <p className='text-[#007A8E] hover:underline  flex gap-1 mt-8'>
                          5 offers <FaGreaterThan className='text-[12px] mt-[7px] font-extralight' />
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* partner offer card */}
                  <div>
                    <div className='hover:cursor-pointer rounded-[18px] shadow-md mb-5  shadow-[white]'>
                      <div className='p-5 max-md:text-[18px] text-[16px] flex-wrap border rounded-[15px]'>
                        <p>
                          Partner Offer
                        </p>
                        <p className='mt-2'>
                          Get GST invoice and save up to 28% on…
                        </p>
                        <p className='text-[#007A8E] hover:underline  flex gap-1 mt-8'>
                          5 offers <FaGreaterThan className='text-[12px] mt-[7px] font-extralight' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      }


      {/* Footer */}
      <div className="mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}

export default Product