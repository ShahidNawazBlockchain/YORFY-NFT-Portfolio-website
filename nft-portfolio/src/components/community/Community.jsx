import React from "react";
import "./style.css";

function Community() {
  return (
    <>
      <div class="w-full h-[504px] relative ">
        <div class="w-[400px] h-[400px] left-[1077px] top-[104px] absolute opacity-50 bg-purple-600 rounded-full blur-[240px]"></div>
        <div class="w-[400px] h-[400px] left-0 top-0 absolute opacity-50 bg-blue-600 rounded-full blur-[240px]"></div>
      </div>
      <div class="relative">
        <div class="w-[504px] h-[296px] left-[712px] top-[24px] absolute">
          <div class="w-[424px] h-[88px] p-4 left-[80px] top-[208px] absolute opacity-50 bg-blue-950 rounded-lg justify-start items-center gap-4 inline-flex">
            <div class="w-14 h-14 bg-zinc-300 rounded-full"></div>
            <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div class="self-stretch text-white text-base font-bold font-['Poppins'] leading-loose">
                ShooPharDhie
              </div>
              <div class="self-stretch text-gray-200 text-xs font-normal font-['Poppins'] leading-normal">
                Last Online 2 Hour Ago
              </div>
            </div>
            <div class="w-6 h-6 relative"></div>
          </div>
          <div class="w-[424px] h-[88px] p-4 left-[40px] top-[104px] absolute opacity-70 bg-blue-950 rounded-lg shadow justify-start items-center gap-4 inline-flex">
            <div class="w-14 h-14 bg-zinc-300 rounded-full"></div>
            <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div class="self-stretch text-white text-base font-bold font-['Poppins'] leading-loose">
                ShooPharDhie
              </div>
              <div class="self-stretch text-gray-200 text-xs font-normal font-['Poppins'] leading-normal">
                Last Online 2 Hour Ago
              </div>
            </div>
            <div class="w-6 h-6 relative"></div>
          </div>
          <div class="w-[424px] h-[88px] p-4 left-0 top-0 absolute bg-blue-950 rounded-lg shadow justify-start items-center gap-4 inline-flex">
            <div class="w-14 h-14 bg-zinc-300 rounded-full"></div>
            <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div class="self-stretch text-white text-base font-bold font-['Poppins'] leading-loose">
                ShooPharDhie
              </div>
              <div class="self-stretch text-gray-200 text-xs font-normal font-['Poppins'] leading-normal">
                Last Online 2 Hour Ago
              </div>
            </div>
            <div class="w-6 h-6 relative"></div>
          </div>
        </div>
        <div class="w-[656px] h-[344px] left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
          <div class="flex-col justify-start items-start gap-4 flex">
            <div class="w-[656px] text-blue-400 text-base font-bold font-['Poppins'] leading-loose">
              Community
            </div>
            <div class="w-[656px] text-white text-[56px] font-bold font-['Poppins'] leading-[72px]">
              Join Our Community and Get Many Benefits
            </div>
            <div class="w-[656px] text-gray-200 text-base font-normal font-['Poppins'] leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div class="px-10 py-2 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
            <div class="text-white text-base font-semibold font-['Poppins'] leading-loose">
              Join Our Discord
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
