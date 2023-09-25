import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Frontpage = () => {

    const navigate = useNavigate();
    const [click,setclick] = useState(false);

    // handlesubmit for loan button
    
    const HandleSubmit = () =>{
        setclick(!click);
    };


  return (
    <div className="h-100vh">
        {/* 2 circles */}
        <div className="w-4 h-4 mt-2 ml-16 rounded-full bg-orange-500"></div>
        <div className="w-16 ml-3 h-16 rounded-full bg-blue-800"></div>

        {/* Hero section with image text */}
        <div className="flex lg:flex-row flex-col justify-center p-10 md:gap-24 gap-12 items-center">   
                {/* Loan image */}
                <div className="w-72 h-72 rounded-full bg-blue-800">
                        <img src="../../images/loangirl.png" className="w-full"></img>
                </div>
                    
                {/* text after image */}
                <div className="flex flex-col justify-center md:gap-2 gap-4">
                    <h1 className="font-bold text-[40px] leading-[44px] ">Place for Getting Student Loan</h1>
                    <p className=" text-slate-800 md:text-[24px] text-[20px]">We provide the Best Loan Offer for Student With Flexible Conditions</p>
                </div>
        </div>


            {/* Button for opening the loan section */}

            <button className="md:m-10 m-7 shadow-lg bg-blue-800 text-white text-2xl w-14 h-14 text-center rounded-2xl"  onClick={HandleSubmit}>&gt;</button>


            {/* if button is clicked new main div for loan opened else won't */}

            {click && (
                
                navigate('/Loan')
                
            )}

    </div>
  )
}

export default Frontpage
