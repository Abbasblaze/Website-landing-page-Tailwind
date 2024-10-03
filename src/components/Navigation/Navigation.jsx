function Navigation() {
  return (
    <>
  <div className="max-w-full w-full m-auto flex justify-between items-center my-7 ">
    <div className="flex items-center ml-20 md:mr-20 ">
  
  <img src="src/assets/logo (1).png" alt="Logo" className="mr-2" />
  <span className="text-lg font-bold">Landwind</span>


      <div className="hidden md:flex gap-8 text-base ml-6">
  <a href="#" className="hover:text-gray-700">Company</a>
  <a href="#" className="hover:text-gray-700">Marketplace</a>
  <a href="#" className="hover:text-gray-700">Features</a>
  <a href="#" className="hover:text-gray-700">Team</a>
  <a href="#" className="hover:text-gray-700">Contact</a>
</div>

    </div>

    <div className="hidden md:flex items-center justify-end gap-4 mr-20">
      <a href="#" className="font-medium text-purple-600 hover:text-purple-500">Log In</a>
      <button
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
      >
        Get started
      </button>

   
    </div>
    <button id="menu-button" className="p-2 md:hidden" >
        <i className="ri-menu-line text-black-600 font-bold text-2xl"></i>
      </button>
  </div>
    </>
  );
}

export default Navigation;
