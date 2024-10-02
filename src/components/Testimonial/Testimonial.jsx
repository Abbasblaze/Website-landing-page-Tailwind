function Testimonial() {
    return ( 
        <>
        <div className="bg-gray-100 flex justify-center items-center p-10">
      <div className="max-w-7xl   rounded-lg p-8 text-center">
        <div className="flex justify-center items-center">
          <span><img src="src/assets/Que.png" alt="" className="" /></span>
        </div>
        <p className="text-2xl text-gray-900 font-semibold mt-4">
          Flowbite is just awesome. It contains tons of predesigned <br/> components
          and pages starting from login screen to complex<br/>  dashboard. Perfect
          choice for your next SaaS application.
        </p>
        <div className="flex justify-center items-center mt-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Micheal Gough"
          />
          <div className="ml-4 flex text-left gap-3 mt-4">
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