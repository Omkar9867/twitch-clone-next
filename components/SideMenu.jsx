import React from "react";
import { rec_channels, top_channels } from "@/data/MOCK_DATA";
import { RiMovieLine } from "react-icons/ri";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const SideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10] overflow-auto scroll-m-1">
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm pb-4">
          Top Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {top_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.userame}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p>{item.userame}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot size={40} color="red" />
              {item.rank}K
            </p>
          </div>
        </div>
      ))}
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm py-4">
          Recommended Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.userame}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p>{item.userame}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot size={40} color="red" />
              {item.rank}K
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
