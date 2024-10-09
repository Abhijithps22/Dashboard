const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
      <div className="w-full">
      <ul className="flex flex-row sm:text-[14px] text-[8px] cursor-pointer sm:w-[1200px] flex-wrap gap-2 sm:gap-3">
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
       <div className="leftside-profile flex items-center gap-2 sm:flex-nowrap">
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
