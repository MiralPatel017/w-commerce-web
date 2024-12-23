// import React from 'react'
import { Link } from "react-router";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-black text-white w-full py-[50px] px-4 md:px-[50px]">
                <div className="logo flex justify-center md:justify-start">
                    <img src="letter-m.png" alt="" className="bg-white w-[50px] rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
                    {/* First Column */}
                    <div>
                        <h3 className="font-bold text-[20px] mb-4 text-center md:text-left">
                            Product
                        </h3>
                        <ul className="leading-8 text-center md:text-left">
                            <li>Add Development</li>
                            <li>Web Development</li>
                            <li>DevOps</li>
                            <li>Web Design</li>
                        </ul>
                    </div>

                    {/* Second Column */}

                    <div>
                        <h3 className="font-bold text-[20px] mb-4 text-center md:text-left">
                            Social
                        </h3>
                        <ul className="leading-8 text-center md:text-left">
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <li>GitHub</li>
                            <li>Instagram</li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div>
                        <h3 className="font-bold text-[20px] mb-4 text-center md:text-left">
                            Quick Links
                        </h3>
                        <ul className="leading-8 text-center md:text-left">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Product">Product</Link>
                            </li>
                            <li>
                                <Link to="/ContectUs">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Column */}
                    <div>
                        <h3 className="font-bold text-[20px] mb-4 text-center md:text-left">
                            Address
                        </h3>
                        <ul className="leading-8 text-center md:text-left">
                            <li>53, 2nd Floor, Zion Elira IT Solutions, 4D Square Mall, Motera, Ahmedabad, Gujarat - 380005</li>
                            <li>Mobile</li>
                            <li>+91 98765 43210</li>
                            <li>Email</li>
                            <li>care@zionelira.com</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-10" />
                <div className="text-white">
                    <p className="text-center flex justify-center gap-3 items-center">
                        <FaCopyright /> 2024 Zion Elira. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer