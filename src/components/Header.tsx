import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
      <div>
      <ul className="flex flex-row space-x-4 text-[14px] cursor-pointer sm:w-[1200px] w-full flex-wrap">
          <li className="rounded-xl border-blue border pl-3 pr-3 bg-blue text-white hover:bg-blue active:bg-blue">
            Front office
          </li>

          <li className="rounded-xl border-blue border pl-3 pr-3  hover:bg-blue">
            POS
          </li>
          <li className="rounded-xl border-blue border pl-3 pr-3  hover:bg-blue">
            House Keeping
          </li>
          <li className="rounded-xl border-blue border pl-3 pr-3  hover:bg-blue">
            Laundry
          </li>
          <li>General Master Settings</li>
        </ul>
      </div>
       <div className="leftside-profile flex gap-3 items-center">
            <h3>Profile</h3>
            <div className="rounded-lg w-12">
                <img src="/assets/image.png" alt="Hello" />
            </div>
       </div>
      </div>
    </div>
  );
};

export default Header;
