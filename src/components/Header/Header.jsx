function Header() {
  return (
    <>
     <div className="flex flex-col md:flex-row justify-around items-center mt-6">
  <div className="w-full md:w-1/2 order-1 md:order-2">
    <img src="src/assets/marketing-strategy 1.png" alt="" />
  </div>
  <div className="text-center md:text-left mt-6 md:mt-0 md:w-1/2 order-2 md:order-1">
    <h1 className="px-4 md:px-20 text-4xl md:text-6xl font-extrabold">
      Building digital <br /> products & brands.
    </h1>
    <p className="px-4 md:px-20 text-sm mt-5">
      Here at flowbite we focus on markets where technology, innovation,
      and capital can unlock long-term value and drive economic growth.
    </p>
    <div className="px-4 md:px-20 gap-5 mt-5 flex flex-col md:flex-row items-center md:items-start">
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
        Start 30 day free trial
      </button>
      <button className="hidden md:block border-2 text-black px-6 py-2 rounded-lg hover:bg-white-700 mt-3 md:mt-0 md:ml-3">
        Pricing & FAQ
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
