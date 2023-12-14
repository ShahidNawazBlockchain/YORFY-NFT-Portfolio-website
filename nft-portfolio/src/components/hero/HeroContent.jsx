import React from "react";
import Face from "../../assets/hero/faces.png";

function HeroContent() {
  return (
    <div className="flex lg:flex-row flex-col  lg:pb-11">
      <div class="w-[560px] pl-6 h-[396px] flex-col justify-start items-start gap-10 inline-flex">
        <div class="h-[368px] flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch text-blue-400 text-base font-bold font-['Poppins'] leading-loose">
            Welcome to Yorfy
          </div>
          <div class="self-stretch text-white text-[64px] font-bold font-['Poppins'] leading-[80px]">
            Now Available, Meet Yorfy NFT Collection ⭐️
          </div>
          <div class="self-stretch text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div class="self-stretch justify-start items-start gap-10 inline-flex">
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-white text-[40px] font-bold font-['Poppins'] leading-[56px]">
              546
            </div>
            <div class="text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
              NFT Items
            </div>
          </div>
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-white text-[40px] font-bold font-['Poppins'] leading-[56px]">
              42
            </div>
            <div class="text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
              Owners
            </div>
          </div>
          <div class="flex-col justify-start items-start inline-flex">
            <div class="text-white text-[40px] font-bold font-['Poppins'] leading-[56px]">
              378
            </div>
            <div class="text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
              Items Sold
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-end h-[500px]">
        <div className="w-[480px] mx-auto border-blue-600 border-2 rounded-lg h-52 relative">
          <div className="w-[403px] h-[368px] absolute top-[-120%] left-[50%] translate-x-[-50%] rounded-lg">
            <img className="block h-full w-full" src={Face} alt="faces" />
          </div>
          <div className="flex justify-center items-end gap-5 h-full p-5">
            <button className="hover:bg-inherit hover:border bg-blue-500 block h-[48px] w-[214px] rounded-lg ">
              <h1 className="text-white text-base font-semibold font-['Poppins'] leading-loose">
                Buy an open sea
              </h1>
            </button>
            <button className="hover:bg-blue-500 hover:border-none border block h-[48px] w-[214px] rounded-lg">
              <h1 className="text-white text-base font-semibold font-['Poppins'] leading-loose">
                Know more
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
