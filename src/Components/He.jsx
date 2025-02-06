const SimpleResponsiveHeader = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto">
        {/* iPhone 13 mini Layout (default) */}
        <div className="md:hidden h-7 mt-6 mx-7.5  flex items-center justify-between min-[430px]:hidden ">
          {/* Logo */}

          <div className=" W-[269px] h-7 rounded-[46.67px] py-[5.83px] px-2.5 gap-1.5 bg-[#F1F1F1]   flex  items-center shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.1)]">
            <img
              alt="search"
              src="search.svg"
              className="w-[18px] h-[18px] mx-2"
            />

            <input
              type="text"
              placeholder="Search here"
              className="font-sans text-[16px] font-normal text-[#131313] opacity-60 pl-4 w-full border-none outline-none -ml-5"
            />
          </div>
          <div className="w-6.5 h-6.5 rounded-[40px] p-2 gap-2.5 bg-[#F1F1F1]">
            <img alt="cancel-icon" src="cross.svg" />
          </div>
        </div>

        {/* iPhone 14 Pro Max Layout */}
        <div className="@container w-full mt-6 ml-14  ">
          <div className=" hidden [@media(min-width:430px)_and_(max-width:1023px)]:flex justify-between items-center">
            {/* Logo */}
            <div className="w-19.5 h-[30.75px]">
              <img
                src="Logo.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-[27.08px] h-[27px] rounded-[70px] p-2 gap-2.5 bg-[#F1F1F1]">
              <img alt="search-logo" src="i13mini-search-icon.svg" />
            </div>

            <div className="w-7.5 h-4.5 mr-14">
              <img alt="menu" src="i13mini-menu.svg" />
            </div>
          </div>
        </div>
        {/* Desktop/Laptop Layout */}
        <div className="hidden lg:flex items-center justify-between max-w[1301px] mt-5 mx-17.5">
          {/* Logo */}
          <div className="w-[120px] h-[45px]">
            <img
              src="Logo.svg"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <div className="bg-[#F1F1F1] w-125 h-13 rounded-[80px] flex  items-center search shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.1)]">
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
          </div>

          <nav className="w-108 h-13 rounded-[80px] bg-[#F1F1F1] py-2.5 px-10 gap-12 cursor-pointer shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.1)] ">
            <ul className="flex justify-between text-lg text-[#131313] nav-items ">
              <li className="nav-1  font-bold">Home</li>
              <li>Olympiad</li>
              <li>CBSE</li>
              <li>CUET</li>
            </ul>
          </nav>

          <div>
            <button className=" text-[18px] w-24 h-8 rounded-[50px] py-[3px] px-[15px] bg-[#FBC108] flex items-center cursor-pointer ">
              Login
              <span className="pl-2">
                <img alt="logo" src="login-img.svg" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleResponsiveHeader;
