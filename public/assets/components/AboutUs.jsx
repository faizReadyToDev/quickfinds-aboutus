import React from "react";



export default function AboutUs(){
    return(
        <>
            <div className="bg-[#D1FFD1] h-[837px] w-[1440px] mx-auto">
                <nav className="flex justify-between  items-center pt-[5px] pr-[100px] pb-[5px] pl-[126px] h-[80px] w-[1440px]">
                    <div className="p[10px] gap-[10px]">logo</div>
                    <div className="p[10px] gap-[10px]">logo</div>
                    <ul className="flex gap-[15.52px] items-center pt-[8px] pr-[48px] pb-[8px] pl-[48px]">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li><button className="bg-[#51B504] text-white p-[10px] ">Contact Us</button></li>
                    </ul>
                </nav>
                <div>
                    <div>
                        <h1>Innovation solutions</h1>
                        <h1>for a better world!</h1>
                        <p>
                        We help businesses like yours earn more customers, standout from competitors,  make more money
                        </p>
                        
                    </div>
                    <div></div>

                </div>
            </div>


        </>
    )
}