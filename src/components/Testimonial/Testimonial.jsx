function Testimonial() {
    return ( 
        <>
<div className="bg-gray-100 flex justify-center items-center p-10">
  <div className="max-w-7xl rounded-lg p-8 text-center">
    <div className="flex justify-center items-center">
      <span>
        <img src="src/assets/Que.png" alt="" className="w-8 h-8 md:w-12 md:h-12" />
      </span>
    </div>
    <p className="text-xl md:text-2xl text-gray-900 font-semibold mt-4">
      Flowbite is just awesome. It contains tons of predesigned
      <br className="hidden md:inline" /> components and pages starting from login screen
      <br className="hidden md:inline" /> to complex dashboard. Perfect choice for your
      next SaaS application.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center mt-4">
      <img
        className="w-16 h-16 rounded-full"
        src="src/assets/Avatar.png"
        alt="Micheal Gough"
      />
      <div className="ml-0 mt-4 md:ml-4 md:mt-0 flex text-left gap-1 md:gap-3">
        <p className="text-gray-800 font-bold">Micheal Gough</p>
        <p className="font-bold">/</p>
        <p className="text-gray-500">CEO at Google</p>
      </div>
    </div>
  </div>
</div>


        </>
     );
}

export default Testimonial;