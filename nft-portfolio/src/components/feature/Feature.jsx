import React from "react";
import Logo from "../../assets/navbar/Logo.png";
import Faces from "../../assets/Featured/faces.png";
import "./style.css";
function Feature() {
  return (
    <div
      class="w-full  flex-col justify-start items-center gap-10
      inline-flex bg-blue-750 p-[72px] img"
    >
      <div class=" flex-col justify-start items-start gap-4 flex">
        <div class="self-stretch text-center text-blue-400 text-base font-bold font-['Poppins'] leading-loose">
          Featured
        </div>
        <div class="self-stretch text-center text-white text-[56px] font-bold font-['Poppins'] leading-[72px]">
          Hot Trending On This <br /> Week from Yorfy
        </div>
        <div class="self-stretch text-center text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="w-full p-10 bg-[#273A7B] rounded-2xl justify-center items-center gap-10 inline-flex">
        <div class="w-[272px] flex-col justify-center items-center gap-4 inline-flex">
          <div class="w-20">
            <div class="  ">
              <img src={Logo} className="w-[80px]  rounded-full" alt="" />
            </div>
          </div>
          <div class="self-stretch text-center text-white text-[40px] font-bold font-['Poppins'] leading-[56px]">
            YorEyes #234
          </div>
          <div class="self-stretch text-center text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <img class="w-[400px]  rounded-lg" src={Faces} />
        <div class="w-[272px] flex-col justify-center items-center gap-4 inline-flex">
          <div class="self-stretch text-center text-white text-[40px] font-bold font-['Poppins'] leading-[56px]">
            Interesting with This Item?
          </div>
          <div class="self-stretch text-center text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="px-10 py-2 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
            <div class="text-white text-base font-semibold font-['Poppins'] leading-loose">
              Buy on OpenSea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
