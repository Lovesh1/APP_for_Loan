

const Loanpage = () => {

    const loan = [
        {label:'Policy', numb: 2, imgsrc:'../../images/policy.png'},
        {label:'Post Graduation', numb: 3, imgsrc:'../../images/graduation.png'},
        {label:'Static', numb: 4, imgsrc:'../../images/static.png'},
    ];

  return (
    // just eaxtra div for baground color
    <div className="loanpage">
    
    {/* internal div to hold all other divs or sections */}
    <div className="p-5">

        {/* top heading */}
        <h2 className="font-bold lg:text-[40px] mb-2 text-[25px]">Get Loan</h2>

        {/* middle section where amount be choosen and review approval progress bar */}
        <div className="p-3 bg-blue-800 rounded-lg shadow-2xl">
            {/* just upper headings */}
            <h2 className="text-slate-400 p-1">Maximum Amount</h2>
            <h1 className="text-3xl text-white pt-1">$500000</h1>

            {/* below progress bar */}
            
            <div className="bg-slate-400 h-[3px] mt-12 flex justify-center">
                    
                    <div className="text-white flex flex-col">
                        <input type="radio"></input>
                        Apply
                    </div>
                    <div className="text-white flex flex-col">
                        <input type="radio"></input>
                        Apply
                    </div>
                    <div className="text-white flex flex-col">
                        <input type="radio"></input>
                        Apply
                    </div>

                </div>


                {/* button for the loan apply */}
            <div className="flex justify-center mt-16 mb-4"><button className="text-center p-3 rounded-xl shadow-lg text-white border border-slate-200 ">Apply Now</button></div>

        </div>

        
        {/* middle heading */}
         <h3 className="font-bold lg:text-[30px] mt-2 t-[16px]">Recommended Loan</h3>

         {/* All the 3 cards  */}
         <div className="flex lg:flex-row flex-col justify-between ">
        {loan.map((lon,index) => (<div className=" mt-2 p-3 shadow-xl rounded-xl bg-slate-200" key={index}>
                <div className="flex gap-2">
                    {/* icon and text */}
                    <div className="w-10"><img src={lon.imgsrc} className="rounded-xl"></img></div>

                    <div className="flex flex-col">
                        <h2 className="font-bold text-[28px]">{lon.label} Loan</h2>
                        <p className="text-slate-400 pl-2">Lowest interest as low as {lon.numb}</p>
                    </div>

                </div>
                    {/* 3 subsections for price interst and applynow button */}

                    <div className="flex gap-10 mt-4">
                        {/* for loan price */}
                        <div className="flex flex-col">
                            <h2 className="font-bold text-[20px]">{20000}</h2>
                            <p className="text-slate-400">Maximum amount</p>
                        </div>

                        {/* for interest */}

                        <div className="flex flex-col">
                            <h2 className="font-bold text-[20px]">{lon.numb}</h2>
                            <p className="text-slate-400">Interest</p>
                        </div>

                        {/* for apply button */}

                        <div><button className="p-1 lg:p-3 lg:rounded-xl rounded-md text-white bg-blue-500">Apply Now</button></div>
                    </div>
                    
                
  </div>
  ))}
  </div>
    </div>
    </div>
  )
}

export default Loanpage
