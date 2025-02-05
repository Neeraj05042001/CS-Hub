const Header = () => {
  return (
    <div className="flex justify-between mt-5 mx-[70px]  items-center">
      <div className="">
        <img alt="Logo" src="Logo.svg" />
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
      <nav className="w-108 h-13 rounded-[80px] bg-[#F1F1F1] py-2.5 px-10 gap-12 cursor-pointer shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.1)]">
        <ul className="flex justify-between text-lg text-[#131313] ">
          <li className="nav-1  font-bold">Home</li>
          <li>Olympiad</li>
          <li>CBSE</li>
          <li>CUET</li>
        </ul>
      </nav>
      <button className=" text-[18px] w-24 h-8 rounded-[50px] py-[3px] px-[15px] bg-[#FBC108] flex items-center ">
       Login <span className="pl-2"> <img alt="logo" src="login-img.svg" /> </span>
      </button>
    </div>
  );
};
export default Header;


