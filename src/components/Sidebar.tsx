import React, { useState } from "react";
import { dashboard } from "../constants/Dashbord";
import RoutetypeMaster from "./RoutetypeMaster";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-screen">
      <div className="flex w-full h-screen">
        <button onClick={() => setOpen(!open)}>
          <div
            className={`${
              open ? "w-36" : "w-20"
            } h-full bg-blue transition-all duration-300`}
          >
            <div>
              {dashboard.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center p-4 hover:bg-gray-200 cursor-pointer"
                >
                  {open ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="text-black w-6 h-6 mt-3 "
                      />
                      <span className="text-[12px] text-white">
                        {item.title}
                      </span>
                    </>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-6 h-6 mr-3 text-black"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </button>
        <div className="right-side flex-grow overflow-y-auto">
            <RoutetypeMaster/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
