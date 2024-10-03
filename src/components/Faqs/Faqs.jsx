function Faqs() {
    return ( 
        <>
 
 <div className="max-w-7xl mx-auto mt-10 mb-10 hidden sm:block">
    <h1 className="flex justify-center items-center text-4xl font-bold mb-6">Frequently asked questions</h1>

    <div className="max-w-3xl mx-auto">
        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between text-left text-lg font-medium text-gray-900">
                Can I use FlowBite in open-source projects?
                <span className="text-gray-500"><i className="ri-arrow-up-s-line"></i></span>
            </div>
            <p className="mt-2 text-gray-700">
                Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a <br/> UI library, a theme, a template, or a page-builder that would be considered an <br/> alternative to FlowBite itself.<br/>
                With that being said, feel free to use this design kit for your open-source projects.<br/> Find out more information by <a href="#" className="text-blue-500 underline">reading the license</a>.
            </p>
        </div>

        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between w-full text-left text-lg font-medium text-gray-900">
                Where can I access my download files?
                <span className="text-gray-500"><i className="ri-arrow-down-s-line"></i></span>
            </div>
        </div>

        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between w-full text-left text-lg font-medium text-gray-900">
                Can I use FlowBite for commercial purposes?
                <span className="text-gray-500"><i className="ri-arrow-down-s-line"></i></span>
            </div>
        </div>

        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between w-full text-left text-lg font-medium text-gray-900">
                What about browser support?
                <span className="text-gray-500"><i className="ri-arrow-down-s-line"></i></span>
            </div>
        </div>
    </div>
</div>


        </>
     );
}

export default Faqs;