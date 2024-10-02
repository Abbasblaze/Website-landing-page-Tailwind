function Header() {
    return ( 
        <>
        <div className="flex justify-between items-center mt-6 ">
            <div className="">
                <h1 className="px-20 text-6xl font-extrabold	">Building digital <br/> products & brands.</h1>
                <p className="px-20 text-sm mt-5">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="px-20 gap-5 mt-5">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">Start 30 day free trial</button>
                <button className="border-2 text-black px-6 py-2 rounded-lg hover:bg-white-700 ml-3 ">Pricing & FAQ</button>
                </div>
           
            </div>
            <img src="src/assets/marketing-strategy 1.png" alt=""  className=""/>

        
        </div>
        </>
     );
}

export default Header;