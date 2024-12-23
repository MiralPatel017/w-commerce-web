import { useState } from "react";
import Footer from "./Footer";


// eslint-disable-next-line react/prop-types
const ContectUs = ({ darkMode }) => {
  // first name
  const [firstName, setFirstName] = useState("");
  // last name
  const [lastName, setLastName] = useState("");
  // email
  const [email, setEmail] = useState("");
  // message
  const [message, setMessage] = useState("");
  // mobile number
  const [mobileNumber, setMobileNumber] = useState("");




  return (
    <div className={darkMode ? " text-white " : "bg-slate-400 text-black"}>

      {/* form */}
      <div className="w-[1200px]  md:w-[100%] max-sm:mx-0 max-md:mx-0 max-sm:w-[100%] mx-auto p-[20px] rounded">
        <div className="w-[600px] max-md:w-[100%] max-sm:w-[100%] mx-auto p-[20px] max-sm:mx-0 max-md:mx-0 rounded">
          <h1 className="text-3xl text-center font-bold mb-[20px]">Contact Us</h1>

          <form className="flex flex-col border p-11 rounded-lg"
            onSubmit={(e) => {
              e.preventDefault()
              alert(`name: ${firstName} ${lastName}, \nemail: ${email}, \nmobile: ${mobileNumber}, \nmessage: ${message}`)
            }
            }>
            {/* first name */}
            <div className="flex flex-col mb-[20px]">
              <label className="text-lg font-semibold mb-[10px]">First Name:</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                className="w-[100%] h-[40px] p-[10px] border-none focus:border-transparent rounded"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* last name */}
            <div className="flex flex-col mb-[20px]">
              <label className="text-lg font-semibold mb-[10px]">Last Name:</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[100%] h-[40px] p-[10px] border-none"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-[20px]">
              <label className="text-lg mb-[10px] font-semibold">Email:</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-[100%]  h-[40px] p-[10px] rounded mb"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* mobile number */}
            <div className="flex flex-col mb-[20px]">
              <label className="text-lg mb-[10px] font-semibold">Mobile Number:</label>
              <input
                type="number"
                placeholder="+91 8565452310"
                className="w-[100%]  h-[40px] p-[10px] rounded mb"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>

            {/* message */}
            <div className="flex flex-col mb-[20px]">
              <label className="text-lg mb-[10px] font-semibold">Message:</label>
              <textarea
                placeholder="Type your message here..."
                className="w-[100%] h-[100px] p-[10px] rounded mb"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="bg-white text-black w-[25%] mx-auto py-[10px] border-2 border-black rounded-[20px]  hover:bg-black hover:text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* footer */}
      <div className="mt-[80px]">
        <Footer />
      </div>
    </div >
  );
}

export default ContectUs;