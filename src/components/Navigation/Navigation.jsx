function Navigation() {
  return (
    <>
  <div className=" max-w-7xl w-full m-auto flex justify-between items-center my-7 mx-20">
    <div className="flex items-center">
      <img src="src/assets/logo (1).png" alt="Logo" className="mr-2" />
      <span className="text-lg font-bold">Landwind</span>
      <div className="flex gap-8 text-base ml-6">
      <a href="#" className="hover:text-gray-700">Company</a>
      <a href="#" className="hover:text-gray-700">Marketplace</a>
      <a href="#" className="hover:text-gray-700">Features</a>
      <a href="#" className="hover:text-gray-700">Team</a>
      <a href="#" className="hover:text-gray-700">Contact</a>
    </div>
    </div>

    <div className="flex items-center justify-end gap-4">
      <a href="#" className="font-medium text-gray-700 hover:text-indigo-500">Log In</a>
      <button
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Get started
      </button>
    </div>
  </div>


    </>
  );
}

export default Navigation;
