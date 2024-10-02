function Trusted() {
    return ( 
        <>
         <div className=" bg-white p-10 ml-20 ">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      
        <div className="mt-4">
          <p className="  text-purple-600  font-medium mb-5 uppercase">Worldwide</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Trusted by over 600 million users <br/> and 10,000 teams
          </h2>
          <p className="text-gray-600 mt-4 border-b-2  pb-5">
          Our rigorous security and compliance standards are at the heart of <br/> all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="grid grid-cols-1 mt-4 gap-3">
            <a href="#" className="text-purple-600 hover:underline">Explore Legality Guide →</a>
            <a href="#" className="text-purple-600 hover:underline">Visit the Trust Center →</a>
          </div>
        </div>

       
        <div className="grid grid-cols-2 gap-6 pb-10">
       
          <div className="  items-center    ">
            <i className="ri-server-line text-purple-600 text-4xl"></i>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mt-5">99.99% uptime</h4>
              <p className="text-gray-500 mt-3">for Flowbite, with zero <br/> maintenance downtime</p>
            </div>
          </div>
          <div className=" items-center mt-4">
            <i className="ri-user-3-line text-purple-600 text-4xl "></i>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mt-5">600M+ Users</h4>
              <p className="text-gray-500 mt-3">trusted by over 600 million users <br/>around the world</p>
            </div>
          </div>
          <div className=" items-center mt-4">
            <i className="ri-shopping-cart-line text-purple-600 text-4xl "></i>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mt-5">Millions</h4>
              <p className="text-gray-500 mt-3">of transactions per day</p>
            </div>
          </div>
          <div className=" items-center mt-4">
            <i className="ri-earth-line text-purple-600 text-4xl "></i>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mt-5">100+ countries</h4>
              <p className="text-gray-500 mt-3">have used Flowbite to create <br/> functional websites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}

export default Trusted;