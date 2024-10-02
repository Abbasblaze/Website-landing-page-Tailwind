function Footer() {
    return ( 
        <>
        <div className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          
          {/* Column 1: Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4">COMPANY</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">About</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Premium</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Get Coupon</a></li>
            </ul>
          </div>

          {/* Column 2: Help and Support */}
          <div>
            <h6 className="text-lg font-semibold mb-4">HELP AND SUPPORT</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Knowledge Center</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Premium Support</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Sponsorships</a></li>
            </ul>
          </div>

          {/* Column 3: Learning */}
          <div>
            <h6 className="text-lg font-semibold mb-4">LEARNING</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Learn Hub</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Manuals</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Communities</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h6 className="text-lg font-semibold mb-4">RESOURCES</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Third-Party Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Illustrations</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Themesberg</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Bluehost</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Stock Photos</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h6 className="text-lg font-semibold mb-4">LEGAL</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">EULA</a></li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center mt-8">
            <div className="flex">
            <img src="src/assets/logo (1).png" alt="Logo" className="mr-2" />
            <span className="text-lg font-bold">Landwind</span>
            </div>
      
          <div className="text-gray-600 text-sm mt-3">
            <span>© 2022 Flowbite, Inc. All rights reserved.</span>
          </div>
          <div className="flex space-x-4 mt-5 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="ri-github-fill"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="ri-twitter-fill"></i><i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="ri-globe-line"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
            <i className="ri-facebook-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}

export default Footer;