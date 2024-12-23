// import React from 'react'

import Footer from "./Footer"

// eslint-disable-next-line react/prop-types
const AboutUs = ({darkMode}) => {

  const datas = [
    {
      id: 1,
      title: "Our Journey",
      dis1: "At Vortica, our story began in 2012 with a vision to transform the way families shop for fashion. We set out to create a one-stop destination where men, women, and kids could find stylish, high-quality apparel that fits every occasion and budget. Starting as a small initiative, we quickly grew into a trusted brand known for blending affordability with the latest trends.",
      dis2: "Over the years, we’ve proudly served countless families, becoming a part of their everyday moments and special celebrations. Our commitment to quality, customer satisfaction, and innovation has been the cornerstone of our success. Today, as we continue to grow, we remain dedicated to bringing you the best in family fashion, ensuring every member feels confident and stylish.",
      dis3: "This is more than just a journey – it’s a promise to make your fashion choices effortless, affordable, and unforgettable. Thank you for being a part of our story!",
      image: "about.png"
    }
  ]

  return (
    <div  className={darkMode ? " text-white " : "bg-white text-black"}>

      {/* main container */}
      <div className="w-full max-w-[1200px] mx-auto my-[100px] px-4">
        {datas.map((data, index) => (
          <div key={index}>
            {/* First Container */}
            <div className="font-bold">
              <h1 className="text-[30px] text-center md:text-left">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start my-[20px] mb-[100px] space-y-6 md:space-y-0">
              <div className="w-full md:w-[60%] text-[20px] leading-[30px] px-2 md:px-0">
                <p className="text-[18px] text-justify my-[20px]">{data.dis1}</p>
                <p className="text-[18px] text-justify my-[20px]">{data.dis2}</p>
                <p className="text-[18px] text-justify my-[20px]">{data.dis3}</p>
              </div>
              <div className="w-full md:w-[40%] flex justify-center md:justify-end">
                <img src={data.image} alt="" className="w-[80%] md:w-[70%] relative" />
              </div>
            </div>

            {/* Second Container */}
            <div className="font-bold">
              <h1 className="text-[30px] text-black text-center md:text-left">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start my-[20px] space-y-6 md:space-y-0">
              <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                <img src={data.image} alt="" className="w-[80%] md:w-[70%]" />
              </div>
              <div className="w-full md:w-[60%] text-[20px] leading-[30px] px-2 md:px-0">
                <p className="text-[18px] text-justify my-[20px]">{data.dis1}</p>
                <p className="text-[18px] text-justify my-[20px]">{data.dis2}</p>
                <p className="text-[18px] text-justify my-[20px]">{data.dis3}</p>
              </div>
            </div>

            {/* Third Container */}
            <div className="font-bold">
              <h1 className="text-[30px] text-black text-center md:text-left">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center my-[20px] space-y-6 md:space-y-0 md:space-x-6">
              <div className="w-full md:w-[52%] flex justify-center md:justify-start">
                <img src={data.image} alt="" className="w-[85%]" />
              </div>
              <div className="w-full md:w-[60%] text-[14px] leading-[25px] px-2 md:pr-[50px]">
                <p className="text-justify my-[9px]">{data.dis1}</p>
                <p className="text-justify my-[9px]">{data.dis2}</p>
                <p className="text-justify my-[9px]">{data.dis3}</p>
              </div>
              <div className="w-full md:w-[40%] flex justify-center md:justify-end">
                <img src="image11.png" alt="" className="w-[400px]" />
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* footer */}
      <div className="mt-[80px]">
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs