import React from "react";
import "./style.css";
import First from "../../assets/collection/first.png";
import Second from "../../assets/collection/second.png";
import Third from "../../assets/collection/third.png";
import Logo from "../../assets/navbar/Logo.png";

function Collections() {
  return (
    <div class="w-full flex-col justify-start items-center gap-10 inline-flex img p-[72px]">
      <div class="h-[200px] flex-col justify-start items-start gap-4 flex">
        <div class="self-stretch text-center text-blue-400 text-base font-bold font-['Poppins'] leading-loose">
          Collection
        </div>
        <div class="self-stretch text-center text-white text-[56px] font-bold font-['Poppins'] leading-[72px]">
          Yorfy NFT Collections
        </div>
        <div class="self-stretch text-center text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="justify-start items-start gap-4 inline-flex">
        <div class="p-6 rounded-lg border border-blue-600 flex-col justify-start items-start gap-6 inline-flex">
          <img class="w-80 h-80 rounded-lg" src={First} />
          <div class="w-80 justify-start items-start gap-4 inline-flex">
            <div class="w-10 h-10 relative">
              <div class=" ">
                <img src={Logo} alt="" className="w-10 h-10 rounded-full" />
              </div>{" "}
            </div>
            <div class="grow shrink basis-0 text-white text-2xl font-bold font-['Poppins'] leading-10">
              YorNoose #432
            </div>
          </div>
        </div>
        <div class="p-6 rounded-lg border border-blue-600 flex-col justify-start items-start gap-6 inline-flex">
          <img class="w-80 h-80 rounded-lg" src={Second} />
          <div class="w-80 justify-start items-start gap-4 inline-flex">
            <div class="w-10 h-10 relative">
              <div class=" ">
                <img src={Logo} alt="" className="w-10 h-10 rounded-full" />
              </div>
            </div>
            <div class="grow shrink basis-0 text-white text-2xl font-bold font-['Poppins'] leading-10">
              YorHayr #332
            </div>
          </div>
        </div>
        <div class="p-6 rounded-lg border border-blue-600 flex-col justify-start items-start gap-6 inline-flex">
          <img class="w-80 h-80 rounded-lg" src={Third} />
          <div class="w-80 justify-start items-start gap-4 inline-flex">
            <div class="w-10 h-10 relative">
              <div class=" ">
                <img src={Logo} alt="" className="w-10 h-10 rounded-full" />
              </div>
            </div>
            <div class="grow shrink basis-0 text-white text-2xl font-bold font-['Poppins'] leading-10">
              YorMwoth #765
            </div>
          </div>
        </div>
      </div>
      <div class="px-10 py-2 rounded-lg border border-white justify-center items-center gap-2 inline-flex">
        <div class="text-white text-base font-semibold font-['Poppins'] leading-loose">
          View on OpenSea
        </div>
      </div>
    </div>
  );
}

export default Collections;
