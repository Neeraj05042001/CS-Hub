const Headers = () => {
  return (
    <header>
      {/* Iphone 13 mini - 1 */}
      <div className="flex w-[315px] h-7 mt-6 mx-7.5 justify-between sm:hidden ">
        <div className=" W-[269px] h-7 rounded-[46.67px] py-[5.83px] px-2.5 gap-1.5 bg-[#F1F1F1]   flex  items-center shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.1)]">
          <img
            alt="search"
            src="search.svg"
            className="w-[22px] h-[22px] ml-6"
          />

          <input
            type="text"
            placeholder="Search here"
            className="font-sans text-[16px] font-normal text-[#131313] opacity-60 pl-4 w-full border-none outline-none"
          />
        </div>
        <div className="w-6.5 h-6.5 rounded-[40px] p-2 gap-2.5 bg-[#F1F1F1]">
          <img alt="cancel-icon" src="cross.svg" />
        </div>
      </div>

      {/* iphone 13 mini - 2 */}
      <div className="hidden sm:block md:hidde  h-[30.75px] mt-6 mx-7.5 ">
        <div className="flex items-center justify-between">
          <div className="w-19.5 h-[30.75px]">
            <img alt="logo" src="Logo.svg" />
          </div>
          <div className="w-[27.08px] h-[27px] rounded-[70px] p-2 gap-2.5 bg-[#F1F1F1]">
            <img alt="search-logo" src="i13mini-search-icon.svg" />
          </div>
          <div className="w-7.5 h-4.5">
            <img alt="menu" src="i13mini-menu.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
