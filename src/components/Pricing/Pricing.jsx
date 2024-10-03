function Pricing() {
    return ( 
        <>
           <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pay as you grow</h2>
        <p className="mt-4 text-lg leading-6 text-gray-900">
          Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Starter Plan */}




        <div className="border border-gray-200 rounded-lg shadow-sm p-8  ">
          <h3 className="text-2xl flex justify-center items-center font-bold leading-6 text-gray-900">Starter</h3>
          <p className="mt-4 text-lg text-center text-gray-500">Great for personal use and for your side projects.</p>
          <div className="mt-8 flex justify-left items-center">
            <div className="text-4xl font-extrabold text-gray-900">$49</div>
            <div className="mt-2 text-sm text-gray-500">/month</div>
          </div>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Individual configuration</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">No setup, monthly, or hidden fees</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Team size: <span className="font-bold">1 developer</span></p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Premium support: <span className="font-bold"> 6 months</span></p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Free updates: <span className="font-bold"> 6 months</span>  </p>
            </li>
          </ul>
          <div className="mt-8">
            <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg">Get started</button>
          </div>
        </div>

        {/* Company Plan */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-8">
          <h3 className="text-2xl flex justify-center items-center font-bold leading-6 text-gray-900">Company</h3>
          <p className="mt-4 text-lg text-center text-gray-500">Best for large scale uses and rights.</p>
          <div className="mt-8 flex justify-left items-center">
            <div className="text-4xl font-extrabold text-gray-900">$99</div>
            <div className="mt-2 text-sm text-gray-500">/month</div>
          </div>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Individual configuration</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">No setup, monthly, or hidden fees</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Team size: <span className="font-bold">10 developers</span></p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Premium support: <span className="font-bold">24 months</span> </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Free updates: <span className="font-bold">24 months</span></p>
            </li>
          </ul>
          <div className="mt-8">
            <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg">Get started</button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-8">
          <h3 className="text-2xl flex justify-center items-center font-bold leading-6 text-gray-900">Enterprise</h3>
          <p className="mt-4 text-lg text-center font-normal text-gray-500">Best for large scale uses and  rights.</p>
          <div className="mt-8 flex justify-left items-center">
            <div className="text-4xl font-extrabold text-gray-900">$499</div>
            <div className="mt-2 text-sm text-gray-500">/month</div>
          </div>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Individual configuration</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">No setup, monthly, or hidden fees</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Team size: <span className="font-bold"> 100+ developers</span> </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Premium support: <span className="font-bold">36 months</span></p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500">&#10003;</span>
              <p className="ml-2 text-sm text-gray-900">Free updates: <span className="font-bold">36 months</span></p>
            </li>
          </ul>
          <div className="mt-8">
            <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg">Get started</button>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}

export default Pricing;